import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
import MainRoute from '../routes/mainRoute';
import { ThemeProvider as ThemeProviderMUI } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import useTheme from '@app/hooks/useTheme';
import useOAuthToken from '@app/hooks/useOAuthToken';
import useGetRecomendations from '@app/hooks/useGetRecomendations';
import Video from '../routes/video';

export default () => {
    const [theme, MUItheme] = useTheme();
    useOAuthToken();
    useGetRecomendations();
    return (
        <ThemeProviderMUI theme={MUItheme}>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<MainRoute />} />
                        <Route path="video/:videoId" element={<Video />} />
                    </Route>
                </Routes>
            </ThemeProvider>
        </ThemeProviderMUI>
    );
};
