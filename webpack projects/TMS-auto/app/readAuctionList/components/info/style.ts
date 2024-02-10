import { $hoverWhite } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: size.isMobile ? 15 : 25,
        }),
        Text: styled.div({
            fontSize: '1.25em',
            color: $hoverWhite,
        }),
        size,
    };
};
