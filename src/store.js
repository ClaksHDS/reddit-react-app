import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./features/search/searchSlice";
import { redditPostSlice } from "./features/card/cardSlice";

export const store = configureStore({
  reducer: {
    searchRedditPosts: searchSlice,
    redditPost: redditPostSlice,
  },
});
