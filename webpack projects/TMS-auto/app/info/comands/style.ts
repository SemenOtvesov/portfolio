import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({}),
        Title: styled.div({ marginBottom: 15, fontSize: '2em', fontWeight: 700 }),
        Text: styled.div({ marginBottom: size.isMobile ? 30 : 50, color: '#AEAEAE' }),
        CardList: styled.div({
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1em',
        }),
        size,
    };
};
