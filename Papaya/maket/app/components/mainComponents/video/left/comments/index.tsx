'use client';
import Item from './item';
import style from './style';
import React from 'react';

export default () => {
    const { Container, Title, List } = style();
    return (
        <Container>
            <Title></Title>
            <List>
                <Item />
                <Item />
                <Item />
                <Item />
            </List>
        </Container>
    );
};
