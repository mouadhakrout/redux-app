export const UPDATE_USER = 'users:updateUser';

export const updateUser = function (newUser) {
    return {
        type: UPDATE_USER,
        playload:{user:newUser}
    }

}