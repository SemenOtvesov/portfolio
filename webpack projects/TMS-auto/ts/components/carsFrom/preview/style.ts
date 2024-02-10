import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Title: styled.div({
            fontSize: size.isMobile ? '2.66em' : '4.15em',
            marginBottom: size.isDesktop ? '0.625rem' : '0.2rem',
        }),
        Text: styled.div({
            maxWidth: size.isMobile ? '100%' : '43%',
            marginBottom: size.isDesktop ? '1.5em' : '1em',
        }),
        size,
    };
};
