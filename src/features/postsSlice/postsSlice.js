import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";

//to retrieve posts from the reddit API
const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await axios(`https://www.reddit.com/r/all.json`);
  const json = await response.json();
  console.log(json);
  return json.data.children.map((post) => post.data);
});
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
  },
});

export const { filterPosts } = postsSlice.actions;
export { getPosts };

export default postsSlice.reducer;
