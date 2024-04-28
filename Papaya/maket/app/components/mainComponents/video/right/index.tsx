'use client';
import Item from './item';
import style from './style';
import React from 'react';

export default () => {
    const { Container } = style();
    return (
        <Container>
            <Item />
        </Container>
    );
};
