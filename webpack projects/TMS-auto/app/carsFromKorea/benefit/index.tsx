'use client';
import CalculationUser from '@ts/components/helpers/calculationUser';
import FeedbackForm from '@ts/components/helpers/feedbackForm';
import GridInfo, { Tsteps } from '@ts/components/helpers/gridInfo';
import { itemContainer } from '@app/page/style';
import componentsStyle from '@components/carsFrom/style';
import { store } from '@store/index';
import { Provider } from 'react-redux';

const steps: Tsteps = [
    {
        step: 1,
        title: 'Техническое состояние',
        text: 'В Корее отличные дороги и топливо высокого качества. За скрутку пробега уголовное наказание.',
    },
    {
        step: 2,
        title: 'Левый руль',
        text: 'Традиционное расположение руля для правостороннего движения, жители центральной России оценят это',
    },
    {
        step: 3,
        title: 'Быстрая доставка',
        text: 'Доставка из Кореи значительно быстрее по сравнению с доставкой из Японии. В среднем 2 недели с момента покупки',
    },
    {
        step: 4,
        title: 'Выгодная стоимость',
        text: 'Цены на автомобили из Кореи на 10-20% ниже, чем на рынке в России, вы можете сравнить это абсолютно бесплатно, свяжитесь с нашим менеджером, уточните цены и сравните их на авторынках',
    },
    {
        step: 5,
        title: 'Большой выбор авто',
        text: 'Через Корею вы получаете возможность приобрести автомобили не только корейских производителей, но и европейских в том числе. Огромный выбор автомобилей под любые пожелания',
    },
];

export default () => {
    const ItemContainer = itemContainer();
    const { Title } = componentsStyle();
    const StandartTitle = Title('standart');
    return (
        <Provider store={store}>
            <ItemContainer>
                <StandartTitle>Из чего складывается стоимость?</StandartTitle>
                <GridInfo steps={steps} notIcon />
                <CalculationUser />
                <FeedbackForm type="questions" />
            </ItemContainer>
        </Provider>
    );
};
