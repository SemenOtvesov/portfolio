import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({}),
        Preview: styled.div({}),
        TextBox: styled.div({}),
        Title: styled.div({}),
        Text: styled.div({}),
        size,
    };
};
