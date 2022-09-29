import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./features/sidebarSlice/sidebarSlice";
import subredditSlice from "./features/subreddits/SubredditSlice";
import searchformSlice from "./features/searchformSlice/searchformSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    subredditLinks: subredditSlice,
    searchform: searchformSlice,
  },
});
