import { Car, TcarState, Tcountry } from '@locTypes/state/carState';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const reduser: CaseReducer<
    TcarState,
    PayloadAction<{ lot: Car | undefined; country: Tcountry }>
> = (state, action) => {
    if (!action.payload || !action.payload.lot) return;
    if (!action.payload.lot.brand) return;

    if (!state[action.payload.country][action.payload.lot.brand]) {
        state[action.payload.country][action.payload.lot.brand] = [action.payload.lot];
    } else {
        state[action.payload.country][action.payload.lot.brand].push(action.payload.lot);
    }
    state.activeLot = action.payload.lot;
};
export default reduser;
