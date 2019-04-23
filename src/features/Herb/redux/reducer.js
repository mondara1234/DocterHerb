import initialState from './initialState';
import { ALL_HERB } from './constants';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_HERB:
            return {
                ...state,
                herb: action.json,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;
