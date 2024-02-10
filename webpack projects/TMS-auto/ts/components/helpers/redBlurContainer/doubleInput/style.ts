import { $background, $hover } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';
import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Title: styled.div({
            fontSize: size.isMobile ? '1.29em' : '1.5em',
            color: '#fff',
        }),
        InputList: styled.div(InputListParams(size)),
        InputBox: styled.div({
            flex: '0 0 22%',

            display: 'flex',
            flexDirection: 'column',
            gap: 5,
        }),
        InputBigBox: styled.div({
            flex: '0 0 44%',

            display: 'flex',
            flexDirection: 'column',
            gap: 5,
        }),
        InputPreview: styled.div({ color: $hover }),
        InputBoxMain: styled.div({
            display: 'flex',
            flex: '1 1',
        }),

        InputYearContainer: styled.div({
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            borderRadius: 3,
            overflow: 'hidden',
            flex: '1 1',

            '.MuiInputBase-root': { borderRadius: 0 },
        }),
        InputYearText: styled.div({
            padding: 10,
            height: '100%',
            flex: '1 1',
            backgroundColor: $background,

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }),
        size,
    };
};
function InputListParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '50px',
    };
    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle };
    }
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle, gap: '15px', flexDirection: 'column' };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle };
    }
    return allStyle;
}
