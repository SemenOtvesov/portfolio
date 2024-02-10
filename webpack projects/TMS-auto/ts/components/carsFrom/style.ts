import { $hover } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Title: (type: 'mini' | 'standart') =>
            styled.div({
                fontSize: type === 'mini' ? '1.25em' : '2em',
                color: '#fff',
                fontWeight: 700,
                marginBottom: type === 'mini' ? '-18px' : 0,
            }),
        Text: styled.div({
            color: $hover,
        }),
        size,
    };
};
