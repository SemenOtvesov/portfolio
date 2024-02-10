'use client';
import style from './style';

type Tprops = {
    card: { title: string; text: string };
};

export default ({ card }: Tprops) => {
    const { Container, Title, Text } = style();
    return (
        <Container>
            <Title>{card.title}</Title>
            <Text>{card.text}</Text>
        </Container>
    );
};
