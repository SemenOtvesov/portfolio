import { createAsyncThunk } from '@reduxjs/toolkit';
import { TrootState } from '@store/index';
import getBrandListRequest from '../requests/getBrandListRequest';
import { TbrandList } from '@locTypes/state/carState';

type TreturnValue = Promise<TbrandList | undefined>;

export default createAsyncThunk(
    'carState/getBrandList',
    async (data, { getState, rejectWithValue }) => {
        const res = await getBrandListFn(getState);

        if (res) {
            return res;
        } else {
            return rejectWithValue('');
        }
    },
);
export const getBrandListFn = async (getState: () => unknown): TreturnValue => {
    {
        const state = getState() as TrootState;
        if (state.carState.brandList[0]) return;
        return await getBrandListRequest();
    }
};
