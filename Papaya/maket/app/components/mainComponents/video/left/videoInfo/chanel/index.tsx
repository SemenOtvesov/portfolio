'use client';
import ChanelPreview from '@app/components/helperComponents/chanelPreview';
import style from './style';
import React from 'react';
import useAppSelector from '@app/hooks/useAppSelector';

export default () => {
    const { Container, Info, InfoItem } = style();
    const video = useAppSelector(state => state.activeVideoState.video);
    const chanelSrc = video?.chanelPreview || '';
    return (
        <Container>
            <ChanelPreview src={chanelSrc} />
            <Info>
                <InfoItem>{video?.channelTitle}</InfoItem>
                <InfoItem>
                    {video?.chanelSubscriptions}
                    {numberText(video?.chanelSubscriptions)}
                </InfoItem>
            </Info>
        </Container>
    );
};
function numberText(num: string | undefined) {
    if (!num) return '';
    let text = '';
    if ([1].includes(+num % 10)) {
        text = ' подписчик';
    }
    if ([2, 3, 4].includes(+num % 10)) {
        text = ' подписчика';
    }
    if ([5, 6, 7, 8, 9, 0].includes(+num % 10)) {
        text = ' подписчиков';
    }

    return text;
}
