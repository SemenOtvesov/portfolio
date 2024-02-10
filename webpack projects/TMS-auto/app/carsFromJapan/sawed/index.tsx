'use client';
import style from './style';
import componentsStyle from '@components/carsFrom/style';
import { itemContainer } from '@app/page/style';
import Image from '@ts/components/helpers/image/image';
import Info from './info/index';
import Bottom from './bottom/index';

export default () => {
    const { Container, ImageWrapper, Item } = style();
    const { Text, Title } = componentsStyle();
    const StandartTitle = Title('standart');
    const ItemContainer = itemContainer();
    return (
        <>
            <ItemContainer>
                <Container>
                    <Item>
                        <StandartTitle>Распил</StandartTitle>
                        <Text>
                            Распил заказывают, если нужны автозапчасти. И растамаживается этот
                            автомобиль как набор запчастей, поэтому не приходится платить полную
                            пошлину. Кузов такой машины распиливают на части, которые в грузовой
                            таможенной декларации (ГТД) оформляются как металлолом или набор
                            автозапчастей.
                            <br />
                            <br /> После того как распиленный автомобиль пересекает границу РФ, он
                            проходит таможенную очистку как запасные части.
                            <br />
                            <br /> Поэтому ПТС на распил не выдается и поставить на учет его
                            невозможно. После таможенного оформления выдаются заверенные копии
                            декларации на товары.
                            <br />
                            <br />
                            Запчасти с распила — это единственный или самый оптимальный вариант для
                            восстановления своего автомобиля после серьёзного ДТП
                            <br />
                            <br /> С помощью распила вы можете обновить свой поддержанный
                            автомобиль. Возьмёте всё, что нужно от другой машины, — и ваша, как
                            новая
                        </Text>
                    </Item>
                    <Item style={{ flex: '0 0 40%' }}>
                        <ImageWrapper>
                            <Image imageType="image" imageName="sawed" sourseMod={false} />
                        </ImageWrapper>
                    </Item>
                </Container>
            </ItemContainer>
            <Info />
            <Bottom />
        </>
    );
};
