import { createReducer } from "@reduxjs/toolkit";
import Axios from "axios";
import { getMemberSuccess } from "../action-creators";
import { addMember } from "../action-creators";
const initialState = {
    isLoading: true,
    data: [],
    error: ''
  }
const reducer = createReducer(initialState, (builder) => {
    builder.addCase(getMemberSuccess, (state, action) => {
            console.log("FETCH_MEMBER STATE", state);
            return {
                ...state,
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
        .addCase(addMember, (state, action) => {
            const {payload} = action;
            const {fname,lname,email} = payload;
            console.log('ADD_MEMBERS STATE', state);
            Axios.post("http://localhost:8080/member/add", {
                fname,
                lname,
                email
            }).then((response) => {
                console.log(response);
            }).then(() => {
                getMemberSuccess();
            }).catch(function (error) {
                console.log('AXIOS ADD MEMBER ERROR', error)
            })
        })
})

export default reducer;