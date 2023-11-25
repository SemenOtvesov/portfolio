import {
    Paragraph,
    TableCell,
    TableRow,
    WidthType,
    VerticalAlign,
    AlignmentType,
    ITableOptions,
} from 'docx';
import genTextRun from './genTextRun';

type TgenTableInfoProps = {
    title: string;
    list: Array<string>;
};
export default function genTableInfo({ title, list }: TgenTableInfoProps): ITableOptions {
    const rows = (list: Array<string>) => {
        const rowsList = [
            new TableRow({
                children: [
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        width: { size: '50%' },
                        rowSpan: list.length || 1,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [genTextRun(22, title)],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [genTextRun(22, list[0])],
                            }),
                        ],
                    }),
                ],
            }),
        ];

        const newList = [...list];
        newList.shift();
        newList.forEach(el =>
            rowsList.push(
                new TableRow({
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [genTextRun(22, el)],
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
}
