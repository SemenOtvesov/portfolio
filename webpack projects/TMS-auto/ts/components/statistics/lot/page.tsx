'use client';
import Breadcrums from '@ts/components/helpers/breadcrums';
import styleIndex, { itemContainer } from '@app/page/style';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import FeedbackForm from '@ts/components/helpers/feedbackForm';
import style from './style';
import { TurlParams } from '@locTypes/urlPath';
import { useParams } from 'next/navigation';
import DecryptAuctionList from './decryptAuctionList';
import Main from './main/index';

export default () => {
    const { Container } = styleIndex();
    const ItemContainer = itemContainer();
    const { Title } = style();
    const { lot }: TurlParams = useParams();
    return (
        <Provider store={store}>
            <Container>
                <ItemContainer>
                    <Breadcrums />
                    <Title>Лот № {lot}</Title>
                    <Main />
                    <DecryptAuctionList />
                    <FeedbackForm type="calc" />
                </ItemContainer>
            </Container>
        </Provider>
    );
};
