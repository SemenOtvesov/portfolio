import { $hoverWhite } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Title: styled.div({
            fontSize: '2em',
            fontWeight: 800,
        }),
        Text: styled.div({
            fontWeight: 500,
            color: $hoverWhite,
        }),
        size,
    };
};
