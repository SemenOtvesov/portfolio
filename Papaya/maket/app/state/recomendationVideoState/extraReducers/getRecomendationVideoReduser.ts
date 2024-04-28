import { TrecomendationVideoState, Tvideo } from '@app/locTypes/state/recomendationVideoState';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const reduser: CaseReducer<TrecomendationVideoState, PayloadAction<Array<Tvideo>>> = (
    state,
    action,
) => {
    if (!action.payload) {
        return;
    }
    state.videoList = action.payload;
};
export default reduser;
