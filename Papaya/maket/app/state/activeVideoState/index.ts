import { TactiveVideoState } from '@app/locTypes/state/activeVideoState';
import { createSlice } from '@reduxjs/toolkit';
import { getVideoThunk } from './asyncThunk/getVideoThunk';
import getVideoReduser from './extraReducers/getVideoReduser';

const initialState: TactiveVideoState = { video: undefined };

const activeVideoState = createSlice({
    name: 'activeVideoState',
    initialState,
    reducers: {},
    extraReducers: build => {
        build.addCase(getVideoThunk.fulfilled, getVideoReduser);
    },
});
export const {} = activeVideoState.actions;
export default activeVideoState;
