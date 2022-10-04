import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// to retrieve comments from reddit json API
const getComments = createAsyncThunk(
  "comments/getComments",
  async (permalink) => {
    const response = await fetch(`https://www.reddit.com/${permalink}.json`);
    const json = await response.json();
    return json[1].data.children.map((comment) => comment.data);
  }
);

const initialState = {
  comments: [],
  loadingComments: false,
  errorComments: false,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  extraReducers: {
    [getComments.pending]: (state) => {
      state.loadingComments = true;
      state.errorComments = false;
    },
    [getComments.fulfilled]: (state, action) => {
      state.loadingComments = false;
      state.comments = action.payload;
      state.errorComments = false;
    },
    [getComments.rejected]: (state) => {
      state.loadingComments = false;
      state.errorComments = true;
    },
  },
});

export { getComments };
export default commentsSlice.reducer;
