import { $background, $hover } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import { CSSProperties } from 'react';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            fontSize: size.isDesktop ? '1em' : '0.8em',
        }),
        Title: styled.div({
            marginBottom: size.isDesktop ? 60 : size.isMobile ? 20 : 40,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: size.isMobile ? 'start' : 'center',
            flexDirection: size.isMobile ? 'column' : 'row',
            gap: size.isMobile ? 20 : 0,
        }),
        TitleText: styled.div({
            fontSize: '2em',
            fontWeight: 800,
        }),
        TitleLink: {
            textDecoration: 'underline',
            transition: '0.3s',
            color: '#fff',
            ':hover': {
                textDecoration: 'underline',
                color: $hover,
            },
        } as CSSProperties,
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
