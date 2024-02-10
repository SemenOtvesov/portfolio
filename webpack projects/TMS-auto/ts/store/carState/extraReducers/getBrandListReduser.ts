import { TbrandList, TcarState } from '@locTypes/state/carState';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const reduser: CaseReducer<TcarState, PayloadAction<TbrandList | undefined>> = (state, action) => {
    if (!action.payload) {
        return;
    }
    state.brandList = action.payload;
    state.brandListJapan = action.payload
        .map(el => (el.loc === 'japan' ? el.brand : ''))
        .filter(el => el != '');
    state.brandListKorea = action.payload
        .map(el => (el.loc === 'korea' ? el.brand : ''))
        .filter(el => el != '');
};
export default reduser;
