import initialState from './initialState';
import { ALL_LIST } from './constants';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_LIST:
            return {
                ...state,
                dataList: action.json,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;
