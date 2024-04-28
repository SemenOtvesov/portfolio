import React from 'react';
import Container from '@app/components/helperComponents/containerMain/container';
import Video from '@app/components/helperComponents/video';
import useAppSelector from '@app/hooks/useAppSelector';

export default () => {
    const videoList = useAppSelector(state => state.recomendationVideoState.videoList);
    return (
        <Container>
            {videoList[0] ? videoList.map(el => <Video video={el} key={el.id} />) : <></>}
        </Container>
    );
};
