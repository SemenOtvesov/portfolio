import { Tmonth, TuserState } from '@js/types/state/user/userState';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const setErrRequestReduser: CaseReducer<TuserState, PayloadAction<Tmonth>> = (state, action) => {
    state.activeMonth = action.payload;
};
export default setErrRequestReduser;
