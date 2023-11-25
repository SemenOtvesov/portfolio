import React from 'react';
import Image from '@microComponets/image/image';
import HeaderUserInfo from './headerUserInfo';
import { NavLink } from 'react-router-dom';

const header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <NavLink to={'/'}>
                    <Image imageName="logo" imageType="icon" svg />
                </NavLink>
            </div>
            <HeaderUserInfo />
        </header>
    );
};

export default header;
