'use client';
import style from './style';
import Image from '@components/helpers/image/image';
import IconBox from './iconBox/index';
import ConnectInfo from './connectInfo/index';

export default () => {
    const { Container, ImageBox, TopItem, TopItemText, ItemWrapper, Plug, size } = style();
    return (
        <Container>
            <ItemWrapper style={size.isMobile ? { width: '33%' } : {}}>
                <ImageBox>
                    <Image imageType="icon" imageName="logo" svg />
                </ImageBox>
            </ItemWrapper>

            {!size.isMobile && (
                <Plug>
                    <span />
                </Plug>
            )}

            <ItemWrapper>
                <ConnectInfo />
            </ItemWrapper>
            <ItemWrapper>
                <TopItem>
                    <TopItemText>г.Владивосток, ул. 1-я Морская, д. 9, офис 117</TopItemText>
                    <TopItemText>workmail@gmail.com</TopItemText>
                </TopItem>
            </ItemWrapper>

            {!size.isMobile && (
                <Plug>
                    <span />
                </Plug>
            )}

            <ItemWrapper>
                <IconBox />
            </ItemWrapper>
        </Container>
    );
};
