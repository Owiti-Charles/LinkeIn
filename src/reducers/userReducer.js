import { SET_USER } from '../actions/actionType';

const Initial_State = {
    user: null,
}

const userReducer = (state = Initial_State, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
            }
        default:
            return state
    }
};

export default userReducer;
