import { combineReducers } from 'redux'
import reducer from './members';

const reducers = combineReducers({
    members: reducer
})                            

export default reducers;