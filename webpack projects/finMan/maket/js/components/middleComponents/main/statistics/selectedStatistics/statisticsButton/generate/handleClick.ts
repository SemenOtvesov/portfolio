import {
    Document,
    Paragraph,
    Packer,
    TableCell,
    TableRow,
    Table,
    WidthType,
    AlignmentType,
} from 'docx';

import genTableTopCell from './genTableTopCell';
import genTextRun from './genTextRun';
import genTableInfo from './genTableInfo';
import getTableTasks from './getTableTasks';
import { Tmonth } from '@js/types/state/user/userState';
import summItemsPrise from '../../statisticsItem/summItemsPrise';

export default function handleClick(activeMonth: false | Tmonth | undefined) {
    if (!activeMonth) return;
    const incomeList = activeMonth.incomeList || [];
    const expenseList = activeMonth.expenseList || [];
    const purposeList = activeMonth.purposeList || [];

    const summIncome = summItemsPrise(incomeList);
    const summExpense = summItemsPrise(expenseList);

    const mainChildren = [
        new Table({
            width: { size: '100%', type: WidthType.DXA },
            rows: [
                new TableRow({
                    children: [
                        new TableCell(genTableTopCell(`Доходы за ноябрь: ${summIncome} ₽`)),
                        new TableCell(genTableTopCell(`Расходы за ноябрь: ${summExpense} ₽`)),
                    ],
                }),
            ],
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                genTextRun(22, `Расходы ${summIncome >= summExpense ? 'не' : ''} превысили доходы`),
            ],
            spacing: {
                before: 300,
            },
        }),

        new Paragraph({
            alignment: AlignmentType.LEFT,
            children: [genTextRun(24, 'Детально')],
            spacing: {
                before: 200,
            },
        }),
        new Table(
            genTableInfo({
                title: 'Доходы',
                list: incomeList.map(el => `${el.title}: ${el.prise} ₽`),
            }),
        ),
        new Paragraph({
            spacing: {
                before: 100,
            },
        }),
        new Table(
            genTableInfo({
                title: 'Расходы',
                list: expenseList.map(el => `${el.title}: ${el.prise} ₽`),
            }),
        ),
    ];

    if (purposeList[0]) {
        let check = true;
        purposeList.forEach(el => !el.completed && (check = false));
        mainChildren.push(
            new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [genTextRun(22, `Финансовые цели: ${!check ? 'не' : ''} выполнены`)],
                spacing: {
                    before: 300,
                },
            }),
            new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [genTextRun(24, 'Детально')],
                spacing: {
                    before: 300,
                },
            }),
            new Table(
                getTableTasks(
                    purposeList.map(el => ({
                        task: el.title,
                        state: el.completed || false,
                    })),
                ),
            ),
        );
    }
    const doc = new Document({
        sections: [
            {
                properties: {},
                children: mainChildren,
            },
        ],
    });

    Packer.toBlob(doc).then(res => {
        const url = URL.createObjectURL(res);
        let achor = document.createElement('a');
        achor.href = url;
        achor.download = 'Отчёт';
        document.body.append(achor);
        achor.setAttribute('style', 'display: none');
        achor.click();
        achor.remove();
        URL.revokeObjectURL(url);
    });
}
