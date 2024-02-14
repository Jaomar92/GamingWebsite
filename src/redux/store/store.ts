import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../utils/CounterSlice/index";
import genresReducer from "./slices/genresSlice";
import platformReducer from "./slices/platformSlice";
import gameReducer from "./slices/gameSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    genre: genresReducer,
    platform: platformReducer,
    games: gameReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
