'use client';
import FeedbackForm from '@ts/components/helpers/feedbackForm';
import style from './style';
import GridInfo, { Tsteps } from '@ts/components/helpers/gridInfo';
import { itemContainer } from '@app/page/style';

const steps: Tsteps = [
    {
        step: 1,
        title: 'Стоимость авто на аукционе',
        text: 'На цену влияет год выпуска автомобиля, его пробег, аукционная оценка, комплектация, а так же популярность модели',
    },
    {
        step: 2,
        title: 'Расходы по Японии',
        text: 'Транспортировка машины по Японии от аукциона в порт отгрузки',
    },
    {
        step: 3,
        title: 'Фрахт до Владивостока',
        text: 'Морская перевозка вашего автомобиля из Японии в Россию (г.Владивосток)',
    },
    {
        step: 4,
        title: 'Таможенное оформление',
        text: 'Цена складывается из таможенного сбора, утилизационного сбора и единой ставки таможенных пошлин и налогов',
    },
    {
        step: 5,
        title: 'Комиссия за наши услуги',
        text: 'Стоимость наших услуг от 30 000 до 60 000 рублей, в зависимости от стоимости автомобиля. Оплачивается на наши реквизиты после прохождения всех таможенных процедур',
    },
];

export default () => {
    const { Title, Background } = style();
    const ItemContainer = itemContainer();
    return (
        <Background>
            <ItemContainer>
                <Title>Из чего складывается стоимость?</Title>
                <GridInfo steps={steps} notIcon />
                <FeedbackForm type="othersQuestions" />
            </ItemContainer>
        </Background>
    );
};
