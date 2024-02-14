import { Platform } from "@/redux/types/platform";
import { ApiResponse } from "@/redux/types/sharedInterfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface initialStateTypes {
  data: ApiResponse<Platform> | null;
  status: "idle" | "loading" | "success" | "failed";
}

const initialState: initialStateTypes = {
  status: "idle",
  data: null,
};

const BASE_URL = "https://api.rawg.io/api/";

export const fetchPlatforms = createAsyncThunk<
  ApiResponse<Platform>,
  void,
  { rejectValue: string }
>("platform/fetchPlatforms", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<ApiResponse<Platform>>(
      `${BASE_URL}platforms?key=${import.meta.env.VITE_RAWG_API_KEY}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("An unknown error occurred");
  }
});

const PlatformSlice = createSlice({
  name: "platform",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlatforms.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPlatforms.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchPlatforms.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default PlatformSlice.reducer;
