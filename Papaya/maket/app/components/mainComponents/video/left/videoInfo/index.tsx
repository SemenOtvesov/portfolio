'use client';
import Chanel from './chanel';
import Settings from './settings';
import Estimation from './estimation';
import style from './style';
import React from 'react';
import Description from './description';
import useAppSelector from '@app/hooks/useAppSelector';

export default () => {
    const { Container, Main, Title, MiddleLine, MiddleLineItem } = style();
    const video = useAppSelector(state => state.activeVideoState.video);
    return (
        <Container>
            <Main>
                <Title>{video?.title}</Title>
                <MiddleLine>
                    <MiddleLineItem>
                        <Chanel />
                        <Settings />
                    </MiddleLineItem>
                    <Estimation />
                </MiddleLine>
            </Main>
            <Description />
        </Container>
    );
};
