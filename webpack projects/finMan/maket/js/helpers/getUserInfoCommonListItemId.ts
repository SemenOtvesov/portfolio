import { Tmonth, TuserInfoCommonListItemNames } from '@js/types/state/user/userState';

export default function getUserInfoCommonListItemId(
    type: TuserInfoCommonListItemNames,
    month: Tmonth,
    getId: number,
): string {
    let retId = '';

    if (type === 'income') {
        const incomeList = month?.incomeList;
        const incomeListKey = month?.incomeListKeys;

        if (incomeList && incomeListKey) {
            let listIndex = 0;
            for (const key of incomeList) {
                if (key.id === getId) {
                    listIndex = incomeList.indexOf(key);
                }
            }
            retId = incomeListKey[listIndex];
        }
    }

    if (type === 'expense') {
        const expenseList = month?.expenseList;
        const expenseListKeys = month?.expenseListKeys;

        if (expenseList && expenseListKeys) {
            let listIndex = 0;
            for (const key of expenseList) {
                if (key.id === getId) {
                    listIndex = expenseList.indexOf(key);
                }
            }
            retId = expenseListKeys[listIndex];
        }
    }

    if (type === 'purpose') {
        const purposeList = month?.purposeList;
        const purposeListKeys = month?.purposeListKeys;

        if (purposeList && purposeListKeys) {
            let listIndex = 0;
            for (const key of purposeList) {
                if (key.id === getId) {
                    listIndex = purposeList.indexOf(key);
                }
            }
            retId = purposeListKeys[listIndex];
        }
    }

    return retId;
}
