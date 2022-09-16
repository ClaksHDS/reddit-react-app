import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../utils/api";

const initialState = {
  posts: [],
  isLoading: false,
  hasError: false,
};

export const getPosts = createAsyncThunk(
  "redditPost/getPosts",
  async (arg = "popular") => {
    let endpoint = "";
    if (arg === "new" || arg === "top") {
      endpoint = `${baseURL}/r/popular/${arg}.json`;
    } else if (arg.includes("=")) {
      endpoint = `${baseURL}/search.json?q${arg}`;
    } else {
      endpoint = `${baseURL}/r/${arg}.json`;
    }
    const response = await fetch(endpoint);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
  }
);

export const redditPostSlice = createSlice({
  name: "redditPost",
  initialState,
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getPosts.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      //state.posts = action.payload;
      if (action.payload.error) {
        state.hasError = true;
        return;
      }
      let posts = [];
      let postsResponse = action.payload.data.children;
      postsResponse.forEach((post) => {
        if (post.kind !== "t3") return;
        let newPost = {
          author: post.data.author,
          created: post.data.created,
          id: post.data.id,
          isVideo: post.data.is_video,
          link: post.data.permalink,
          media: post.data.media?.reddit_video,
          numOfComments: post.data.num_comments,
          postHint: post.data.post_hint,
          score: post.data.score,
          subreddit: post.data.subreddit_name_prefixed,
          text: post.data.selftext,
          title: post.data.title,
          thumbnail: {
            url: post.data.thumbnail,
            height: post.data.thumbnail_height,
            width: post.data.thumbnail_width,
          },
          url: post.data.url,
        };
        posts.push(newPost);
      });
      state.posts = [...posts];
    },
  },
});

export const selectPosts = (state) => state.posts;
export const selectPostIsLoading = (state) => state.redditPost.isLoading;
export const selectPostHasError = (state) => state.redditPost.hasError;
export default redditPostSlice.reducer;
