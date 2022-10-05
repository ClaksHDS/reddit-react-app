import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getSubreddits = createAsyncThunk(
  "subredditLinks/getSubreddits",
  async () => {
    const response = await fetch("https://www.reddit.com/subreddits.json");
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
  }
);

const initialState = {
  isLoading: true,
  hasError: false,
  subredditLinks: [],
};

const subredditSlice = createSlice({
  name: "subredditLinks",
  initialState,
  extraReducers: {
    [getSubreddits.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getSubreddits.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.subredditLinks = action.payload;
      state.hasError = false;
    },
    [getSubreddits.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export { getSubreddits };

export default subredditSlice.reducer;
