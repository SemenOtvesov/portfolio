import React from 'react';
import style from './style';

type Tprops = { title: string; text: string };

export default ({ text, title }: Tprops) => {
    const {
        RightItemMiddleItem,
        RightItemMiddleItemTitle,
        RightItemMiddleItemText,
        RightItemMiddleItemMain,
    } = style();
    return (
        <RightItemMiddleItem>
            <RightItemMiddleItemMain>
                <RightItemMiddleItemTitle>{title}</RightItemMiddleItemTitle>
                <RightItemMiddleItemText>{text}</RightItemMiddleItemText>
            </RightItemMiddleItemMain>
        </RightItemMiddleItem>
    );
};
