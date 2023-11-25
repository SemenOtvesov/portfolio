import monthList from '@js/constants/monthList';
import { Tmonth, Tuser, TuserState } from '@js/types/state/user/userState';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const loginReduser: CaseReducer<TuserState, PayloadAction<Tuser>> = (state, action) => {
    state.user = {
        ...action.payload,
        monthList: action.payload.monthList
            ? Object.values(action.payload.monthList).map(month => formattingMonth(month))
            : [],
        monthListKey: action.payload.monthList ? Object.keys(action.payload.monthList) : [],
    };
    if (action.payload.monthList) {
        const actMonth = new Date().getMonth();
        const activeMonth = Object.values(action.payload.monthList).find(
            month => month.title === monthList[actMonth] && month.year === new Date().getFullYear(),
        );

        if (activeMonth) {
            state.activeMonth = formattingMonth(activeMonth);
        } else {
            state.activeMonth = false;
        }
    }
};
export default loginReduser;

function formattingMonth(month: Tmonth) {
    return {
        title: month.title,
        year: month.year,
        incomeList: month.incomeList ? Object.values(month.incomeList) : [],
        incomeListKeys: month.incomeList ? Object.keys(month.incomeList) : [],
        expenseList: month.expenseList ? Object.values(month.expenseList) : [],
        expenseListKeys: month.expenseList ? Object.keys(month.expenseList) : [],
        purposeList: month.purposeList ? Object.values(month.purposeList) : [],
        purposeListKeys: month.purposeList ? Object.keys(month.purposeList) : [],
    };
}
