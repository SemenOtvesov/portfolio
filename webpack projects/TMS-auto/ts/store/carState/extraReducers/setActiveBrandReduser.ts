import { TcarState } from '@locTypes/state/carState';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { Treturn } from '../asyncThunk/setActiveBrandThunk';

const reduser: CaseReducer<TcarState, PayloadAction<Treturn | string>> = (state, action) => {
    const brand: string =
        typeof action.payload === 'string' ? action.payload : action.payload.brand;

    if (typeof action.payload !== 'string') {
        state.downloadBrand.push(action.payload.brand);
        if (state[action.payload.country][action.payload.brand]) {
            state[action.payload.country][action.payload.brand].concat(action.payload.arr);
        } else {
            state[action.payload.country][action.payload.brand] = action.payload.arr;
        }
    }

    const convatObj = { ...state.japan, ...state.korea };
    for (const key in convatObj) {
        if (key === brand) {
            state.activeBrandObj = convatObj[key];
        }
    }
    state.activeBrandName =
        typeof action.payload !== 'string' ? action.payload.brand : action.payload;
};
export default reduser;
