import { createReducer } from "@reduxjs/toolkit";
const initialState = {
    isLoading: true,
    data: [],
    error: ''
  }
const reducer = createReducer(initialState, (builder) => {
    builder.addCase("FETCH_MEMBER_SUCCESS", (state, action) => {
            console.log("FETCH_MEMBER STATE", state);
            return {
                data: action.payload,
                isLoading:false,
                error:''
            }
        })
        .addCase("LOADING_MEMBERS", (state, action) => {
            state.members.isLoading = action.payload;
        })
        .addCase("FETCH_MEMBER_FAIL", (state, action) => {
            console.log("err state", state);
            console.log('err action', action);
            state.members.isLoading = false;
            state.members.error = action.payload;
        })
        .addCase("ADD_MEMBERS", (state, action) => {
            const {members} = state;
            const {payload} = action;
            console.log('ADD_MEMBERS STATE', state);
            console.log('ADD_MEMBERS members', members);
            if(members.data.includes(member => member.data.fname === payload.fname)) {
                return state.member.data[payload.id] = payload
            } else {
                state.data.push(payload);
            }
            
        })
})

export default reducer;