import { $hover } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            flex: !size.isMobile ? '0 0 calc(20% - 70px)' : '0 0 calc(50% - 30px)',
        }),
        Title: styled.div({
            marginBottom: 16,
            fontWeight: 700,
            fontSize: '1.125em',
        }),
        List: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
        }),
        Item: styled.div({
            a: { color: '#fff', transition: '0.3s' },

            textTransform: 'uppercase',
            cursor: 'pointer',

            ':hover a': {
                color: $hover,
            },
        }),
        size,
    };
};
