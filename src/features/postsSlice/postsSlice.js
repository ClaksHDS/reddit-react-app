import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//to retrieve posts from the reddit API
const getPosts = createAsyncThunk("posts/getPosts", async (subreddit) => {
  const response = await axios(`https://www.reddit.com${subreddit}.json`);
  const data = await response.json();
  console.log(data);
  return data.data.children.map((post) => post.data);
});

const initialState = {
  posts: [],
  isLoading: false,
  hasError: false,
  searchTerm: "",
  selectedSubreddit: "/r/pics/",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    loadPosts: (state, action) => {
      state.posts = action.payload;
    },
    startFetchingPosts: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    getSuccessPosts: (state, action) => {
      state.isLoading = true;
      state.posts = action.payload;
    },
    getUnsuccessfulPosts: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    getSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    getSelectedSubreddit: (state, action) => {
      state.selectedSubreddit = action.payload;
      state.searchTerm = "";
    },
  },
});

export const {
  loadPosts,
  startFetchingPosts,
  getSuccessPosts,
  getUnsuccessfulPosts,
  getSearchTerm,
  getSelectedSubreddit,
} = postsSlice.actions;
export { getPosts };

export default postsSlice.reducer;

//to retrieve posts from a subreddit
export const fetchPosts = (subreddit) => async (dispatch) => {
  try {
    dispatch(startFetchingPosts());
    const posts = await getPosts(subreddit);
    const postsWithData = posts.map((post) => ({
      ...post,
    }));
    dispatch(getSuccessPosts(postsWithData));
  } catch (error) {
    dispatch(getUnsuccessfulPosts());
  }
};
