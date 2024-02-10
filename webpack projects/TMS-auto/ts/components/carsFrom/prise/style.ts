import { $liteBackground } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Title: styled.div({
            fontSize: '2em',
            fontWeight: 700,
        }),
        Background: styled.div({
            backgroundColor: $liteBackground,
        }),
        size,
    };
};
