import { $background, $red } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import posAbs from '@ts/style/allStyled/posAbs';

import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';
import { SxProps } from '@mui/material';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div(ContainerParams(size)),
        Background: styled.div(BackgtoundParams(size)),
        Main: styled.div(MainParams(size)),
        Title: styled.div(TitleParams(size)),
    };
};
function ContainerParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        position: 'relative',
        height: 'calc(100vh - 108px)',
    };
    if (size.isMobile) {
        allStyle = { ...allStyle, height: 'fit-content' };
    }
    return allStyle;
}
function BackgtoundParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        pointerEvents: 'none',
        ...posAbs,
        img: {
            pointerEvents: 'none',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
    };
    if (size.isMobile) {
        allStyle = { ...allStyle, height: '50%' };
    }
    return allStyle;
}
function TitleParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        fontSize: '4em',
        color: '#fff',
        span: {
            color: $red,
        },
    };
    if (size.isLaptop) {
        allStyle = { ...allStyle, fontSize: '3em' };
    }
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle, fontSize: '32px' };
    }
    return allStyle;
}
function MainParams(size: TwindowSize): any {
    let allStyle: SxProps = { display: 'flex', flexDirection: 'column', gap: '40px' };
    if (size.isLaptop) {
        allStyle = { ...allStyle, gap: '30px' };
    }
    if (size.isTab) {
        allStyle = { ...allStyle };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle, height: '100vh', justifyContent: 'space-between' };
    }
    return allStyle;
}
