import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../utils/api";

const getSubreddits = createAsyncThunk(
  "subreddits/getSubreddits",
  async (subreddit, thunkAPI) => {
    try {
      const response = await fetch(`${baseURL}/r/popular.json`);
      const json = await response.json;
      return json.data.children.data.subreddit;
    } catch (error) {}
  }
);

const subredditSlice = createSlice({
  name: "subreddits",
  initialState: {
    isLoading: false,
    hasError: false,
    subreddits: [],
  },
});
