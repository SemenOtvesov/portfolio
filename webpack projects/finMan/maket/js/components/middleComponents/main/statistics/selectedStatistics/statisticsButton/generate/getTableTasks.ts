import { Paragraph, TableCell, TableRow, WidthType, AlignmentType, ITableOptions } from 'docx';
import genTextRun from './genTextRun';

export default (list: Array<{ task: string; state: boolean }>): ITableOptions => {
    const rows = (list: Array<{ task: string; state: boolean }>) => {
        const rowsList: TableRow[] = [];
        list.forEach(el =>
            rowsList.push(
                new TableRow({
                    children: [
                        new TableCell({
                            width: { size: '50%' },
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [genTextRun(22, el.task)],
                                }),
                            ],
                        }),
                        new TableCell({
                            width: { size: '50%' },
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        genTextRun(22, el.state ? 'Выполнено' : 'Не выполнено'),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ),
        );
        return rowsList;
    };

    return {
        width: { size: '100%', type: WidthType.DXA },
        rows: rows(list),
    };
};
