'use client';
import Image from '@ts/components/helpers/image/image';
import { ItemContainerTitle, itemContainer } from '../style';
import CardList from './cardList';
import style from './style';

export default () => {
    const { Text, Background, size } = style();
    const ItemContainer = itemContainer();
    return (
        <ItemContainer>
            <ItemContainerTitle style={{ marginBottom: size.isMobile ? 0 : 20 }}>
                О компании
            </ItemContainerTitle>
            <Text>
                Тут нужно придумать текст о компании, расписать его от лица Максима, чтобы выглядело
                красиво, ненавязчиво и продающее, просто легкий незамысловатый текст о том почему
                Максим стал этим заниматься, какой сервис хочет сделать и предоставить каждому
                клиенту, ну и самое главное можно упомянуть различные цифры по стоимости вашей
                комиссии и в принципе вашего подхода к работе.
            </Text>
            <Text style={{ maxWidth: '50%' }}>
                С уважением, руководитель компании Максим Деревянко
            </Text>
            <Background>
                <Image
                    imageName={size.isMobile ? 'infoBackMobile' : 'infoBack'}
                    imageType="image"
                    sourseMod={false}
                />
            </Background>
            <CardList />
        </ItemContainer>
    );
};
