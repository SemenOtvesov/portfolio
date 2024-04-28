'use client';
import React, { PropsWithChildren } from 'react';
import style from './style';

type Tprops = {
    children?: any;
};

const container: React.FC<PropsWithChildren<Tprops>> = ({ children }) => {
    const { Container } = style();
    return <Container className="scrollbar">{children}</Container>;
};
export default container;
