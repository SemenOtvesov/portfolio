import useTheme, { useThemeReturn } from '@app/hooks/useTheme';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import { SxProps } from '@mui/material';

export default () => {
    const size = useWindowSizeCheck();
    const [theme]: useThemeReturn = useTheme();
    return {
        SelectSx: {
            background:
                'linear-gradient(180deg, rgba(196,39,251,0) 0%, rgba(196,39,251,0.4) 100%);',
            fontSize: '0.9em',
            padding: '10px 20px',
            flex: '1 1',
            color: theme.textColor,
            borderRadius: 30,
            height: 'calc(1em + 30px)',
            minHeight: 'calc(1em + 30px)',
            '.MuiSelect-select.MuiSelect-select.MuiSelect-select': {
                padding: '0px',
            },
            '.MuiSelect-icon,.MuiSelect-nativeInput,.MuiInputBase-input': {
                color: theme.textColorGray,
            },
        } as SxProps,
        ItemSx: {} as SxProps,
        size,
    };
};
