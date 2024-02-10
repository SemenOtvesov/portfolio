'use client';
import Breadcrums from '@ts/components/helpers/breadcrums';
import styleIndex, { itemContainer } from '@app/page/style';
import style from './style';
import FeedbackForm from '@ts/components/helpers/feedbackForm';
import Info from '@app/page/info';
import Comands from './comands';

export default () => {
    const { Container } = styleIndex();
    const ItemContainer = itemContainer();
    const {} = style();

    return (
        <Container>
            <ItemContainer>
                <Breadcrums />
                <div style={{ margin: '-15px' }}>
                    <Info />
                </div>
                <Comands />
                <FeedbackForm type="calc" />
            </ItemContainer>
        </Container>
    );
};
