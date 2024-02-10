'use client';
import { itemContainer } from '@app/page/style';
import style from './style';
import Button from './button/index';
import Background from './background/index';
import Breadcrums from '@ts/components/helpers/breadcrums';
import FeedbackForm from '@ts/components/helpers/feedbackForm';

type Tprops = {
    title: string;
    text: string;
    backgroundName: string;
};

export default ({ title, text, backgroundName }: Tprops) => {
    const { Title, Text, size } = style();
    const ItemContainer = itemContainer();
    return (
        <ItemContainer style={{ fontSize: size.isDesktop ? 20 : size.isLaptop ? 16 : 12 }}>
            <Breadcrums />
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Button />
            <Background backgroundName={backgroundName} />
            <FeedbackForm type="questions" />
        </ItemContainer>
    );
};
