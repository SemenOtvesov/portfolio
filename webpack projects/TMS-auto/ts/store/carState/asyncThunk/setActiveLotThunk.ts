import { Car, TbrandList } from '@locTypes/state/carState';
import { TurlParams } from '@locTypes/urlPath';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TrootState } from '@store/index';
import { getBrandListFn } from './getBrandListThunk';
import setActiveLotRequest from '../requests/setActiveLotRequest';

export default createAsyncThunk(
    'carState/setActiveLot',
    async (params: TurlParams, { getState, rejectWithValue }) => {
        const state = getState() as TrootState;

        let brandList: TbrandList = state.carState.brandList;
        if (!state.carState.brandList[0]) {
            brandList = (await getBrandListFn(getState)) as TbrandList;
        }
        const [country] = brandList
            .map(el => (el.brand === params.brand ? el.loc : undefined))
            .filter(el => el != undefined);
        if (!country) return rejectWithValue('');

        const lot: (Car | undefined)[] =
            state.carState[country][params.brand]?.map(el => {
                if (el.brand === params.brand && el.id === +params.lot) {
                    return el;
                }
            }) || [];
        if (lot[0]) {
            return { country, lot: lot[0] };
        } else {
            const lot = await setActiveLotRequest(params, country);
            return { country, lot };
        }
    },
);
