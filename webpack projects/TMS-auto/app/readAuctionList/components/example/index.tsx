'use client';
import style from './style';
import styleMain from '@app/readAuctionList/style';
import Image from '@ts/components/helpers/image/image';

export default () => {
    const { Container, ImageBox } = style();
    const { TitleItems } = styleMain();

    return (
        <Container>
            <TitleItems>Как выглядит аукционный лист на японское авто?</TitleItems>
            <ImageBox>
                <Image imageName="readAuctionList" imageType="image" sourseMod={false} />
            </ImageBox>
        </Container>
    );
};
