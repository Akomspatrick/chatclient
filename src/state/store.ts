import { configureStore } from "@reduxjs/toolkit";
import SelectedAppReducer from "./SelectedAppSlice";
import HubConnectionReducer from "./HubConnectionSlice";
export const store = configureStore({
  reducer: {
    selectedApp: SelectedAppReducer,
    hubconnection: HubConnectionReducer,
    // Add more reducers here ie slices
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
