'use client';
import Breadcrums from '@ts/components/helpers/breadcrums';
import styleIndex, { itemContainer } from '@app/page/style';
import Registration from './components/registration';
import Main from './components/main';

export default () => {
    const { Container } = styleIndex();
    const ItemContainer = itemContainer();
    return (
        <Container>
            <ItemContainer>
                <Breadcrums />
                <Registration />
                <Main />
            </ItemContainer>
        </Container>
    );
};
