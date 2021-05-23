import { SET_LOADING_STATUS, GET_POSTS } from '../actions/actionType';

const init_state = {
    posts: [],
    loading: false,
}

const postReducer = (state = init_state, action) => {
    switch(action.type) {
        case SET_LOADING_STATUS:
            return {
                ...state,
                loading: action.state,
            }
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state;
    }
}

export default postReducer;