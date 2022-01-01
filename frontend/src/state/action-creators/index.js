import Axios from 'axios';
import { createAction } from "@reduxjs/toolkit";

export const addMember = createAction('member/addMember');
export const getMemberSuccess = createAction('member/getMemberSuccess');

export const getAllMembers = () => {
    return async (dispatch, getState) => {
        const stateBefore = getState();
        console.log("STATE BEFORE", stateBefore);
        try {
            const response = await Axios.get("http://localhost:8080/member/getAll");    
            console.log("response: ", response);
            dispatch(getMemberSuccess(response.data));
        } catch (error) {
            console.log('ERROR: ', error);
            dispatch(getMemberFailure(error));
        } finally {
            const stateAfter = getState();
            console.log('STATE AFTER', stateAfter);
        }
    };
};

export const loadingMembers = (isLoading) => ({
    type: 'LOADING_MEMBERS',
    payload: isLoading
})

// export const getMemberSuccess = members => ({
//     type: 'FETCH_MEMBER_SUCCESS',
//     payload: members
// });

export const getMemberFailure = error => ({
    type: 'FETCH_MEMBER_FAIL',
    payload: error
})