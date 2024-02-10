import { $background, $hover } from '@ts/style/allStyled/colors';
import { SxProps } from '@mui/material';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default (pd10: boolean | undefined) => {
    const size = useWindowSizeCheck();
    return {
        SelectSx: {
            color: $hover,
            backgroundColor: $background,
            fontSize: '14px',
            width: '100%',

            boxShadow: 'none',
            '.MuiOutlinedInput-notchedOutline': { border: 0 },
            '.MuiOutlinedInput-input': { padding: pd10 ? '10px' : '15px' },
            '.MuiSelect-icon': { color: $hover },
        } as SxProps,
    };
};
