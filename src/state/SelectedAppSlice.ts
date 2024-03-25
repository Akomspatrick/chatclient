import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface SelectedAppSliceState {
    selectedAppUrl: string;
    itemclicked: boolean;
    selectAppName: string;
    
}   
const initialState: SelectedAppSliceState = {
    selectedAppUrl: '',
    itemclicked: false,
    selectAppName: '',
};
const SelectedAppSlice = createSlice({
    name: 'selectedApp',
    initialState,
    reducers: {
        setSelectedApp: (state, action:PayloadAction<SelectedAppSliceState>) => {
            state.selectedAppUrl = action.payload.selectedAppUrl;
            state.selectAppName = action.payload.selectAppName;
            state.itemclicked = action.payload.itemclicked;
        },
        unSetSelectedApp: (state, action) => {
            state.selectedAppUrl = action.payload;
            state.selectAppName = '';
            state.itemclicked = false;
        },
        clearSelectedApp: (state) => {
            state.selectedAppUrl = "";
            state.itemclicked = false;
            state.selectAppName = '';
        },
    },
});

export const { setSelectedApp, unSetSelectedApp, clearSelectedApp } = SelectedAppSlice.actions;
export default SelectedAppSlice.reducer;