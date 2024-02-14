import { Genre } from "@/redux/types/genre";
import { ApiResponse } from "@/redux/types/sharedInterfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface initialStateTypes {
  data: ApiResponse<Genre> | null;
  status: "idle" | "loading" | "success" | "failed";
}

const initialState: initialStateTypes = {
  status: "idle",
  data: null,
};

const BASE_URL = "https://api.rawg.io/api/";

export const fetchGenres = createAsyncThunk<
  ApiResponse<Genre>,
  void,
  { rejectValue: string }
>("genre/fetchGenres", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<ApiResponse<Genre>>(
      `${BASE_URL}genres?key=${import.meta.env.VITE_RAWG_API_KEY}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("An unknown error occurred");
  }
});

const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchGenres.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default genreSlice.reducer;
