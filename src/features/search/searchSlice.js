import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getData from "../../utils/api";

const initialState = {
  query: "",
  isLoading: false,
  redditPosts: [],
};

const searchSlice = createSlice({
  name: "searchRedditPosts",
  initialState,
});

export const getRedditPost = createAsyncThunk("search/getRedditPost");

export default searchSlice.reducer;
