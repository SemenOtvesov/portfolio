import { createSlice } from '@reduxjs/toolkit';

const headerState = createSlice({
    name: 'headerState',
    initialState: { state: false },
    reducers: {
        setState: state => {
            state.state = !state.state;
        },
    },
});
export const { setState } = headerState.actions;
export default headerState;
