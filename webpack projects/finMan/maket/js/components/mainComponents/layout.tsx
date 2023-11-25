import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/header';
import Footer from './footer';
import Login from '../middleComponents/popaps/login/login';
import { TlayoutContext } from '@js/types/context/layout';
import { motion, AnimatePresence } from 'framer-motion';
import useWindowBlur from '@js/hooks/useWindowBlur';
import useRegState from '@js/hooks/useRegState';
import Notification from '@middleComponents/popaps/notification/notification';
import useNotification from '@js/hooks/useNotification';

export const LayoutContext = createContext<TlayoutContext>({});

export default () => {
    const [windowBlur, setWindowBlur] = useWindowBlur();
    const [regState, setRegState] = useRegState(setWindowBlur);
    const [notificationValue] = useNotification();

    return (
        <LayoutContext.Provider value={{ regState, setRegState }}>
            <Header />
            <AnimatePresence>
                {notificationValue ? <Notification value={notificationValue} /> : ''}
            </AnimatePresence>
            <AnimatePresence>
                {windowBlur ? (
                    <motion.div
                        initial={{ x: '-100vw', y: '-100vh' }}
                        animate={{ x: 0, y: 0 }}
                        exit={{ x: '-100vw', y: '-100vh' }}
                        transition={{ duration: 0.2 }}
                        className="body__backblur"
                    />
                ) : (
                    ''
                )}
            </AnimatePresence>
            <AnimatePresence>{regState ? <Login /> : ''}</AnimatePresence>
            <Outlet />
            <Footer />
        </LayoutContext.Provider>
    );
};
