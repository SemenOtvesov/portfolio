'use client';
import { Car } from '@locTypes/state/carState';
import style from './style';
import Image from '@ts/components/helpers/image/image';
import React from 'react';
import ArrowButton from '../arrowButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Tprops extends React.HTMLAttributes<HTMLDivElement> {
    card: Car;
    black?: boolean;
}

export default ({ card, black, ...props }: Tprops) => {
    const { Container, Preview, Main, MainItem, Title, Text, Button, Plug, Prise } = style(black);
    const path = usePathname();
    return (
        <Container className="swiper-slide" {...props}>
            <Preview>
                <Image
                    imageName={card.images[0].split('.jpg')[0]}
                    imageType="image"
                    sourseMod={false}
                />
            </Preview>
            <Main>
                <MainItem>
                    <Title>{card.name}</Title>
                </MainItem>
                <MainItem>
                    {black ? (
                        <>
                            <Text>Год: {card.year}</Text>
                            <Text>Кузов: {card.body}</Text>
                            <Text>Двигатель: {card.engine} сс</Text>
                            <Text>Пробег: {card.mileage} км</Text>
                            <Text>Оценка: {card.evaluation}</Text>
                        </>
                    ) : (
                        <>
                            <Text>Год: {card.year}</Text>
                            <Text>Объем: {card.evaluation} л</Text>
                            <Text>Привод: {card.drive}</Text>
                            <Text>Коробка: {card.body}</Text>
                            <Text>Пробег: {card.mileage} км</Text>
                        </>
                    )}
                </MainItem>
            </Main>
            {black ? (
                <>
                    <Link
                        href={`${path}/${card.id}`}
                        style={{ width: 'calc(100% - 20px)', marginBottom: '1em' }}
                    >
                        <ArrowButton content="ПОДРОБНЕЕ" type="white" style={{ width: '100%' }} />
                    </Link>
                    <Plug />
                    <Prise>{card.price} ₽</Prise>
                </>
            ) : (
                <>
                    <Plug />
                    <Button>{card.price} ₽</Button>
                </>
            )}
        </Container>
    );
};
