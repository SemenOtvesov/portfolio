'use client';
import FeedbackForm from '@ts/components/helpers/feedbackForm';
import { ItemContainerTitle, itemContainer } from '../style';
import AccordionBox from './accordionBox/index';
import style from './style';

export default () => {
    const { Text, Background } = style();
    const ItemContainer = itemContainer();
    return (
        <Background>
            <ItemContainer>
                <ItemContainerTitle>Часто задаваемые вопросы</ItemContainerTitle>
                <Text>
                    Время - самый ценный ресурс, поэтому специально для вас мы собрали часто
                    задаваемые вопросы и ответы к ним
                </Text>
                <AccordionBox />
                <FeedbackForm type="questions" />
            </ItemContainer>
        </Background>
    );
};
