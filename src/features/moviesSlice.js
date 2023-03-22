import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

export const fetchMovies = createAsyncThunk(
  "fetch/movies",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/movies");
      return res.json();
    } catch (error) {
      console.log(error);
    }
  }
);

export const moviesSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {},  
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export default moviesSlice.reducer;
