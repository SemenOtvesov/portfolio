import React from 'react';
import { Titem } from '../itemList';
import style from './style';
import Link from 'next/link';
import useAppDispatch from 'ts/hooks/useAppDispatch';
import { setState } from '@store/headerState';

type Tprops = { item: Titem };

export default ({ item }: Tprops) => {
    const { Container, Title, List, SubItem } = style();
    const dispatch = useAppDispatch();
    return (
        <Container onClick={() => dispatch(setState())}>
            <Title>{item.title}</Title>
            <List>
                {item.subItems.map(subItem => (
                    <Link key={subItem.path} href={'/' + subItem.path}>
                        <SubItem>{subItem.title}</SubItem>
                    </Link>
                ))}
            </List>
        </Container>
    );
};
