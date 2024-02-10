import { $gray, $liteBackground } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            padding: size.isDesktop ? '30px 20px' : '20px',
            backgroundColor: $liteBackground,
            border: `1px solid ${$gray}`,
            borderRadius: 3,
            flex: '0 0 32%',

            display: 'flex',
            flexDirection: 'column',
            gap: size.isDesktop ? 25 : 15,
        }),
        Title: styled.div({
            fontSize: '1.125em',
            fontWeight: 700,
        }),
        Text: styled.div({}),
        size,
    };
};
