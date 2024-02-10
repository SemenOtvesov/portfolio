import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Title: styled.div({
            fontSize: '2em',
            fontWeight: 800,
        }),
        size,
    };
};
