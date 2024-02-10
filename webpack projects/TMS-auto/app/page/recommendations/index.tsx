import React from 'react';
import { itemContainer } from '../style';
import RecentlyPurchased from './recentlyPurchased';
import FeedbackForm from '@ts/components/helpers/feedbackForm';
import CalculationUser from '@ts/components/helpers/calculationUser';

type Tprops = {};

export default ({}: Tprops) => {
    const ItemContainer = itemContainer();
    return (
        <ItemContainer>
            <CalculationUser />
            <RecentlyPurchased />
            <FeedbackForm type="othersQuestions" />
        </ItemContainer>
    );
};
