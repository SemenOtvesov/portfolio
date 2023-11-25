import { useEffect, useState } from 'react';
import useAppSelector from './useAppSelector';
import summItemsPrise from '@js/components/middleComponents/main/statistics/selectedStatistics/statisticsItem/summItemsPrise';

export default () => {
    const [notificationValue, setNotificationValue] = useState<undefined | string>();
    const activeMonth = useAppSelector(state => state.userState.activeMonth);
    const modified = useAppSelector(state => state.userState.modified);
    const incomeList = activeMonth ? activeMonth.incomeList : [];
    const expenseList = activeMonth ? activeMonth.expenseList : [];

    useEffect(() => {
        if (summItemsPrise(incomeList) < summItemsPrise(expenseList) && modified) {
            setNotificationValue('Ваши расходы превысили доходы');
            setTimeout(() => {
                setNotificationValue(undefined);
            }, 500);
        }
    }, [activeMonth]);
    return [notificationValue];
};
