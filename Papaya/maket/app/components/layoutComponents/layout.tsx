import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/index';
import { motion, AnimatePresence } from 'framer-motion';
import { TlayoutContext } from '@app/locTypes/context/layout';
import useWindowBlur from '@app/hooks/useWindowBlur';
import Navigation from '../mainComponents/navigation';
import Background from './background';

export const LayoutContext = createContext<TlayoutContext>({});

export default () => {
    const [windowBlur, setWindowBlur] = useWindowBlur();

    return (
        <>
            <Background />
            <Header />
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
            <Navigation />
            <Outlet />
        </>
    );
};
