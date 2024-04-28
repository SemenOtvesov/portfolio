'use client';
import React from 'react';
import style from './style';
import { Tvideo } from '@app/locTypes/state/recomendationVideoState';
import { NavLink, useLocation } from 'react-router-dom';
import ChanelPreview from '../chanelPreview';
import genDuration from '@app/helpers/formatFunc/genDuration';
import genViews from '@app/helpers/formatFunc/genViews';
import genAgoTime from '@app/helpers/formatFunc/genAgoTime';

export default ({ video }: { video: Tvideo }) => {
    const { Video, Preview, PreviewContent, PreviewTime, Main, Info, Title, ChanelName, SubInfo } =
        style();
    const chanelSrc = video.chanelPreview ? video.chanelPreview : 'img/testPreview.png';
    const location = useLocation();
    return (
        <Video>
            <NavLink to={`/video/${video.id}${location.search}`}>
                <Preview>
                    <PreviewContent>
                        <img src={video.preview} alt="" />
                    </PreviewContent>
                    <PreviewTime>{genDuration(video.duration)}</PreviewTime>
                </Preview>
                <Main>
                    <ChanelPreview src={chanelSrc} />
                    <Info>
                        <Title>{video.title}</Title>
                        <ChanelName>{video.channelTitle}</ChanelName>
                        <SubInfo>
                            {genViews(video.viewCount)} - {genAgoTime(video.publishedAt)}
                        </SubInfo>
                    </Info>
                </Main>
            </NavLink>
        </Video>
    );
};
