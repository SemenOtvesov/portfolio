import styled from '@emotion/styled';
import posAbs from '@ts/style/allStyled/posAbs';
import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';
import { $background, $red } from '@ts/style/allStyled/colors';
import { SxProps } from '@mui/material';

export default () => {
    const size = useWindowSizeCheck();
    return {
        CardList: styled.div({
            display: 'flex',
            justifyContent: 'space-between',
        }),
        Container: styled.div(ContainerParams(size)),
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
        Title: styled.div({}),
        Text: styled.div({}),
        Plug: styled.div({
            width: 'calc(100% - 20px)',
            height: 1,
            backgroundColor: $background,
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
        size,
    };
};

function ContainerParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        borderRadius: 3,
        backgroundColor: '#fff',
        color: $background,
        flex: '0 0 24%',

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
