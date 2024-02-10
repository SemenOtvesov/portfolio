'use client';
import { Button } from '@mui/material';
import style from './style';
import { ItemContainerTitle } from '@app/page/style';
import { $background } from '@ts/style/allStyled/colors';

export default () => {
    const { Container, Text, Input, InputContainer, ButtonSx } = style();
    return (
        <Container>
            <ItemContainerTitle style={{ color: $background }}>
                Сколько стоит авто?
            </ItemContainerTitle>
            <Text>Укажите ваш телефон, и мы свяжемся с вами, чтобы рассчитать стоимость</Text>
            <InputContainer>
                <Input placeholder="Имя" />
                <Input placeholder="Телефон" />
                <Input placeholder="Город" />
                <Input placeholder="Марка и модель авто" />
            </InputContainer>
            <Button sx={ButtonSx} variant="contained">
                РАССЧИТАТЬ СТОИМОСТЬ
            </Button>
            <Text style={{ textAlign: 'center' }}>
                Нажимая на кнопку, вы соглашаетесь <br />
                <span>с политикой конфиденциальности</span>
            </Text>
        </Container>
    );
};
