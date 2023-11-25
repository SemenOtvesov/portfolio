import { LayoutContext } from '@js/components/mainComponents/layout';
import useAppSelector from '@js/hooks/useAppSelector';
import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default () => {
    const { regState, setRegState } = useContext(LayoutContext);
    const errRequest = useAppSelector(state => state.userState.errRequest);

    if (regState === 'login') {
        return (
            <div className="popap-login__button-box">
                <button type="submit" className="popap-login__button">
                    Войти
                </button>
                <button
                    onClick={() => setRegState && setRegState('reg')}
                    className="popap-login__button reg"
                >
                    Зарегистрироваться
                </button>
                <AnimatePresence>
                    {errRequest ? (
                        <motion.div
                            initial={{ x: '-10%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '10%', opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="popap-login__err"
                        >
                            Неправильный логин или пароль
                        </motion.div>
                    ) : (
                        ''
                    )}
                </AnimatePresence>
            </div>
        );
    }
    if (regState === 'reg') {
        return (
            <div className="popap-login__button-box">
                <button type="submit" className="popap-login__button">
                    Зарегистрироваться
                </button>
                <button
                    onClick={() => setRegState && setRegState('login')}
                    className="popap-login__button reg"
                >
                    Войти
                </button>
            </div>
        );
    }
};
