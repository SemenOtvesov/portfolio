'use client';
import Link from 'next/link';
import style from './style';
import { usePathname } from 'next/navigation';
import { Titem } from '../createItem';

export default ({ item }: { item: Titem }) => {
    const { Container, Title, List, Item } = style();
    const pathname = usePathname();
    return (
        <Container>
            <Title>{item.title}</Title>
            <List>
                {item.items.map((el, i) => (
                    <Item key={el + i}>
                        <Link href={`${pathname}/${el}`}>{el}</Link>
                    </Item>
                ))}
            </List>
        </Container>
    );
};
