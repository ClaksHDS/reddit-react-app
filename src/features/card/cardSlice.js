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
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

//export const selectPost = (state) => state.redditPost.posts;
export const selectPostIsLoading = (state) => state.redditPost.isLoading;
export const selectPostHasError = (state) => state.redditPost.hasError;
export default redditPostSlice.reducer;
