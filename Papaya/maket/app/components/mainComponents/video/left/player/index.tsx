'use client';
import useAppSelector from '@app/hooks/useAppSelector';
import style from './style';
import React, { useEffect } from 'react';
import { createPlayer } from './player';

export default () => {
    const video = useAppSelector(state => state.activeVideoState.video);
    const { Container } = style();

    useEffect(() => {
        const playerElement = document.getElementById('player');
        if (video && playerElement) {
            createPlayer(video.id);
        }
    });
    return (
        <Container>
            <div id="player"></div>
        </Container>
    );
};
