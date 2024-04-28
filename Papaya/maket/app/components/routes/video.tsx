'use client';
import React, { useEffect } from 'react';
import style from '@app/components/mainComponents/video/style';
import Left from '@app/components/mainComponents/video/left/index';
import Right from '@app/components/mainComponents/video/right/index';
import useAppDispatch from '@app/hooks/useAppDispatch';
import { getVideoThunk } from '@app/state/activeVideoState/asyncThunk/getVideoThunk';
import { useParams } from 'react-router-dom';
import MainContainer from '@components/helperComponents/containerMain/container';

export default () => {
    const { Container } = style();
    const dispatch = useAppDispatch();
    const params = useParams();
    useEffect(() => {
        const videoId = params.videoId;
        if (videoId) {
            dispatch(getVideoThunk(videoId));
        }
    }, []);
    return (
        <MainContainer>
            <Container>
                <Left />
                <Right />
            </Container>
        </MainContainer>
    );
};
