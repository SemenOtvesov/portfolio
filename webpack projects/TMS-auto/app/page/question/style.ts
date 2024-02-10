import { $liteBackground } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Text: styled.div({}),
        Background: styled.div({ backgroundColor: $liteBackground }),
        size,
    };
};
