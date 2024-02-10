'use client';
import { itemContainer } from '@app/page/style';
import style from './style';
import Top from './top/index';
import Bottom from './bottom/index';
import { Provider } from 'react-redux';
import { store } from '@store/index';

export default () => {
    const { Background, Container, Plug } = style();
    const ItemContainer = itemContainer();
    return (
        <Provider store={store}>
            <Background>
                <ItemContainer>
                    <Container>
                        <Top />
                        <Plug />
                        <Bottom />
                    </Container>
                </ItemContainer>
            </Background>
        </Provider>
    );
};
