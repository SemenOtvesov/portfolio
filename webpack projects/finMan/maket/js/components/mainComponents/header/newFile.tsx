import useAppSelector from '@js/hooks/useAppSelector';
import React from 'react';
import { Tprops } from './headerUserInfo';

export default ({}: Tprops) => {
    const userUid = useAppSelector(state => state.userState.userUid);

    if (userUid) {
        return (
            <div className="header__user-box">
                <button className="header__user-button">Войти</button>
                <button className="header__user-button green">
                    Зарегестрироваться
                </button>
            </div>
        );
    }

    return (
        <div className="header__user-box">
            <div className="header__user-text">Ctv`y</div>
            <div className="header__user-exit icon-exit"></div>
        </div>
    );
};
