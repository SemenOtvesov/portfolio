import { Paragraph, VerticalAlign, AlignmentType, BorderStyle, ITableCellOptions } from 'docx';
import genTextRun from './genTextRun';

const noneBorders = {
    top: {
        style: BorderStyle.NONE,
        size: 0,
        color: 'FFFFFF',
    },
    bottom: {
        style: BorderStyle.NONE,
        size: 0,
        color: 'FFFFFF',
    },
    left: {
        style: BorderStyle.NONE,
        size: 0,
        color: 'FFFFFF',
    },
    right: {
        style: BorderStyle.NONE,
        size: 0,
        color: 'FFFFFF',
    },
};

export default function genTableTopCell(cont: string): ITableCellOptions {
    return {
        borders: noneBorders,
        verticalAlign: VerticalAlign.CENTER,
        width: { size: '50%' },
        children: [
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [genTextRun(22, cont)],
            }),
        ],
    };
}
