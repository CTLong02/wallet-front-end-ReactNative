import { configureStore, Reducer, combineReducers } from '@reduxjs/toolkit';
import AppReducer from './appSlice';
export const store = configureStore({
    reducer: {
        app: AppReducer,
    },
});
