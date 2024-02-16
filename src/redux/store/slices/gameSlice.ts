import { Game } from "@/redux/types/sharedInterfaces";
import { ApiResponse } from "@/redux/types/sharedInterfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface initialStateTypes {
  games: ApiResponse<Game> | null;
  status: "idle" | "loading" | "success" | "failed";
}

const initialState: initialStateTypes = {
  status: "idle",
  games: null,
};

const BASE_URL = "https://api.rawg.io/api/";

export const fetchGames = createAsyncThunk<
  ApiResponse<Game>,
  { page?: number; genre?: string },
  { rejectValue: string }
>("games/fetchGames", async ({ page = 1, genre }, { rejectWithValue }) => {
  try {
    let url = `${BASE_URL}games?key=${
      import.meta.env.VITE_RAWG_API_KEY
    }&page=${page}`;
    if (genre) {
      url += `&genres=${genre}`;
    }
    const response = await axios.get<ApiResponse<Game>>(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("An unknown error occurred");
  }
});

const gameSlice = createSlice({
  name: "gamesList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.status = "success";
        state.games = action.payload;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default gameSlice.reducer;
