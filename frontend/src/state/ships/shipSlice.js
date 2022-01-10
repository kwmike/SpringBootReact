import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import Axios from "axios";

const initialState = [{
    ships: {
        isLoading: false
    }
}]

export const fetchAllShips = createAsyncThunk('ships/fetchAllShips', async () => {
    const response = await Axios.get('https://api.starcitizen-api.com/2dea455edb1ab63a210d99541f083fac/v1/cache/ships');
    console.log('FETCH SHIP RESPONSE', response);
    var sort_array = [];
    for (var key in response) {
        sort_array.push({key:key,net_total:response[key].net_total})
    }
    return response.data;
});

const shipSlice = createSlice({
    name: 'ships',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAllShips.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(fetchAllShips.fulfilled, (state, action) => {
            console.log('FETCH ACTION PAYLOAD', action.payload.data);
            state.data = action.payload.data;
            state.isLoading = false;
        })
    }
})

export default shipSlice.reducer;

const selectAllShipData = (state) => state.ships.data;

export const selectAllShips = createSelector(selectAllShipData, (entities) => Object.values(entities));