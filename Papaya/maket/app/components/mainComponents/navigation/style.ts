import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck, { TwindowSize } from '@hooks/useWindowSizeCheck';
import { Button, SxProps } from '@mui/material';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Menu: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            backgroundColor: theme?.bgColorNav,
            color: theme?.textColorGray,
            button: {
                color: theme?.textColorGray,
            },
            width: '12.35vw',
            height: '100vh',
        })),
        Item: styled(Button)(ItemParams(size)),
        Text: styled.div({ fontWeight: 500, textTransform: 'initial' }),
        ItemBox: styled.div({}),
        ItemTitle: styled.div({
            ...ItemParams(size),
            fontWeight: 400,
            padding: '17px 15px',
            opacity: 0.8,
        }),
        UnderLineItem: styled.div({
            ...UnderLineParams(size),
            backgroundColor: '#fff',
            background:
                'linear-gradient(9deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5018382352941176) 50%, rgba(255,255,255,0) 100%);',
        }),
        size,
    };
};
function ItemParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        padding: '17px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        width: '100%',
        gap: '1.5em',
        position: 'relative',
    };
    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle };
    }
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle };
    }
    return allStyle;
}
export function UnderLineParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        height: 1,
        width: '100%',
        position: 'absolute',
        top: '100%',
        left: 0,
        opacity: 0.5,
    };
    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle };
    }
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle };
    }
    return allStyle;
}
