'use client';
import Image from 'next/image';
import style from './style';
import Card from './card/index';
import backgroundImage from 'img/backgroundCar.png';
import { itemContainer } from '../style';
import useAppDispatch from 'ts/hooks/useAppDispatch';
import { useEffect } from 'react';
import getBrandListThunk from '@store/carState/asyncThunk/getBrandListThunk';
import getRecentlyPurchasedThunk from '@store/carState/asyncThunk/getRecentlyPurchasedThunk';

export default () => {
    const { Background, Main, Title, Container } = style();
    const ItemContainer = itemContainer();

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getBrandListThunk());
        dispatch(getRecentlyPurchasedThunk());
    }, []);

    return (
        <>
            <Container>
                <Background>
                    <Image src={backgroundImage} alt="" priority />
                </Background>
                <ItemContainer>
                    <Main>
                        <Title>
                            Автомобили с аукционов Японии, Южной Кореи и Китая под любой бюджет{' '}
                            <span>за 4 недели</span>
                        </Title>
                        <Card />
                    </Main>
                </ItemContainer>
            </Container>
        </>
    );
};
