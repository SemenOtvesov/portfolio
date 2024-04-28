'use client';
import genViews from '@app/helpers/formatFunc/genViews';
import style from './style';
import React, { useRef } from 'react';
import genAgoTime from '@app/helpers/formatFunc/genAgoTime';
import useAppSelector from '@app/hooks/useAppSelector';

export default () => {
    const { Container, Title, Text, OpenFullText } = style();
    const video = useAppSelector(state => state.activeVideoState.video);
    const TextRef = useRef<HTMLDivElement>(null);
    if (!video) return;
    return (
        <Container>
            <Title>
                {genViews(video.viewCount)} - {genAgoTime(video.publishedAt)}
            </Title>
            <Text ref={TextRef}>
                {video.description}
                <OpenFullText
                    onClick={e => {
                        TextRef.current?.classList.toggle('open');
                        const t: any = e.target;
                        if (TextRef.current?.className.includes('open')) {
                            t.innerHTML = 'Свернуть';
                        } else {
                            t.innerHTML = '...ещё';
                        }
                    }}
                >
                    ...ещё
                </OpenFullText>
            </Text>
        </Container>
    );
};
