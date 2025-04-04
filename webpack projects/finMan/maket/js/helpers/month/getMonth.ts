import { Tmonth } from '@js/types/state/user/userState';

type Tprops = {
    activeMonth: false | Tmonth | undefined;
    monthList: Tmonth[] | undefined;
};

export default ({ activeMonth, monthList }: Tprops) => {
    if (!activeMonth) {
        return;
    }
    let monthRet: undefined | Tmonth;
    monthList?.forEach(month => {
        if (month.title === activeMonth.title && month.year === activeMonth.year) {
            monthRet = month;
        }
    });
    return monthRet;
};
