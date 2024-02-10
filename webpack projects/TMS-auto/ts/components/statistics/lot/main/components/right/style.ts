import { $borders, $hoverWhite } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';
import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Right: styled.div(RightParams(size)),
        RightItemTop: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: 15,
        }),
        Title: styled.div({
            fontSize: '1.5em',
            fontWeight: 800,
        }),
        TitleSub: styled.div({
            color: $hoverWhite,
            fontSize: '0,875em',
        }),
        RightItemMiddle: styled.div({
            padding: '20px 0',
            display: 'flex',
            flexDirection: size.isMobile ? 'column' : 'row',
            flexWrap: 'wrap',
            gap: size.isMobile ? 15 : 30,
            borderTop: `1px solid ${$borders}`,
            borderBottom: `1px solid ${$borders}`,
            span: {
                flex: '0 0 calc(50% - 15px)',
            },
            figure: {
                width: size.isMobile || size.isTab ? '100%' : '73%',
            },
        }),
        ButtonBox: styled.div(ButtonBoxParams(size)),
        MiniText: styled.div({
            fontSize: '0.75em',
            color: $hoverWhite,
        }),
        RightItemBottom: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
        }),
        size,
    };
};
function RightParams(size: TwindowSize): any {
    let allStyle: SxProps = { flex: '0 0 56%', display: 'flex', flexDirection: 'column', gap: 20 };
    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle, flex: '0 0 58%' };
    }
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle };
    }
    return allStyle;
}
function ButtonBoxParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        button: { flex: '0 0 47%' },
    };
    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle, button: { flex: '0 0 49%', fontSize: '0.8em' } };
    }
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle, flexDirection: 'column', gap: 10, button: { width: '100%' } };
    }
    return allStyle;
}
