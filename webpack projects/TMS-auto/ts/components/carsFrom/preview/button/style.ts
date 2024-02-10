import { $red } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';
import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        ButtonSx: ButtonSxParams(size),
        ImageContainer: styled.div({
            width: '1.2em',
            height: '1.2em',
            img: {
                width: '100%',
                height: '100%',
            },
        }),
        size,
    };
};

function ButtonSxParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        transition: '0.3s',
        padding: '20px',
        backgroundColor: $red,
        borderColor: $red,
        gap: '50px',
        alignItems: 'center',
        width: 'fit-content',
        justifyContent: 'space-between',
        color: '#fff',
        fontSize: '1em',
        marginBottom: '50px',

        ':hover': {
            backgroundColor: $red,
            borderColor: $red,
            opacity: 0.8,
        },
    };
    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle, marginBottom: '0px', padding: '10px' };
    }
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle, marginTop: '40%', width: '100%' };
    }
    return allStyle;
}
