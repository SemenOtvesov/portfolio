import { Car, TcarState } from '@locTypes/state/carState';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const reduser: CaseReducer<TcarState, PayloadAction<Car[]>> = (state, action) => {
    state.activeModelList = action.payload;
};
export default reduser;
