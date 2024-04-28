import { Theme } from '@emotion/react';
import { Theme as ThemeMui, createTheme } from '@mui/material';
import useAppSelector from './useAppSelector';

export interface TglobalTheme extends Theme {
    bgColor: string;
    textColor: string;
    bgColorNav: string;
    bgPopap: string;
    textColorGray: string;
}
export type useThemeReturn = [theme: TglobalTheme, MUItheme: ThemeMui];

export default (): useThemeReturn => {
    const globTheme = useAppSelector(state => state.themeState);
    const theme: TglobalTheme = {
        bgColor: globTheme === 'DARK' ? '#1C1B33' : '',
        bgColorNav: globTheme === 'DARK' ? '#2D3157' : '',
        bgPopap: globTheme === 'DARK' ? '#57557c' : '',
        textColorGray: globTheme === 'DARK' ? 'rgba(255, 255, 255, 0.6)' : '',
        textColor: globTheme === 'DARK' ? '#FFF' : '',
    };
    const MUItheme: ThemeMui = createTheme({});
    return [theme, MUItheme];
};
