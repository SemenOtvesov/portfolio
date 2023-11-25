import { TuserInfoCommonListItemNames } from '@js/types/state/user/userState';

export default function typeComparison<T>(
    type: TuserInfoCommonListItemNames,
    arr: [() => T, () => T, () => T],
) {
    if (type === 'income') {
        return arr[0]();
    }
    if (type === 'expense') {
        return arr[1]();
    }
    if (type === 'purpose') {
        return arr[2]();
    }
}
