import { $background, $borders, $gray, $hover, $red } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import { Button, SxProps } from '@mui/material';
import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        RedButton: styled(Button)({
            ...ButtonParams(size),
            backgroundColor: $red,
            ':hover': {
                backgroundColor: $red,
                color: '#fff',
            },
        }),
        BlackButton: styled(Button)({
            ...ButtonParams(size),
            backgroundColor: $background,
            border: `2px solid ${$borders}`,
            color: $gray,
            ':hover': {
                backgroundColor: $background,
                color: '#fff',
            },
        }),
        size,
    };
};

function ButtonParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        padding: 16,
        borderRadius: 2,
        color: '#fff',
        fontWeight: 600,
        height: 'fit-content',
        textAlign: 'center',
        lineHeight: 1.25,
        transition: '0.3s',
        ':hover': {
            color: '#fff',
        },
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
