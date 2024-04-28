'use client';
import React from 'react';
import style from './style';

export default () => {
    const { LogoBox, Logo, Burger, Blur } = style();
    return (
        <LogoBox>
            <Burger className="burger">
                <span className="span-1"></span>
                <span className="span-2"></span>
                <span className="span-3"></span>
                <span className="span-4"></span>
            </Burger>
            <Logo className="icon-Logo"></Logo>
            <Blur />
        </LogoBox>
    );
};
