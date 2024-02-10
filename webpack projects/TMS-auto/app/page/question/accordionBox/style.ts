import { $liteBackground } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            borderTop: '1px solid #fff',
            svg: { color: '#fff' },
            '.MuiAccordion-gutters.MuiAccordion-gutters': { borderRadius: 0 },
            fontSize: size.isMobile ? 14 : 16,
        }),
        IconSx: {
            transform: 'rotate(45deg)',
        } as SxProps,
        AccordionSx: {
            backgroundColor: $liteBackground,
            color: '#fff',
            borderBottom: '1px solid #fff',
            '.css-yw020d-MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                transform: 'rotate(45deg)',
            },
            '.MuiAccordionSummary-contentGutters.Mui-expanded': {
                margin: size.isMobile ? '0 0 12px 0' : '27px 0',
            },
            '.MuiAccordionSummary-content': { margin: size.isMobile ? '12px 0' : '27px 0' },
            '.MuiButtonBase-root': { padding: 0 },
            '.MuiAccordionDetails-root': { padding: size.isMobile ? '0 0 10px 0' : '10px 0' },
        } as SxProps,
        TypographySx: {
            fontSize: size.isMobile ? '0.8em' : '1em',
        } as SxProps,
        size,
    };
};
