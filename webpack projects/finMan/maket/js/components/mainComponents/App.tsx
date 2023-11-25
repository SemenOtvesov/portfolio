import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
import userAuth from '@js/state/user/userAuth';
import MainRoute from '../routes/mainRoute';

export default () => {
    userAuth();
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainRoute />} />
            </Route>
        </Routes>
    );
};
