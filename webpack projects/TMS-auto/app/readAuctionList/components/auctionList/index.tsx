'use client';
import AuctionListBody from '@ts/components/helpers/auctionListBody';
import style from './style';
import styleMain from '@app/readAuctionList/style';

export default () => {
    const { Container } = style();
    const { TitleItems, Text, MiddleText } = styleMain();

    return (
        <Container>
            <TitleItems>Расшифровка оценки автомобиля в аукционном листе</TitleItems>
            <Text>
                Расшифровать аукционный лист японского авто - это на самом деле не так сложно, как
                кажется. Вот перечень обозначений, которые необходимо понимать, чтобы правильно
                прочитать аукционный лист
            </Text>
            <MiddleText>Дефекты кузова:</MiddleText>
            <AuctionListBody />
        </Container>
    );
};
