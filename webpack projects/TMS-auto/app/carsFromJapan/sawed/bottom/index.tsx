'use client';
import { itemContainer } from '@app/page/style';
import style from './style';
import componentsStyle from '@components/carsFrom/style';
import Image from '@ts/components/helpers/image/image';

export default () => {
    const { ExampleBox, Example, ExampleText, ImageBox } = style();
    const { Text, Title } = componentsStyle();
    const StandartTitle = Title('standart');
    const ItemContainer = itemContainer();
    return (
        <ItemContainer>
            <StandartTitle>Как пилят авто?</StandartTitle>
            <Text>
                Кузов пилится как по передней, так и по задней части авто: постойкам и порогам. У
                рамных автомобилей — рама остаётся нетронутой, пилится только кузов. В местах
                распила кузовстягивают металлическими пластинами на саморезах. Во времяперевозки это
                защитит машину от пыли, грязи и дождевой воды
            </Text>
            <ExampleBox>
                <Example>
                    <ImageBox>
                        <Image sourseMod={false} imageName="frontPartSawed" imageType="image" />
                    </ImageBox>
                    <ExampleText>По передней части</ExampleText>
                </Example>
                <Example>
                    <ImageBox>
                        <Image sourseMod={false} imageName="backPartSawed" imageType="image" />
                    </ImageBox>
                    <ExampleText>По задней части</ExampleText>
                </Example>
            </ExampleBox>
        </ItemContainer>
    );
};
