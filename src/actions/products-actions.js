export default function productReducer(state = '',action){
    switch(action.type){
        case 'addProduct':
            return action.playload;
        default: return state;
    }
}