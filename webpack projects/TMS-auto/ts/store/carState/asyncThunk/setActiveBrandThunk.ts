import { createAsyncThunk } from '@reduxjs/toolkit';
import { TrootState } from '@store/index';
import setActiveBrandRequest from '../requests/setActiveBrandRequest';
import { Car, Tcountry } from '@locTypes/state/carState';

export type Treturn = { arr: Car[]; brand: string; country: Tcountry };

export default createAsyncThunk(
    'carState/setActiveList',
    async (brand: string, { getState, rejectWithValue }) => {
        const state = getState() as TrootState;

        if (brand === 'Все') return rejectWithValue('');
        if (!state.carState.downloadBrand.find(el => el === brand)) {
            const res = await setActiveBrandRequest({ brand, start: 0, limit: 50 });
            const ret: Treturn = { arr: Object.values(res.arr), brand, country: res.country };
            return ret;
        }
        return brand;
    },
);
