import styled from '@emotion/styled';
import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';
import posAbs from '@ts/style/allStyled/posAbs';
import { SxProps } from '@mui/material';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Text: styled.div({
            fontSize: size.isDesktop ? '1.25em' : '0.9em',
            maxWidth: size.isMobile ? '100%' : '55%',
            marginBottom: 20,
        }),
        Background: styled.div(BackgroundParams(size)),
        size,
    };
};
function BackgroundParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        ...posAbs,
        width: '50%',
        height: '85%',
        left: '50%',
        picture: {
            width: '100%',
            height: '100%',
        },
    };
    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle, height: '60%', top: '10%' };
    }
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle };
    }
    if (size.isMobile) {
        allStyle = {
            ...allStyle,
            width: '100%',
            height: '40em',
            left: 0,
            top: '25%',
        };
    }
    return allStyle;
}
