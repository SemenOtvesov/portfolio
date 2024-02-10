'use client';
import { Tcountry } from '@locTypes/state/carState';
import style from './style';
import styleMain from '@app/readAuctionList/style';
import { useSearchParams } from 'next/navigation';

type Tprops = {
    type: 'preview' | 'info';
};
const configurate = (country: Tcountry) => ({
    preview: {
        title: 'Как читать аукционный лист',
        text: 'Читать аукционные листы сможет любой, кто ознакомится с информацией, представленной на данной странице сайта. Аукционный лист японского авто является источником очень важной информации, которая поможет в выборе правильного автомобиля. Лист помогает отобрать лоты по требуемым параметрам без их физического осмотра, поскольку осмотр машины перед аукционом проводит эксперт. Единственная проблема - понимание того, что на самом деле написано в листе. Мы расскажем вам, как выглядит аукционный лист японского авто, как его прочитать и расшифровать.',
    },
    info: {
        title: `Что такое аукционный лист на авто из ${country === 'japan' ? 'Японии' : 'Кореи'}?`,
        text: 'Аукционный лист на авто представляет собой документ, который аукционная площадка присваивает каждому автомобилю на японском автомобильном аукционе, чтобы потенциальным покупателям было удобнее и проще понимать, что они покупают. Лист содержит множество полезных данных, таких как марка, модель и комплектация машины, ее год выпуска, пробег, техническое состояние и т. д. Особо ценные ньюансы описывают в примечаниях.',
    },
});

export default ({ type }: Tprops) => {
    const country = (useSearchParams()?.get('country') as Tcountry) || 'japan';
    const configurateInst = country && configurate(country);
    const { Container, Text } = style();
    const { TitleItems } = styleMain();
    if (!configurateInst) return;

    return (
        <Container>
            <TitleItems>{configurateInst[type].title}</TitleItems>
            <Text>{configurateInst[type].text}</Text>
        </Container>
    );
};
