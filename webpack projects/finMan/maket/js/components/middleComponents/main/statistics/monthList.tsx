import React from 'react';
import useAppSelector from '@js/hooks/useAppSelector';
import useActiveMonth from '@js/hooks/useActiveMonth';
import monthListNames from '@constants/monthList';
import { Tmonth } from '@js/types/state/user/userState';
import { setActiveMonth } from '@js/state/user/userState';
import useAppDispatch from '@js/hooks/useAppDispatch';

type Tprops = {};

export default ({}: Tprops) => {
    const dispatch = useAppDispatch();
    const monthList = useAppSelector(state => state.userState.user?.monthList);
    const activeMonth = useActiveMonth();
    if (!monthList) {
        return <></>;
    }

    const sortMonthList = [...monthList].sort((month1, month2) => {
        const month1Index = monthListNames.indexOf(month1.title);
        const month2Index = monthListNames.indexOf(month2.title);
        if (month1.year === month2.year) {
            if (month1Index > month2Index) {
                return -1;
            } else if (month1Index === month2Index) {
                return 0;
            } else return 1;
        } else if (month1.year > month2.year) {
            return -1;
        } else {
            return 1;
        }
    });

    return sortMonthList.map(month => (
        <div
            key={month.title + month.year}
            className={`statistics__right-item ${checkActive(activeMonth, month) ? 'active' : ' '}`}
            onClick={() => dispatch(setActiveMonth(month))}
        >
            <div className="statistics__right-item-title">
                {month.title + ' '}
                {new Date().getFullYear() !== month.year ? month.year : ''}
            </div>
            <div className="statistics__right-item-icon">
                <span className="icon-arrow" />
            </div>
        </div>
    ));
};

function checkActive(activeMonth: false | undefined | Tmonth, month: Tmonth) {
    if (activeMonth) {
        if (activeMonth.title === month.title && activeMonth.year === month.year) {
            return true;
        }
    }
    return false;
}
