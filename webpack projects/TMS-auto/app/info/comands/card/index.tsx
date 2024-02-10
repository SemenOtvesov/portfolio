'use client';
import Image from '@ts/components/helpers/image/image';
import style from './style';
import ArrowButton from '@ts/components/helpers/arrowButton';

type Tprops = {
    card: {
        imgPath: string;
        title: string;
        text: string;
        phone: string;
    };
};

export default ({ card }: Tprops) => {
    const { Card, CardBottom, CardTitle, CardText } = style();
    return (
        <Card>
            <CardBottom>
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.text}</CardText>
                <ArrowButton type="dark" content={'WHATSAPP'} />
                <ArrowButton type="dark" content={card.phone} />
            </CardBottom>
            <Image imageName={card.imgPath} imageType="image" sourseMod={false} />
        </Card>
    );
};
