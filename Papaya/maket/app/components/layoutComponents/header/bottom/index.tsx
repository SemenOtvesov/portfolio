'use client';
import React from 'react';
import style from './style';

const itemList = [
    'All',
    'Gaming',
    'Thoughts',
    'Music',
    'Thrillers',
    'Mixes',
    'Avatar',
    'Film criticisma',
    'Korean dramas',
    'Characters',
    'Eating',
];

export default () => {
    const { Container, Item } = style();
    return (
        <Container>
            {itemList.map(el => (
                <Item key={el}>{el}</Item>
            ))}
        </Container>
    );
};
