import React from 'react';
import style from './style';
const cardOne = [
    { title: 'A1', text: 'Небольшая Царапина (уйдёт полировкой)' },
    { title: 'A2', text: 'Царапина (скорее всего уйдёт полировкой)' },
    { title: 'A3', text: 'Большая Царапина (возможно нужен окрас)' },
    { title: 'А4', text: 'Потребуется окрас' },
    { title: 'E1', text: 'Небольшая Вмятина' },
    { title: 'E2', text: 'Несколько Небольших Вмятин' },
    { title: 'E3', text: 'Много Небольших Вмятин' },
    { title: 'U1', text: 'Маленькая Вмятина (уйдет локально)' },
    { title: 'U2', text: 'Вмятина (скорее всего уйдёт локально)' },
    { title: 'U3', text: 'Большая Вмятина (возможно потребуется замена или рихтовка элемента)' },
    { title: 'U4', text: 'Очень большая Вмятина (потребуется замена или рихтовка элемента)' },
    { title: 'W1', text: 'Ремонт/Покраска (вторичный окрас, без шпаклёвки)' },
    { title: 'W2', text: 'Ремонт/Покраска (заметный вторичный окрас, возможна шпаклёвка)' },
    {
        title: 'W3',
        text: 'Ремонт/Покраска (не качественный, очень заметный вторичный окрас со шпаклёвкой)',
    },
    { title: 'S1', text: 'Малозаметная Ржавчина' },
    { title: 'S2', text: 'Заметная Ржавчина' },
    { title: 'S3', text: 'Повсеместная ржавчина' },
    { title: 'C1', text: 'Коррозия' },
    { title: 'C2', text: 'Заметная Коррозия' },
];
const cardTwo = [
    { title: 'С3', text: 'Сквозная Коррозия' },
    { title: 'Р', text: 'Краска отличается от оригинала (выгорел лак)' },
    { title: 'H', text: 'Краска ухудшилась (например: мутные фары, требуют полировки)' },
    { title: 'X', text: 'Элемент требует замены' },
    {
        title: 'XX',
        text: 'Замененный Элемент (возможен повторный окрас, возможен ремонт со шпаклёвкой)',
    },
    { title: 'B1', text: 'Маленькая вмятина с царапиной (возможно уйдёт локально и заполируется)' },
    { title: 'B2', text: 'Вмятина с царапиной (возможно уйдёт локально, потребует окраса)' },
    {
        title: 'B3',
        text: 'Большая вмятина с царапиной (скорее всего не уйдёт локально, точно потребует окраса)',
    },
    {
        title: 'B4',
        text: 'Очень большая вмятина с царапиной (точно не уйдёт локально, возможно потребуется замена элемента)',
    },
    { title: 'Y1', text: 'Маленькая Трещина' },
    { title: 'Y2', text: 'Трещина' },
    { title: 'Y3', text: 'Большая Трещина' },
    { title: 'X1', text: 'Маленькая Трещина на Лобовом стекле' },
    { title: 'R', text: 'Восстановленная Трещина на Лобовом стекле' },
    { title: 'X', text: 'Трещина на Лобовом стекле (требует замены)' },
    { title: 'G', text: 'Трещина в стекле от камня' },
];

export default () => {
    const { CardContainer, Card, CardItem, CardItemTitle, CardItemText, size } = style();
    if (size.isMobile) {
        return (
            <Card>
                {[...cardOne, ...cardTwo].map((el, i) => (
                    <CardItem key={el.text + i ** 2 + 1000}>
                        <CardItemTitle>{el.title}</CardItemTitle>
                        <CardItemText>{el.text}</CardItemText>
                    </CardItem>
                ))}
            </Card>
        );
    } else {
        return (
            <CardContainer>
                <Card>
                    {cardOne.map((el, i) => (
                        <CardItem key={el.text + i ** 2 + 1000}>
                            <CardItemTitle>{el.title}</CardItemTitle>
                            <CardItemText>{el.text}</CardItemText>
                        </CardItem>
                    ))}
                </Card>
                <Card>
                    {cardTwo.map((el, i) => (
                        <CardItem key={el.title + i ** 2 + 1000}>
                            <CardItemTitle>{el.title}</CardItemTitle>
                            <CardItemText>{el.text}</CardItemText>
                        </CardItem>
                    ))}
                </Card>
            </CardContainer>
        );
    }
};
