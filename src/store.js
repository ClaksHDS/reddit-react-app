import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./features/search/searchSlice";
import { redditPostSlice } from "./features/card/cardSlice";
import sidebarslice from "./features/search/sidebarslice";

export const store = configureStore({
  reducer: {
    searchRedditPosts: searchSlice,
    sidebar: sidebarslice,
    redditPost: redditPostSlice,
  },
});
