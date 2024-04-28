import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            width: '100%',
            aspectRatio: '2/1.1',
            iframe: {
                width: '100%',
                height: '100%',
            },
        }),
        size,
    };
};
