import { $hoverWhite } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Item: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
        }),
        Title: styled.div({
            marginBottom: size.isMobile ? 10 : size.isTab ? 20 : 35,
            fontSize: size.isMobile ? '1.5em' : '2em',
            fontWeight: 700,
        }),
        TitleMiddle: styled.div({
            fontWeight: 700,
            fontSize: '1.25em',
        }),
        Text: styled.div({
            color: $hoverWhite,
        }),
        size,
    };
};
