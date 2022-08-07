import { configureStore } from '@reduxjs/toolkit';
import { ticketsReducer  } from './slices/TicketsSlice';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    ticketsReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};