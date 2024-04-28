import { TrecomendationVideoState } from '@app/locTypes/state/recomendationVideoState';
import { createSlice } from '@reduxjs/toolkit';
import getRecomendationsVideoThunk from './asyncThunk/getRecomendationVideoThunk';
import getRecomendationVideoReduser from './extraReducers/getRecomendationVideoReduser';

const initialState: TrecomendationVideoState = { videoList: [] };

const recomendationVideoState = createSlice({
    name: 'recomendationVideoState',
    initialState,
    reducers: {},
    extraReducers: build => {
        build.addCase(getRecomendationsVideoThunk.fulfilled, getRecomendationVideoReduser);
    },
});
export const {} = recomendationVideoState.actions;
export default recomendationVideoState;
