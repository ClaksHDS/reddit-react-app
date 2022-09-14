import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  query: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
});

export const searchSubject = createAsyncThunk(
  "search/searchSubject",
  async (query, thunkAPI) => {
    console.log(`subject researched : ${query}`);
  }
);

export default searchSlice.reducer;
