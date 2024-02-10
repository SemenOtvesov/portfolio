import { $gray } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';
import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            color: '#fff',
            fontSize: size.isMobile ? 14 : 16,
        }),
        Title: styled.div({
            fontSize: '2em',
            fontWeight: 700,
            marginBottom: size.isMobile ? 20 : 15,
        }),
        TextBox: styled.div({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '45px',
        }),
        Text: styled.div(TextParams(size)),
        SliderButton: styled.div({
            border: `1px solid ${$gray}`,
            borderRadius: 3,

            display: 'flex',
            alignItems: 'center',
        }),
        SliderArrow: styled.div({
            height: '100%',
            transition: '0.3s',
            display: 'flex',
            justifyItems: 'center',
            alignItems: 'center',
            padding: '15px 20px',
            ':hover': {
                backgroundColor: $gray,
            },
        }),
        size,
    };
};
function TextParams(size: TwindowSize): any {
    let allStyle: SxProps = { maxWidth: '70%' };
    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle };
    }
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle, maxWidth: '100%' };
    }
    return allStyle;
}
