import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./features/sidebarSlice/sidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
  },
});
