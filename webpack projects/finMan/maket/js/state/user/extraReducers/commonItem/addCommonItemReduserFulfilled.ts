import getMonth from '@js/helpers/month/getMonth';
import setMonth from '@js/helpers/month/setMonth';
import {
    TuserInfoCommonListItem,
    TuserInfoCommonListItemNames,
    TuserState,
} from '@js/types/state/user/userState';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

type Tprop = {
    data: TuserInfoCommonListItem | undefined;
    type: TuserInfoCommonListItemNames;
    key: string;
};
const loginReduser: CaseReducer<TuserState, PayloadAction<Tprop>> = (state, action) => {
    const month = getMonth({
        activeMonth: state.activeMonth,
        monthList: state.user?.monthList,
    });

    if (!action.payload.data || !month) {
        return;
    }

    let userList =
        action.payload.type === 'income'
            ? month?.incomeList
            : action.payload.type === 'expense'
            ? month?.expenseList
            : month.purposeList;

    let userListKey =
        action.payload.type === 'income'
            ? month?.incomeListKeys
            : action.payload.type === 'expense'
            ? month?.expenseListKeys
            : month.purposeListKeys;

    if (userList) {
        userList?.push(action.payload.data);
        userListKey?.push(action.payload.key);
    } else {
        if (action.payload.type === 'income') {
            if (typeof action.payload.data.completed === 'boolean') return;
            month.incomeList = [action.payload.data];
            month.incomeListKeys = [action.payload.key];
        }
        if (action.payload.type === 'expense') {
            if (typeof action.payload.data.completed === 'boolean') return;
            month.expenseList = [action.payload.data];
            month.expenseListKeys = [action.payload.key];
        }
        if (action.payload.type === 'purpose') {
            month.purposeList = [action.payload.data];
            month.purposeListKeys = [action.payload.key];
        }
    }
    state.activeMonth = month;
    setMonth({ activeMonth: month, monthList: state.user?.monthList });

    if (!state.modified) state.modified = true;
};
export default loginReduser;
