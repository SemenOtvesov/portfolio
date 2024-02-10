'use client';

import Card from './card';
import style from './style';
const cardListArr = [
    {
        imgPath: 'comand/avatarComand',
        title: 'Имя Фамилия',
        text: 'Должность',
        phone: '+7 (999) 999-99-99',
    },
    {
        imgPath: 'comand/avatarComand',
        title: 'Имя Фамилия',
        text: 'Должность',
        phone: '+7 (999) 999-99-99',
    },
    {
        imgPath: 'comand/avatarComand',
        title: 'Имя Фамилия',
        text: 'Должность',
        phone: '+7 (999) 999-99-99',
    },
    {
        imgPath: 'comand/avatarComand',
        title: 'Имя Фамилия',
        text: 'Должность',
        phone: '+7 (999) 999-99-99',
    },
    {
        imgPath: 'comand/avatarComand',
        title: 'Имя Фамилия',
        text: 'Должность',
        phone: '+7 (999) 999-99-99',
    },
    {
        imgPath: 'comand/avatarComand',
        title: 'Имя Фамилия',
        text: 'Должность',
        phone: '+7 (999) 999-99-99',
    },
];

export default () => {
    const { Container, Title, Text, CardList } = style();
    return (
        <Container>
            <Title>Наша команда</Title>
            <Text>
                Будьте в курсе с кем вы работаете, а так же знайте контакты нашей команды и не
                попадитесь на мошенников!
            </Text>
            <CardList>
                {cardListArr.map((el, i) => (
                    <Card card={el} key={el.imgPath + i} />
                ))}
            </CardList>
        </Container>
    );
};
