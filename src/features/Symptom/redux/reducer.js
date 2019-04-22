import initialState from './initialState';
import { ALL_DETAILSYMPTOM } from './constants';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_DETAILSYMPTOM:
            return {
                ...state,
                detailSymptom: action.json,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;
