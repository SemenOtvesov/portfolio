import { Tmonth } from '@js/types/state/user/userState';
import {
    Chart,
    PolarAreaController,
    RadialLinearScale,
    ArcElement,
    Colors,
    Legend,
} from 'chart.js';
import summItemsPrise from '../statisticsItem/summItemsPrise';

type Tprops = {
    ref: React.RefObject<HTMLCanvasElement>;
    activeMonth: false | Tmonth | undefined;
};

export default ({ ref, activeMonth }: Tprops) => {
    if (!ref.current || !activeMonth) {
        return;
    }
    const incomeList = activeMonth.incomeList;
    const expenseList = activeMonth.expenseList;
    const purposeList = activeMonth.purposeList;

    Chart.register(PolarAreaController, RadialLinearScale, ArcElement, Colors, Legend);
    const polarArea = new Chart(ref.current, {
        type: 'polarArea',
        data: {
            datasets: [
                {
                    label: 'Статистика по',
                    data: [
                        summItemsPrise(incomeList),
                        summItemsPrise(expenseList),
                        summItemsPrise(purposeList),
                    ],
                },
            ],
            labels: ['Доходы', 'Расходы', 'Цели'],
        },
    });

    return () => polarArea.destroy();
};
