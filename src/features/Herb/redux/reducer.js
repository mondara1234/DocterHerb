import initialState from './initialState';
import { ALL_HERB, SET_LOADING } from './constants';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_HERB:
            return {
                ...state,
                herb: action.json,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};

export default reducer;
