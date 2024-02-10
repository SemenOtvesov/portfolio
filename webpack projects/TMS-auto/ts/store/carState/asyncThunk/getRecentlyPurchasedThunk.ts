import { createAsyncThunk } from '@reduxjs/toolkit';
import { TrootState } from '@store/index';
import getRecentlyPurchasedRequest from '../requests/getRecentlyPurchasedRequest';

export default createAsyncThunk(
    'carState/getRecentlyPurchasedThunk',
    async (data, { getState, rejectWithValue }) => {
        const state = getState() as TrootState;
        if (state.carState.recentlyPurchasedCheck) return;

        const res = await getRecentlyPurchasedRequest();

        if (res) {
            return res;
        } else {
            return rejectWithValue('');
        }
    },
);
