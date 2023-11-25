import {
    TuserInfoCommonListItem,
    TuserInfoCommonListItemNames,
    TuserState,
} from '@js/types/state/user/userState';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import typeComparison from './typeComparison';
import getMonth from '@js/helpers/month/getMonth';

type Tprop = {
    id: number;
    type: TuserInfoCommonListItemNames;
};
const loginReduser: CaseReducer<TuserState, PayloadAction<Tprop>> = (state, action) => {
    const month = getMonth({
        activeMonth: state.activeMonth,
        monthList: state.user?.monthList,
    });
    if (!month) {
        return;
    }

    let userList = typeComparison<Array<TuserInfoCommonListItem> | undefined>(action.payload.type, [
        () => month?.incomeList,
        () => month?.expenseList,
        () => month?.purposeList,
    ]);
    let userListKey = typeComparison<string[] | undefined>(action.payload.type, [
        () => month?.incomeListKeys,
        () => month?.expenseListKeys,
        () => month?.purposeListKeys,
    ]);

    if (userList) {
        let userListKeyIndex: number | undefined = undefined;
        const newUserList = userList.filter(el => {
            if (el.id !== action.payload.id) {
                return el;
            } else {
                userListKeyIndex = userList?.indexOf(el);
            }
        });
        const newUserListKey = userListKey?.filter((el, i) => i !== userListKeyIndex);

        typeComparison<void>(action.payload.type, [
            () => {
                month.incomeList = newUserList;
                month.incomeListKeys = newUserListKey;
                state.activeMonth && (state.activeMonth.incomeList = newUserList);
            },
            () => {
                month.expenseList = newUserList;
                month.expenseListKeys = newUserListKey;
                state.activeMonth && (state.activeMonth.expenseList = newUserList);
            },
            () => {
                month.purposeList = newUserList;
                month.purposeListKeys = newUserListKey;
                state.activeMonth && (state.activeMonth.purposeList = newUserList);
            },
        ]);
    }
    if (!state.modified) state.modified = true;
};
export default loginReduser;
