import { TactiveVideoState, TfullVideo } from '@app/locTypes/state/activeVideoState';
import { PayloadAction } from '@reduxjs/toolkit';
import { CaseReducer } from '@reduxjs/toolkit';

const reduser: CaseReducer<TactiveVideoState, PayloadAction<TfullVideo>> = (state, { payload }) => {
    if (payload) {
        state.video = payload;
    }
};
export default reduser;
