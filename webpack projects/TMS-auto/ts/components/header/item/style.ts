import { $borders } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';
import { CSSProperties } from 'react';
import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        ItemTitle: styled.div({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }),
        ItemText: styled.div(ItemTextParams(size)),
        CheckBox: styled.div({
            width: 6,
            height: 6,
            borderRadius: 1,
            marginLeft: 10,
        }),
        CheckBoxContainter: styled.div({ display: 'flex', gap: 4, alignItems: 'center' }),
        MainItem: styled.div(MainItemParams(size)),
        CalcContainer: styled.div({ display: 'flex', alignItems: 'center', gap: 10 }),
        BigTitleText: BigTitleTextParams(size),
    };
};
function MainItemParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        fontSize: 11,
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        borderRight: `1px solid ${$borders}`,
        padding: ' 0 20px',
    };
    if (size.isTab) {
        allStyle = { ...allStyle, fontSize: 10 };
    }
    if (size.isMobile) {
        allStyle = {
            ...allStyle,
            fontSize: 10,
            borderRight: 'none',
            padding: 0,
        };
    }
    return allStyle;
}
function ItemTextParams(size: TwindowSize): any {
    let allStyle: CSSProperties = {
        fontSize: 22,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };
    if (size.isLaptop) {
        allStyle = { ...allStyle, fontSize: 18 };
    }
    if (size.isTab) {
        allStyle = { ...allStyle, fontSize: 12 };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle, fontSize: 12, justifyContent: 'start' };
    }
    return allStyle;
}
function BigTitleTextParams(size: TwindowSize): any {
    let allStyle: CSSProperties = { fontSize: 16 };
    if (size.isTab) {
        allStyle = { fontSize: 14 };
    }
    if (size.isMobile) {
        allStyle = {
            fontSize: 12,
            padding: '8px 10px',
            border: '1px solid #fff',
            borderRadius: 2,
        };
    }
    return allStyle;
}
