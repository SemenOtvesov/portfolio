import { TextRun } from 'docx';

export default function genTextRun(size: number, cont: string) {
    return new TextRun({ size, children: [cont] });
}
