'use client';
import style from './style';
import React from 'react';

export default () => {
    const { Container, Preview, Right, Title, ChanelInfo, ChanelName, VideoInfo } = style();
    return (
        <Container>
            <Preview></Preview>
            <Right>
                <Title></Title>
                <ChanelInfo>
                    <ChanelName></ChanelName>
                    <VideoInfo></VideoInfo>
                </ChanelInfo>
            </Right>
        </Container>
    );
};
