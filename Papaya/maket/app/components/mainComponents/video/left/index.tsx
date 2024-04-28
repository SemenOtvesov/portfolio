'use client';
import Player from './player';
import style from './style';
import React from 'react';
import VideoInfo from './videoInfo';
import Comments from './comments';

export default () => {
    const { Container } = style();
    return (
        <Container>
            <Player />
            <VideoInfo />
            <Comments />
        </Container>
    );
};
