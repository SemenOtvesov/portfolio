import { TuserState } from '@js/types/state/user/userState';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const setUserUidReduser: CaseReducer<TuserState, PayloadAction<string>> = (state, action) => {
    state.userUid = action.payload;
};
export default setUserUidReduser;
