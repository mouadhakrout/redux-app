export const productsReducer = function (state = '',action){
    switch(action.type){
        case 'addProduct':
            return action.playload;
        default: return state;
    }
}