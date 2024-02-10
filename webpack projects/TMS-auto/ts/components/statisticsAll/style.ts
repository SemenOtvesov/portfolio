import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Title: styled.div({
            fontSize: '2em',
            fontWeight: 700,
        }),
        BrandListWrapper: styled.div({
            display: 'flex',
            flexWrap: 'wrap',
            gap: size.isMobile ? 30 : 70,
            marginBottom: 50,
        }),
        size,
    };
};
