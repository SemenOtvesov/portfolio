import React from 'react';
import style from './style';
import Item from './item/index';
import itemList from './itemList';
import useAppSelector from 'ts/hooks/useAppSelector';

export default () => {
    const { Container, ContainerVariants, size } = style();
    const state = useAppSelector(state => state.headerState.state);

    if (!state) return <></>;
    return (
        <Container
            initial={'initial'}
            animate={'animate'}
            exit={'initial'}
            variants={ContainerVariants}
            className={size.isMobile ? 'scroll' : ''}
        >
            {itemList.map(item => (
                <Item key={item.title} item={item} />
            ))}
        </Container>
    );
};
