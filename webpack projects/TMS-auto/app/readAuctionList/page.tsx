'use client';
import Breadcrums from '@ts/components/helpers/breadcrums';
import styleIndex, { itemContainer } from '@app/page/style';
import style from './style';
import FeedbackForm from '@ts/components/helpers/feedbackForm';
import TextBox from './components/textBox';
import Example from './components/example';
import Info from './components/info';
import Decoding from './components/decoding';
import Estimation from './components/estimation';
import AuctionList from './components/auctionList';
import Designations from './components/designations';
import { Suspense } from 'react';

export default () => {
    const { Container } = styleIndex();
    const ItemContainer = itemContainer();
    const { ContainerMain } = style();

    return (
        <Container>
            <ItemContainer>
                <Breadcrums />
                <ContainerMain>
                    <Suspense>
                        <TextBox type="preview" />
                        <TextBox type="info" />
                    </Suspense>
                    <Example />
                    <Info />
                    <Decoding />
                    <Estimation type="body" />
                    <Estimation type="salon" />
                    <AuctionList />
                    <Designations type="shiftBox" />
                    <Designations type="additionalOptions" />
                    <FeedbackForm type="calc" />
                </ContainerMain>
            </ItemContainer>
        </Container>
    );
};
