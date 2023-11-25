import { Tmonth, TuserState } from '@js/types/state/user/userState';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const loginReduser: CaseReducer<
    TuserState,
    PayloadAction<{ body: Tmonth; key: string } | undefined>
> = (state, action) => {
    if (!action.payload?.body && !action.payload?.key) {
        return;
    }
    if (!state.user) {
        return;
    }
    if (state.user.monthList && state.user.monthListKey) {
        state.user.monthList.push(action.payload.body);
        state.user.monthListKey.push(action.payload.key);
    } else {
        state.user.monthList = [action.payload.body];
        state.user.monthListKey = [action.payload.key];
    }
};
export default loginReduser;
