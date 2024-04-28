'use client';
import React from 'react';
import style from './style';
import { StyledComponent } from '@emotion/styled';
import Logo from './logo/index';
import Icon from './icon/index';

const listMain = ['Home', 'Shorts', 'Subscriptions', 'Papaya Music'];
const listChanel = ['Library', 'History', 'Your Videos', 'Watch Later', 'Downloads', 'Show More'];

export default () => {
    const { Menu, Item, Text, ItemBox, ItemTitle, UnderLineItem } = style();

    return (
        <Menu>
            <Icon />
            <Logo />

            <ItemBox>
                {listMain.map(el => (
                    <div key={el}>{createItem({ Item, Text, el, UnderLineItem })}</div>
                ))}
            </ItemBox>
            <ItemBox>
                <ItemTitle>My Channel</ItemTitle>
                {listChanel.map(el => (
                    <div key={el}>{createItem({ Item, Text, el, UnderLineItem })}</div>
                ))}
            </ItemBox>
        </Menu>
    );
};

type TCreateProps = {
    Item: StyledComponent<any>;
    Text: StyledComponent<any>;
    UnderLineItem: StyledComponent<any>;
    el: string;
};

function createItem({ Item, Text, el, UnderLineItem }: TCreateProps) {
    const iconTagSplit = el.split(' ');
    const iconTag = iconTagSplit[1] ? iconTagSplit[0] + iconTagSplit[1] : iconTagSplit[0];
    return (
        <Item>
            <div className={`icon-${iconTag}`} />
            <Text>{el}</Text>
            <UnderLineItem />
        </Item>
    );
}
