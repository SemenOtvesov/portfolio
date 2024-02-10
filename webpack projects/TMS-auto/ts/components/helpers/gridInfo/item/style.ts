import { $background, $gray } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';
import { CSSProperties } from 'react';
import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';

export default (step: number) => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div(ContainerParams(size, step)),
        TitleBox: styled.div({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            height: 'calc(15px + 2em + 10px)',
        }),
        TitleMain: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
        }),
        Step: styled.div({
            padding: 7,
            backgroundColor: '#fff',
            borderRadius: '3px',
            color: $background,
            width: 'fit-content',
            fontWeight: 700,
        }),
        Title: styled.div({
            fontWeight: 700,
            fontSize: '1.13em',
        }),
        Text: styled.div({}),
        imageStyle: imageStyleParams(step),
        size,
    };
};
function imageStyleParams(step: number): any {
    let allStyle: CSSProperties = {};
    if (step === 1) {
        allStyle = { height: '56%', aspectRatio: '1 / 1' };
    }
    if (step === 2) {
        allStyle = { height: '100%', aspectRatio: '1.5 / 1 ' };
    }
    if (step === 3) {
        allStyle = { height: '70%', aspectRatio: '1 / 1.2' };
    }
    if (step === 4) {
        allStyle = { height: '100%', aspectRatio: '1.5 / 1' };
    }
    if (step === 5) {
        allStyle = { height: '100%', aspectRatio: '1 / 1.35' };
    }

    return allStyle;
}
function ContainerParams(size: TwindowSize, step: number): any {
    let allStyle: SxProps = {
        border: `1px solid ${$gray}`,
        padding: '15px 18px',
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
    };

    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle, fontSize: 12 };
    }
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle };
    }

    if (step === 1) {
        allStyle = { ...allStyle, gridRow: 1, gridColumn: 1 };
    }
    if (step === 2) {
        allStyle = { ...allStyle, gridRow: 1, gridColumn: '2/4' };
    }
    if (step === 3) {
        allStyle = { ...allStyle, gridRow: 1, gridColumn: 4 };
    }
    if (step === 4) {
        allStyle = { ...allStyle, gridRow: 2, gridColumn: '1/3' };
    }
    if (step === 5) {
        allStyle = { ...allStyle, gridRow: 2, gridColumn: '3/5' };
    }
    return allStyle;
}
