'use client';
import style from './style';

export default () => {
    const { Container, ItemBox, ItemLine, Item, InfoBox, Info, Plug, size } = style();
    return (
        <Container>
            <ItemBox>
                <ItemLine>
                    <Item>АВТО ИЗ ЯПОНИИ</Item>
                    <Item>АВТО ИЗ КИТАЯ</Item>
                    <Item>СТАТИСТИКА КОРЕЯ</Item>
                    <Item>О КОМПАНИИ</Item>
                </ItemLine>
                <ItemLine>
                    <Item>АВТО ИЗ КОРЕИ</Item>
                    <Item>АУКЦИОНЫ</Item>
                    <Item>СТАТИСТИКА ЯПОНИЯ</Item>
                    <Item>КОНТАКТЫ</Item>
                </ItemLine>
            </ItemBox>
            {!size.isMobile && (
                <Plug>
                    <span />
                </Plug>
            )}
            <InfoBox>
                <Info>2023 ООО “ТМС Групп”. Все права защищены</Info>
                <Info>
                    Данный сайт носит исключительно информационный характер и ни при каких
                    обстоятельствах не является публичной офертой
                </Info>
            </InfoBox>
        </Container>
    );
};
