import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Item: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
        }),
        ItemTitle: styled.div({
            fontSize: '1.5em',
            fontWeight: 700,
        }),
        ItemText: styled.div({
            color: '#AEAEAE',
        }),
        size,
    };
};
