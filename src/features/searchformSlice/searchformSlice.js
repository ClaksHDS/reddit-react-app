import { createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from "../subreddits/SubredditSlice";

const initialState = {
  searchTerm: "",
  isLoading: false,
  noMatch: false,
};

const searchformSlice = createSlice({
  name: "searchform",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearch: (state) => {
      state.searchTerm = "";
      return state;
    },
  },
});

export const { setSearch, clearSearch } = searchformSlice.actions;
export default searchformSlice.reducer;
