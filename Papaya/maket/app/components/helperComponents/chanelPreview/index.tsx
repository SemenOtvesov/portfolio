'use client';
import style from './style';
import React from 'react';

export default ({ src }: { src: string }) => {
    const { ChanelContainer, Chanel } = style();
    return (
        <ChanelContainer>
            <Chanel
                onError={(e: any) => e.target.setAttribute('style', 'display: none')}
                src={src}
            />
        </ChanelContainer>
    );
};
