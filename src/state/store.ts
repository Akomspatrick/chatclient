import { configureStore } from "@reduxjs/toolkit";
import SelectedAppReducer from "./SelectedAppSlice";
export const store = configureStore({
    reducer: {
        selectedApp: SelectedAppReducer,
        // Add more reducers here ie slices
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
