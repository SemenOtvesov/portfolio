import useAppSelector from '@js/hooks/useAppSelector';
import React, { useContext } from 'react';
import { LayoutContext } from '../layout';
import useAppDispatch from '@js/hooks/useAppDispatch';
import logoutRequest from '@js/state/user/asyncThunk/logoutRequest';

export default () => {
    const { setRegState } = useContext(LayoutContext);
    const userUid = useAppSelector(state => state.userState.userUid);
    const dispatch = useAppDispatch();

    if (!userUid) {
        return (
            <div className="header__user-box">
                <button
                    onClick={() => setRegState && setRegState('login')}
                    className="header__user-button"
                >
                    Войти
                </button>
                <button
                    onClick={() => setRegState && setRegState('reg')}
                    className="header__user-button green"
                >
                    Зарегестрироваться
                </button>
            </div>
        );
    }

    return (
        <div className="header__user-box">
            <div className="header__user-text">Семён</div>
            <button
                onClick={() => dispatch(logoutRequest())}
                className="header__user-exit icon-exit"
            ></button>
        </div>
    );
};
