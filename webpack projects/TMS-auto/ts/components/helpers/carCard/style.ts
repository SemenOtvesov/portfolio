import styled from '@emotion/styled';
import posAbs from '@ts/style/allStyled/posAbs';
import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';
import { $background, $borders, $red } from '@ts/style/allStyled/colors';
import { SxProps } from '@mui/material';

export default (black?: boolean) => {
    const size = useWindowSizeCheck();
    return {
        CardList: styled.div({
            display: 'flex',
            justifyContent: 'space-between',
        }),
        Container: styled.div(ContainerParams(size, black)),
        Preview: styled.div({
            width: '100%',
            aspectRatio: '1.59/1',
            position: 'relative',
            picture: { ...posAbs },
        }),
        Main: styled.div({
            padding: '18px 10px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            width: '100%',
        }),
        MainItem: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
        }),
        Title: styled.div({
            fontWeight: black ? 700 : 400,
        }),
        Text: styled.div({}),
        Plug: styled.div({
            width: 'calc(100% - 20px)',
            height: 1,
            backgroundColor: black ? $borders : $background,
            margin: '0 10px',
        }),
        Button: styled.button({
            margin: '18px 10px 14px',
            padding: '12px',
            borderRadius: '10px',
            color: '#fff',
            width: 'calc(100% - 20px)',
            backgroundColor: $red,
        }),
        Prise: styled.div({ padding: 16, fontSize: '1.25rem', fontWeight: 800 }),
        size,
    };
};

function ContainerParams(size: TwindowSize, black?: boolean): any {
    let allStyle: SxProps = {
        borderRadius: 3,
        backgroundColor: black ? 'rgba(75, 75, 75, 0.3);' : '#fff',
        color: black ? '#fff' : $background,
        flex: '0 0 24%',
        border: black ? `1px solid ${$borders}` : '',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };
    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle };
    }
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle, flex: '0 0 32%' };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle, flex: '0 0 81%' };
    }
    return allStyle;
}
