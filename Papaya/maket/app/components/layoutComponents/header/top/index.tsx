'use client';
import React from 'react';
import style from './style';
import Search from './search';
import Account from './account';

export default () => {
    const { Top, Notification } = style();
    return (
        <Top>
            <Search />
            <Notification className="icon-Notification"></Notification>
            <Account />
        </Top>
    );
};
