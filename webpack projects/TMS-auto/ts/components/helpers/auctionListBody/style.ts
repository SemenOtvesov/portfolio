import { $background } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        CardContainer: styled.div({
            display: 'flex',
            gap: 17,
        }),
        Card: styled.div({
            backgroundColor: '#fff',
            borderRadius: 15,
            padding: size.isMobile ? 15 : 27,
            flex: '1 1',
            color: $background,
        }),
        CardItem: styled.div({
            display: 'flex',
            gap: 25,
            padding: '7px 0',
            fontSize: size.isMobile ? '1em' : '1.25em',
            borderBottom: `2px solid #D7D7D7`,
        }),
        CardItemTitle: styled.div({
            fontWeight: 700,
            width: '2em',
            minWidth: '2em',
        }),
        CardItemText: styled.div({}),
        size,
    };
};
