'use client';
import useAppSelector from '@app/hooks/useAppSelector';
import style from './style';
import React from 'react';

export default () => {
    const { Container, Item, Icon } = style();
    const video = useAppSelector(state => state.activeVideoState.video);
    return (
        <Container>
            <Item>
                <Icon className="icon-like"></Icon>
                {video?.likeCount}
            </Item>
            <Item>
                <Icon className="icon-like"></Icon>
            </Item>
        </Container>
    );
};
