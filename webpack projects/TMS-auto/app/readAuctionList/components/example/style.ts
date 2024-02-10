import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({}),
        ImageBox: styled.div({
            width: '100%',
            aspectRatio: '0.88/1',
            picture: {
                width: '100%',
                height: '100%',
                display: 'block',
            },
        }),
        size,
    };
};
