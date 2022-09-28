import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getSubreddits = createAsyncThunk(
  "subredditLinks/getSubreddits",
  async () => {
    const response = await fetch("https://www.reddit.com/subreddits.json");
    const json = await response.json();
    return json;
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
    [getSubreddits.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },

    [getSubreddits.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      if (action.payload.error) {
        state.hasError = true;
        return;
      }
      let subredditsResponse = action.payload.data.children;
      let subredditLinks = [];
      subredditsResponse.forEach((subreddit) => {
        if (subreddit.kind !== "t5") return;
        let newSubreddit = {
          icon: subreddit.data.icon_img,
          id: subreddit.data.id,
          name: subreddit.data.display_name,
          url: subreddit.data.url,
        };
        subredditLinks.push(newSubreddit);
      });
      state.subredditLinks = [...subredditLinks];
    },
  },
});

export { getSubreddits };

export default subredditSlice.reducer;
