import { Tmonth } from '@js/types/state/user/userState';

type Tprops = {
    activeMonth: false | Tmonth | undefined;
    monthList: Tmonth[] | undefined;
    monthListKey: string[] | undefined;
};

export default ({ activeMonth, monthList, monthListKey }: Tprops) => {
    if (!activeMonth || !monthListKey) {
        return;
    }
    let monthIndex: number | undefined;
    monthList?.forEach((month, i) => {
        if (month.title === activeMonth.title && month.year === activeMonth.year) {
            monthIndex = i;
        }
    });
    return monthIndex != undefined ? monthListKey[monthIndex] : '';
};
