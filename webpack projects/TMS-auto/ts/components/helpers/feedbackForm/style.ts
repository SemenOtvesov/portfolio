import { $background, $borders, $gray, $hover } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';
import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Left: styled.div({
            zIndex: 1,
            display: 'flex',
            gap: '30px',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: '0 0 33%',
        }),
        Right: styled.form({
            zIndex: 1,
            display: 'flex',
            gap: '8px',
            flexDirection: 'column',
            flex: '0 0 54%',
        }),
        Title: styled.div({
            fontSize: size.isMobile ? '1.29em' : '1.4em',
            color: '#fff',
        }),
        Text: styled.div({
            color: $hover,
        }),
        Description: styled.div({
            fontSize: '.68em',
            color: $gray,
            textAlign: size.isMobile ? 'center' : 'start',
            span: {
                textDecoration: 'underline',
            },
        }),
        InputLine: styled.div({
            display: 'flex',
            gap: '8px',
            width: '100%',
            flexDirection: size.isMobile ? 'column' : 'row',
        }),
        Textarea: styled.textarea({
            resize: 'none',
            color: $hover,
            backgroundColor: $background,
            fontSize: '14px',
            width: '100%',
            padding: '10px',
            height: '6em',
        }),
        size,
    };
};
