import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./features/sidebarSlice/sidebarSlice";
import subredditSlice from "./features/subreddits/SubredditSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    subredditLinks: subredditSlice,
  },
});
