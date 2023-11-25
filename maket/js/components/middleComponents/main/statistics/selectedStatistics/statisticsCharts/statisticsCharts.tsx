import React, { useEffect, useRef } from 'react';
import ratioIncomeExpensesChart from './ratioIncomeExpensesChart';
import useAppSelector from '@js/hooks/useAppSelector';

type Tprops = {};

export default React.memo(({}: Tprops) => {
    const ratioIncomeExpensesChartRef = useRef<HTMLCanvasElement>(null);
    const activeMonth = useAppSelector(state => state.userState.activeMonth);
    useEffect(() => {
        return ratioIncomeExpensesChart({ ref: ratioIncomeExpensesChartRef, activeMonth });
    });

    return (
        <div className="statistics__left-chart-box">
            <div className="statistics__left-chart">
                <canvas ref={ratioIncomeExpensesChartRef} id="myChart"></canvas>
            </div>
        </div>
    );
});
