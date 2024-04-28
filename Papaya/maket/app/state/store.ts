import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeState from './themeState';
import authState from './authState';
import recomendationVideoState from './recomendationVideoState';
import activeVideoState from './activeVideoState';

const rootReduser = combineReducers({
    [themeState.name]: themeState.reducer,
    [authState.name]: authState.reducer,
    [recomendationVideoState.name]: recomendationVideoState.reducer,
    [activeVideoState.name]: activeVideoState.reducer,
});

const store = configureStore({
    reducer: rootReduser,
});
export default store;

export type TrootState = ReturnType<typeof store.getState>;
export type TappDispatch = typeof store.dispatch;
