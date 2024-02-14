import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../utils/CounterSlice/index";
import genresReducer from "./slices/genresSlice";
import platformReducer from "./slices/platformSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    genre: genresReducer,
    platform: platformReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
