import { $hoverWhite } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        ContainerMain: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: size.isMobile ? 20 : size.isTab ? 30 : 50,
            fontSize: size.isMobile ? 10 : '16px',
        }),
        TitleItems: styled.div({
            marginBottom: size.isMobile ? 10 : size.isTab ? 20 : 35,
            fontSize: size.isMobile ? '1.5em' : '2em',
            fontWeight: 700,
        }),

        Item: (border: boolean) =>
            styled.div({
                display: 'flex',
                fontSize: '1.25em',
                gap: 23,
                padding: '15px 5px 15px 0',
                borderBottom: border ? `1px solid #777777` : '',
            }),
        ItemTitle: styled.div({
            width: '2em',
            minWidth: '2em',
            fontWeight: 700,
        }),
        ItemTitleLong: styled.div({
            width: '7.5em',
            minWidth: '7.5em',
            fontWeight: 700,
        }),
        ItemText: styled.div({
            color: $hoverWhite,
        }),
        Text: styled.div({
            fontSize: '1.25em',
            color: $hoverWhite,
            margin: '-5px 0 15px',
        }),
        MiddleText: styled.div({
            fontSize: '1.5em',
            fontWeight: 700,
            marginBottom: 20,
        }),
        size,
    };
};
