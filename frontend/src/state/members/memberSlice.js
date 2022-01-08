import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import Axios from "axios";

const initialState = [{
    members: {
        isLoading: false
      }
}]

export const fetchMembers = createAsyncThunk('members/fetchMembers', async () => {
    const response = await Axios.get("http://localhost:8080/member/getAll");
    console.log('FETCH MEMBER RESPONSE', response);
    return response.data
})

export const addMember = createAsyncThunk('members/add', async mem => {
    const {fname,lname,email} = mem;
    const response = await Axios.post("http://localhost:8080/member/add", {
        fname,
        lname,
        email
    });
    console.log("ADD MEMBER RESPONSE", response);
    const allMembers = await Axios.get("http://localhost:8080/member/getAll");
    console.log('FETCH MEMBER RESPONSE', allMembers);
    

    return allMembers.data
})

const memberSlice = createSlice({
    name: 'members',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchMembers.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(fetchMembers.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        })
        .addCase(addMember.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(addMember.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
    }
})

export default memberSlice.reducer

const selectMemberData = (state) => state.members.data;

export const selectMembers = createSelector(selectMemberData, (entities) => Object.values(entities))