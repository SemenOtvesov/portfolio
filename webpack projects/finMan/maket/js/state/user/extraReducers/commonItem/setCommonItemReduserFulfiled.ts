import {
    TuserInfoCommonListItem,
    TuserInfoCommonListItemNames,
    TuserState,
} from '@js/types/state/user/userState';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import typeComparison from './typeComparison';
import getMonth from '@js/helpers/month/getMonth';

type Tprop = {
    data: TuserInfoCommonListItem | undefined;
    type: TuserInfoCommonListItemNames;
};
const loginReduser: CaseReducer<TuserState, PayloadAction<Tprop>> = (state, action) => {
    const month = getMonth({
        activeMonth: state.activeMonth,
        monthList: state.user?.monthList,
    });
    if (!action.payload.data || !month) {
        return;
    }

    let userList = typeComparison<Array<TuserInfoCommonListItem> | undefined>(action.payload.type, [
        () => month?.incomeList,
        () => month?.expenseList,
        () => month?.purposeList,
    ]);

    if (userList) {
        const newUserList = userList.map(el => {
            if (el.id === action.payload.data?.id) {
                el = action.payload.data;
            }
            return el;
        });
        typeComparison<void>(action.payload.type, [
            () => {
                month.incomeList = newUserList;
                state.activeMonth && (state.activeMonth.incomeList = newUserList);
            },
            () => {
                month.expenseList = newUserList;
                state.activeMonth && (state.activeMonth.expenseList = newUserList);
            },
            () => {
                month.purposeList = newUserList;
                state.activeMonth && (state.activeMonth.purposeList = newUserList);
            },
        ]);
    }
    if (!state.modified) state.modified = true;
};
export default loginReduser;
