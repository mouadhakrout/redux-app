import{UPDATE_USER} from '../actions/user-actions'
export const userReducer = function(state = '',action){
    switch(action.type){
        case UPDATE_USER:
            return action.playload.user;
        default: return state;
    }
}