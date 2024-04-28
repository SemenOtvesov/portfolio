'use client';
import style from './style';
import React from 'react';

export default () => {
    const { Container, Preview, TextBox, Title, Text } = style();
    return (
        <Container>
            <Preview></Preview>
            <TextBox>
                <Title></Title>
                <Text></Text>
            </TextBox>
        </Container>
    );
};
