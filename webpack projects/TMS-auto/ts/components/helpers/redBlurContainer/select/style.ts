import { $hover } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        InputBox: styled.div({
            flex: '0 0 22%',

            display: 'flex',
            flexDirection: 'column',
            gap: 5,
        }),
        InputPreview: styled.div({ color: $hover }),
        size,
    };
};
