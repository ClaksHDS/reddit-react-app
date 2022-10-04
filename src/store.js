import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./features/sidebarSlice/sidebarSlice";
import subredditSlice from "./features/subreddits/SubredditSlice";
import searchformSlice from "./features/searchformSlice/searchformSlice";
import postsSlice from "./features/postsSlice/postsSlice";
import commentsSlice from "./features/commentsSlice/commentsSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    subredditLinks: subredditSlice,
    searchform: searchformSlice,
    posts: postsSlice,
    comments: commentsSlice,
  },
});
