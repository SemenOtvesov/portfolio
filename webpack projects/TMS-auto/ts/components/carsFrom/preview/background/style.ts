import styled from '@emotion/styled';
import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';
import posAbs from '@ts/style/allStyled/posAbs';
import { SxProps } from '@mui/material';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div(ContainerParams(size)),
        size,
    };
};
function ContainerParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        ...posAbs,
        top: 'auto',
        bottom: '35%',
        left: 'auto',
        right: 0,
        width: '55%',
        height: '50%',
        picture: {
            width: '100%',
            height: '100%',
        },
    };
    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle, height: '35%', width: '60%', bottom: '40%' };
    }
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle, height: '30%', width: '50%', right: '2%', bottom: '45%' };
    }
    if (size.isMobile) {
        allStyle = {
            ...allStyle,
            height: '16%',
            width: '90%',
            bottom: '64%',
            right: '50%',
            transform: 'translate(50%)',
        };
    }
    return allStyle;
}
