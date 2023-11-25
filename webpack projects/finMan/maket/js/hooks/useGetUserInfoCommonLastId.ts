import {
    TuserInfoCommonListItem,
    TuserInfoCommonListItemNames,
} from '@js/types/state/user/userState';
import useAppSelector from './useAppSelector';

export default (type: TuserInfoCommonListItemNames): number => {
    const month = useAppSelector(state => state.userState.activeMonth);
    const incomeList = month ? (month.incomeList ? month.incomeList : []) : [];
    const purposeList = month ? (month.incomeList ? month.purposeList : []) : [];
    const expenseList = month ? (month.incomeList ? month.expenseList : []) : [];

    if (type === 'income') {
        return getLastId(incomeList);
    }
    if (type === 'expense') {
        return getLastId(expenseList);
    }
    return getLastId(purposeList);
};

function getLastId(list: TuserInfoCommonListItem[] | undefined): number {
    let maxId = 0;
    list?.forEach(el => el.id > maxId && (maxId = el.id));
    return maxId;
}
