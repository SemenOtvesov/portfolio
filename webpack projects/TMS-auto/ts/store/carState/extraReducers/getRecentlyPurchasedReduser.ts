import { Car, TcarState } from '@locTypes/state/carState';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const reduser: CaseReducer<TcarState, PayloadAction<Car[] | undefined>> = (state, action) => {
    if (!action.payload) {
        return;
    }
    state.recentlyPurchased = action.payload;
    state.recentlyPurchasedCheck = true;
};
export default reduser;
