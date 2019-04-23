import { ALL_HERB, SET_LOADING } from './constants';

export const AllHerb = (data) => ({
    type: ALL_HERB,
    json: data
});

export const SETLOADING = () => ({
    type: SET_LOADING
});