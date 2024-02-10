import { $background, $hover } from '@ts/style/allStyled/colors';
import { SxProps } from '@mui/material';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default (textCenter: boolean | undefined) => {
    const size = useWindowSizeCheck();
    return {
        InputSx: {
            color: $hover,
            backgroundColor: $background,
            fontSize: '14px',
            flex: '0 0 calc(50% - 4px)',
            padding: '15px',
            borderRadius: '3px',

            '.MuiInput-input': {
                padding: 0,
                textAlign: textCenter ? 'center' : 'start',
            },
            '::placeholder': { color: $hover },
        } as SxProps,
    };
};
