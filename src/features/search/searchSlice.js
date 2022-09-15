import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
};

const searchSlice = createSlice({
  name: "searchRedditPosts",
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.query = action.payload;
    },
    clearSearchQuery(state, action) {
      state.query = "";
    },
  },
});

export const selectSearchQuery = (state) => state.searchRedditPosts.query;
export const { setSearchQuery, clearSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
