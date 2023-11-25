import React, { useState } from 'react';
import StatisticsPopap from './statisticsPopap/statisticsPopap';
import { AnimatePresence } from 'framer-motion';
import MonthList from './monthList';

type Tprops = {};

export default ({}: Tprops) => {
    const [addMonth, setAddMonth] = useState<boolean>(false);

    return (
        <div className="statistics__right">
            <div className="statistics__right-title">Статистика за</div>
            <div className="statistics__right-list">
                <MonthList />
            </div>
            <AnimatePresence>
                {addMonth ? <StatisticsPopap setAddMonth={setAddMonth} /> : ''}
            </AnimatePresence>
            <button
                onClick={() => setAddMonth(prevSt => !prevSt)}
                className="statistics__right-button"
            >
                Добавить
            </button>
        </div>
    );
};
