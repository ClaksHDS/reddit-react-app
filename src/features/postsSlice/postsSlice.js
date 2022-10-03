import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

//to retrieve posts from the reddit API
const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await fetch(`https://www.reddit.com/r/all.json`);
  const json = await response.json();
  return json.data.children.map((post) => post.data);
});

// to retrieve posts matching a specific subreddit
const getSubredditPosts = createAsyncThunk(
  "posts/getSubredditPosts",
  async (subreddit) => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
  }
);

const initialState = {
  posts: [],
  loading: false,
  hasError: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    filterPosts: (state, action) => {
      state.posts = state.posts.filter((post) => {
        return post.title.toLowerCase().includes(action.payload.toLowerCase());
      });
    },
  },
  extraReducers: {
    // handle promises for getting the posts
    [getPosts.pending]: (state) => {
      state.loading = true;
      state.hasError = false;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.hasError = false;
    },
    [getPosts.rejected]: (state) => {
      state.loading = false;
      state.hasError = true;
    },
    // handle promises for getting posts matching a subreddit
    [getSubredditPosts.pending]: (state) => {
      state.loading = true;
      state.hasError = false;
    },
    [getSubredditPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.hasError = false;
    },
    [getSubredditPosts.rejected]: (state) => {
      state.loading = false;
      state.hasError = true;
    },
  },
});

export const { filterPosts } = postsSlice.actions;
export { getPosts, getSubredditPosts };

export default postsSlice.reducer;
