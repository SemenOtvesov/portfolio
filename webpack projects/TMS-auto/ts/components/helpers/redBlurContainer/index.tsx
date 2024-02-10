'use client';
import React from 'react';
import style from './style';

export default (props: React.HtmlHTMLAttributes<HTMLDivElement>) => {
    const { Container } = style();
    return <Container {...props}>{props.children}</Container>;
};
