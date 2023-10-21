import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import notificationsReducer from "./reducers/notificationReducer";

const rootReducer = combineReducers({
  notifications: notificationsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
