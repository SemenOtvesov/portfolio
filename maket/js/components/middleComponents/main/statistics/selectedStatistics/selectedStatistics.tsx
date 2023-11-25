import React from 'react';
import StatisticsItem from './statisticsItem/statisticsItem';
import useAppSelector from '@js/hooks/useAppSelector';
import StatisticsCharts from './statisticsCharts/statisticsCharts';
import StatisticsButton from './statisticsButton/statisticsButton';

export default () => {
    const month = useAppSelector(state => state.userState.activeMonth);

    const incomeList = month ? (month.incomeList ? month.incomeList : []) : [];
    const expenseList = month ? (month.expenseList ? month.expenseList : []) : [];
    const purposeList = month ? (month.purposeList ? month.purposeList : []) : [];

    return (
        <div className="statistics__left">
            <div className="statistics__left-title">Май</div>
            <div className="statistics__left-main">
                <StatisticsItem
                    title="Доходы"
                    summaryTitle="Общий доход: "
                    subItems={incomeList}
                    type="income"
                />
                <StatisticsItem
                    title="Расходы"
                    summaryTitle="Сумма расходов: "
                    subItems={expenseList}
                    type="expense"
                />
            </div>

            <StatisticsItem
                title="Финансовые цели"
                summaryTitle="Общая стоимость финансовых целей: "
                subItems={purposeList}
                type="purpose"
            />
            <StatisticsCharts />
            <StatisticsButton />
        </div>
    );
};
