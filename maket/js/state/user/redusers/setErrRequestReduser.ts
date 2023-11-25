import { TuserState } from '@js/types/state/user/userState';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const setErrRequestReduser: CaseReducer<TuserState, PayloadAction<boolean>> = (state, action) => {
    state.errRequest = action.payload;
};
export default setErrRequestReduser;
