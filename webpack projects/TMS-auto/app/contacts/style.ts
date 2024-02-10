import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        ContainerMain: styled.div({
            display: 'flex',
            flexDirection: size.isMobile || size.isTab ? 'column' : 'row',
            gap: size.isMobile || size.isTab ? 20 : 0,
            fontSize: size.isDesktop ? 16 : 12,
        }),
        Left: styled.div({
            flex: '1 1',
            display: 'flex',
            flexDirection: 'column',
            gap: size.isMobile ? 20 : 35,
        }),
        Title: styled.div({
            fontSize: size.isMobile || size.isTab ? '4em' : '5.18em',
            fontWeight: 700,
        }),
        Right: styled.div({
            flex: '1 1',
            iframe: {
                width: '100%',
                aspectRatio: '1',
                borderRadius: 3,
            },
        }),
        size,
    };
};
