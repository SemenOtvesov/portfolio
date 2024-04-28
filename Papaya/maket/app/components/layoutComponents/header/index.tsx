'use client';
import React from 'react';
import Top from './top/index';
import Bottom from './bottom/index';
import style from './style';

export default () => {
    const { Container } = style();
    return (
        <Container>
            <Top />
            <Bottom />
        </Container>
    );
};
