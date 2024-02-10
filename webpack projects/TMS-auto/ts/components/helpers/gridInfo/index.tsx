'use client';
import Item from './item/index';
import style from './style';

export type Tsteps = {
    step: number;
    title: string;
    text: string;
}[];

export default ({ steps, notIcon }: { steps: Tsteps; notIcon?: boolean }) => {
    const { Container } = style();
    return (
        <Container>
            {steps.map(el => (
                <Item key={el.step + el.title} step={el} notIcon={notIcon} />
            ))}
        </Container>
    );
};
