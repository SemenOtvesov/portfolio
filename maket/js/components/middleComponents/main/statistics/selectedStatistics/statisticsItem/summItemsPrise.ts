import { TuserInfoCommonListItem } from '@js/types/state/user/userState';

export default (subItems: TuserInfoCommonListItem[] | undefined) => {
    let summ = 0;
    subItems?.forEach(item => (summ += item.prise));
    return summ;
};
