import { $background, $red } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';
import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div(ContainerParams(size)),
        Text: styled.div({
            span: { textDecoration: 'underline' },
            width: 'calc(2em * 10)',
            color: $background,
        }),
        Input: styled.input({
            backgroundColor: '#585B60',
            fontSize: '14px',
            borderRadius: '10px',
            color: '#fff',
            padding: '15px 10px',
            width: '100%',
            '::placeholder': { color: '#fff' },
        }),
        InputContainer: styled.div(InputContainerParams(size)),
        ButtonSx: ButtonParams(size),
    };
};

function ContainerParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        padding: '30px',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: 'fit-content',
        borderRadius: '15px',
    };
    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle, padding: '20px', gap: '10px' };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle, width: '100%', padding: '10px', fontSize: '12px' };
    }
    return allStyle;
}

function ButtonParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        fontSize: '1.25em',
        padding: '20px 30px',
        borderRadius: '10px',
        backgroundColor: $red,
        color: '#fff',
        transition: '0.3s',
        lineHeight: '1em',
        ':hover': { backgroundColor: $red },
    };
    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle, padding: '15px 20px' };
    }
    return allStyle;
}

function InputContainerParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        display: 'flex',
        flexDirection: 'column',
        gap: '11px',
        color: $background,
    };
    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle, gap: '5px' };
    }
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle };
    }
    return allStyle;
}
