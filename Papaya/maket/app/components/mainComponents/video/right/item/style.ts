import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({}),
        Preview: styled.div({}),
        Right: styled.div({}),
        Title: styled.div({}),
        ChanelInfo: styled.div({}),
        ChanelName: styled.div({}),
        VideoInfo: styled.div({}),
        size,
    };
};
