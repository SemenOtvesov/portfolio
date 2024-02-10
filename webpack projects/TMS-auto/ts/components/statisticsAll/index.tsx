'use client';
import Breadcrums from '@ts/components/helpers/breadcrums';
import styleIndex, { itemContainer } from '@app/page/style';
import BrandListBrand from './brandList/brandIndex';
import BrandListModel from './brandList/modelIndex';
import style from './style';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import FeedbackForm from '../helpers/feedbackForm';

type Tprops = { type: 'japan' | 'korea'; brand?: string };

export default ({ type, brand }: Tprops) => {
    const { Container } = styleIndex();
    const ItemContainer = itemContainer();
    const { Title, BrandListWrapper } = style();
    return (
        <Provider store={store}>
            <Container>
                <ItemContainer>
                    <Breadcrums />
                    <Title>
                        Статистика продаж авто с аукционов {type === 'japan' ? 'Японии' : 'Кореи'}
                    </Title>
                    <BrandListWrapper>
                        {brand ? (
                            <BrandListModel type={type} brand={brand} />
                        ) : (
                            <BrandListBrand type={type} />
                        )}
                    </BrandListWrapper>
                    <FeedbackForm type="calc" />
                </ItemContainer>
            </Container>
        </Provider>
    );
};
