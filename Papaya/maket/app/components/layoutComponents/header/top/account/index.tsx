'use client';
import useAppSelector from '@app/hooks/useAppSelector';
import style from './style';
import React, { useState } from 'react';
import useAppDispatch from '@app/hooks/useAppDispatch';
import { AnimatePresence } from 'framer-motion';
import { setAuth } from '@app/state/authState/asyncThunk/setAuthThunk';

export default () => {
    const { Container, Account, Popap, Title, Button, LogoImg } = style();
    const { name, logo } = useAppSelector(state => state.authState);
    const dispatch = useAppDispatch();
    const [openPopap, setOpenPopap] = useState(false);

    return (
        <Container>
            <Account onClick={() => setOpenPopap(prevSt => !prevSt)}>
                {logo ? (
                    <>
                        <LogoImg
                            src={logo}
                            onError={(e: any) => e.target.setAttribute('style', 'display: none')}
                            alt={name[0]}
                        />
                        {name[0]}
                    </>
                ) : (
                    <div className="icon-Account"></div>
                )}
            </Account>
            <AnimatePresence>
                {openPopap ? (
                    <Popap initial={{ y: -10 }} animate={{ y: 0 }}>
                        <Title>{name}</Title>
                        <Button
                            auth={!!logo}
                            onClick={() => dispatch(setAuth(logo ? 'logout' : 'login'))}
                        >
                            <div className="icon-logIn"></div>
                            {!!logo ? 'Выйти' : 'Войти'}
                        </Button>
                    </Popap>
                ) : (
                    <></>
                )}
            </AnimatePresence>
        </Container>
    );
};
