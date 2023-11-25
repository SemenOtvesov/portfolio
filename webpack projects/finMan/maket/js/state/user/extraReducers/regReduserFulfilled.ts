import { TuserInfo, TuserState } from '@js/types/state/user/userState';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const loginReduser: CaseReducer<TuserState, PayloadAction<TuserInfo | undefined>> = (
    state,
    action,
) => {
    state.user = action.payload;
};
export default loginReduser;
