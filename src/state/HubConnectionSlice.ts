import { HubConnection } from "@microsoft/signalr";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface HubConnectionSliceState {
    connection: HubConnection | null ;
    
} 
const initialState: HubConnectionSliceState = {
    connection: null ,
};
const HubConnectionSlice = createSlice({
    name: 'hubconnection',
    initialState,
    reducers: {
        setHubConnection: (state, action:PayloadAction<HubConnectionSliceState>) => {
            state.connection = action.payload.connection;
        },

    },
});

export const { setHubConnection } = HubConnectionSlice.actions;
export default HubConnectionSlice.reducer;