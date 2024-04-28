import { createSlice } from '@reduxjs/toolkit';

const initialState: TthemeState = 'DARK';

const themeState = createSlice({
    name: 'themeState',
    initialState,
    reducers: {
        setState: (state: TthemeState, { payload }: { payload: TthemeState }) => {
            payload === 'DARK' ? (state = 'DARK') : 'WHITE';
        },
    },
});
export const { setState } = themeState.actions;
export default themeState;
