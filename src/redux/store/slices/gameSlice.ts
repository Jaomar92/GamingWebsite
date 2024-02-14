import { Game } from "@/redux/types/sharedInterfaces";
import { ApiResponse } from "@/redux/types/sharedInterfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface initialStateTypes {
  data: ApiResponse<Game> | null;
  status: "idle" | "loading" | "success" | "failed";
}

const initialState: initialStateTypes = {
  status: "idle",
  data: null,
};

const BASE_URL = "https://api.rawg.io/api/";

export const fetchGames = createAsyncThunk<
  ApiResponse<Game>,
  void,
  { rejectValue: string }
>("genre/fetchGenres", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<ApiResponse<Game>>(
      `${BASE_URL}games?key=${import.meta.env.VITE_RAWG_API_KEY}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("An unknown error occurred");
  }
});

const gameSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default gameSlice.reducer;
