import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./features/sidebarSlice/sidebarSlice";
import subredditSlice from "./features/subreddits/SubredditSlice";
import searchformSlice from "./features/searchformSlice/searchformSlice";
import postsSlice from "./features/postsSlice/postsSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    subredditLinks: subredditSlice,
    searchform: searchformSlice,
    posts: postsSlice,
  },
});
