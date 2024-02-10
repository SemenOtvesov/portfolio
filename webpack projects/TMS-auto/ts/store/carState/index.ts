import { createSlice } from '@reduxjs/toolkit';
import { TcarState } from '@locTypes/state/carState';

import getBrandListReduser from './extraReducers/getBrandListReduser';
import setActiveBrandReduser from './extraReducers/setActiveBrandReduser';
import getRecentlyPurchasedReduser from './extraReducers/getRecentlyPurchasedReduser';
import getRandomModelReduser from './extraReducers/getRandomModelReduser';
import setActiveModelReduser from './extraReducers/setActiveModelReduser';
import setActiveLotReduser from './extraReducers/setActiveLotReduser';

import setActiveModelListReduser from './redusers/setActiveModelListReduser';

import setActiveBrand from './asyncThunk/setActiveBrandThunk';
import getRecentlyPurchasedThunk from './asyncThunk/getRecentlyPurchasedThunk';
import getRandomModelThunk from './asyncThunk/getRandomModelThunk';
import setActiveModelThunk from './asyncThunk/setActiveModelThunk';
import getBrandList from './asyncThunk/getBrandListThunk';
import setActiveLotThunk from './asyncThunk/setActiveLotThunk';

const initialState: TcarState = {
    brandList: [],
    japan: {},
    korea: {},
    recentlyPurchased: [],

    activeBrandName: '',
    activeBrandObj: [],
    downloadBrand: [],
    recentlyPurchasedCheck: false,

    brandListJapan: [],
    brandListKorea: [],

    activeModel: '',
    activeModelList: [],
    activeLot: {},
};

const carState = createSlice({
    name: 'carState',
    initialState,
    reducers: {
        setActiveModelFast: (state, { payload }: { payload: string }) => {
            state.activeModel = payload;
        },
        setActiveModelList: setActiveModelListReduser,
    },
    extraReducers: build => {
        build.addCase(getBrandList.fulfilled, getBrandListReduser);
        build.addCase(setActiveBrand.fulfilled, setActiveBrandReduser);
        build.addCase(setActiveModelThunk.fulfilled, setActiveModelReduser);
        build.addCase(getRandomModelThunk.fulfilled, getRandomModelReduser);
        build.addCase(getRecentlyPurchasedThunk.fulfilled, getRecentlyPurchasedReduser);
        build.addCase(setActiveLotThunk.fulfilled, setActiveLotReduser);
    },
});
export const { setActiveModelFast, setActiveModelList } = carState.actions;
export default carState;
