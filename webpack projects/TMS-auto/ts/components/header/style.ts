import { $background, $borders } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';
import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();

    return {
        ImageBox: styled.div(ImageBoxParams(size)),
        AppBarSx: AppBarSxParams(size),
        imageStyle: { width: '100%', height: '100%' },
        itemBoxSx: itemBoxSxParams(size),

        AppBarWrapitem: styled.div({
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
        }),
        size,
    };
};

function itemBoxSxParams(param: TwindowSize): SxProps {
    let allStyle: SxProps = { display: 'flex' };
    if (param.isDesktop) {
        allStyle = {
            ...allStyle,
            flex: '0 0 63%',
        };
    }
    if (param.isLaptop) {
        allStyle = {
            ...allStyle,
            flex: '0 0 80%',
        };
    }
    if (param.isTab) {
        allStyle = { ...allStyle, flex: '1 1', margin: '0 0 0 20px' };
    }
    return allStyle;
}
function AppBarSxParams(param: TwindowSize): SxProps {
    let allStyle: SxProps = {
        height: 108,
        alignItems: 'center',
        padding: '26px 10vw',
        background: $background,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: `1px solid ${$borders}`,
    };
    if (param.isTab) {
        allStyle = { ...allStyle, padding: '26px 15px' };
    }
    if (param.isMobile) {
        allStyle = {
            ...allStyle,
            flexDirection: 'column',
            padding: '10px 15px',
            gap: '25px',
            maxWidth: '100vw',
            height: 'fit-content',
            right: 'auto',
            left: 0,
        };
    }
    return allStyle;
}
function ImageBoxParams(param: TwindowSize): any {
    let allStyle: SxProps = {
        height: '100%',
        width: 'auto',
        aspectRatio: '2.42 / 1',
    };
    if (param.isMobile) {
        allStyle = {
            ...allStyle,
            height: 32,
        };
    }
    return allStyle;
}
