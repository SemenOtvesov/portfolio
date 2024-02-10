'use client';
import itemStyle, { itemContainer } from '@app/page/style';
import { useParams } from 'next/navigation';
import React from 'react';
import style from './style';
import Settings from './settings/index';
import List from './list/index';
import { TurlParams } from '@locTypes/urlPath';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import Breadcrums from '@ts/components/helpers/breadcrums';

export default ({ type }: { type: 'korea' | 'japan' }) => {
    const { brand, model }: TurlParams = useParams();
    const { Container } = itemStyle();
    const ItemContainer = itemContainer();
    const { Title, Text } = style();

    return (
        <Provider store={store}>
            <Container>
                <ItemContainer>
                    <Breadcrums />
                    <Title>
                        Продажа {`${brand} ${model}`.toUpperCase()} с аукционов{' '}
                        {type === 'japan' ? 'Японии' : 'Кореи'}
                    </Title>
                    <Text>
                        Чтобы фильтр работал корректно - выберите год производства автомобиля
                    </Text>
                    <Settings />
                    <List />
                </ItemContainer>
            </Container>
        </Provider>
    );
};
