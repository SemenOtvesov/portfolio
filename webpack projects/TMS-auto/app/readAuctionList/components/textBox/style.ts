import { $hoverWhite } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({}),
        Text: styled.div({ color: $hoverWhite, fontSize: '1.25em' }),
        size,
    };
};
