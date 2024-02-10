'use client';
import styleIndex, { itemContainer } from '@app/page/style';
import style from './style';
import Link from 'next/link';

export default () => {
    const { Container } = styleIndex();
    const ItemContainer = itemContainer();
    const { ContainerMain, Title, MiddleText, Text, Button } = style();

    return (
        <Container>
            <ItemContainer>
                <ContainerMain>
                    <Title>404</Title>
                    <MiddleText>Страница не найдена</MiddleText>
                    <Text>Пожалуйста, проверьте адрес и повторите попытку</Text>
                    <Link href={'/'}>
                        <Button>Вернуться на главную</Button>
                    </Link>
                </ContainerMain>
            </ItemContainer>
        </Container>
    );
};
