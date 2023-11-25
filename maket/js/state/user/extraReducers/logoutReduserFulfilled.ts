import { TuserState } from '@js/types/state/user/userState';
import { CaseReducer } from '@reduxjs/toolkit';

const loginReduser: CaseReducer<TuserState> = state => {
    state.userUid = '';
    state.user = undefined;
};
export default loginReduser;
