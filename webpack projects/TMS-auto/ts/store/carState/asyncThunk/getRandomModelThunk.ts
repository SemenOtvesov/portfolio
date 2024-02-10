import { createAsyncThunk } from '@reduxjs/toolkit';
import { TrootState } from '@store/index';
import getRandomModelRequest, { TrendomModelResponse } from '../requests/getRandomModelRequest';
import { getBrandListFn } from './getBrandListThunk';

export default createAsyncThunk(
    'carState/getRandomModel',
    async (data, { getState, rejectWithValue }) => {
        const state = getState() as TrootState;
        let brandList = state.carState.brandList;
        if (!state.carState.brandListJapan[0]) {
            const res = await getBrandListFn(getState);
            Array.isArray(res) && (brandList = res);
        }
        const res: TrendomModelResponse = await getRandomModelRequest(brandList);

        if (res) {
            return res;
        } else {
            return rejectWithValue('');
        }
    },
);
