import { $background, $gray, $liteBackground } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Background: styled.div({
            backgroundColor: $liteBackground,
            marginTop: 28,
        }),
        Container: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            fontSize: size.isDesktop ? 16 : size.isMobile ? 12 : 14,
        }),
        Plug: styled.div({
            width: '100%',
            height: 1,
            backgroundColor: $background,
        }),
        size,
    };
};
