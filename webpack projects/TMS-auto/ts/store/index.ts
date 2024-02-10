import { combineReducers, configureStore } from '@reduxjs/toolkit';
import headerState from './headerState';
import carState from './carState';

const rootReduser = combineReducers({
    [headerState.name]: headerState.reducer,
    [carState.name]: carState.reducer,
});

export const store = configureStore({
    reducer: rootReduser,
});

export type TrootState = ReturnType<typeof store.getState>;
export type TappDispatch = typeof store.dispatch;
