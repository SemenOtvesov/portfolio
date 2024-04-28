import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return { Container: styled.div({}), Title: styled.div({}), List: styled.div({}), size };
};
