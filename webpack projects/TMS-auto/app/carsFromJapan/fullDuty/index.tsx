'use client';
import { itemContainer } from '@app/page/style';
import style from '@components/carsFrom/style';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import CalculationUser from '@ts/components/helpers/calculationUser';

export default () => {
    const { Title, Text, size } = style();
    const ItemContainer = itemContainer();
    const StandartTitle = Title('standart');
    const MiniTitle = Title('mini');
    return (
        <Provider store={store}>
            <ItemContainer style={{ fontSize: !size.isMobile ? 16 : 14 }}>
                <StandartTitle>Авто под полную пошлину</StandartTitle>
                <Text>
                    Авто под полную пошлину — это целый автомобиль, прошедший на территории РФ
                    полную процедуру таможенной очистки и имеющий все необходимые документы для
                    беспрепятственной постановки на учет в органах Госавтоинспекции РФ. Так же это
                    возможность приобрести автомобиль уникальной конфигурации, которую не всегда
                    получится найти в диллерских центрах, потому что автомобили для внутреннего
                    японского рынка отличаются от нашего внутреннего рынка.
                </Text>
                <MiniTitle>Проходной или непроходной, что это значит?</MiniTitle>
                <Text>
                    Это означает, что срок эксплуатации машины влияет на пошлину и конечную
                    стоимость автомобиля.
                    <br />
                    <br /> Проходные — это автомобили, у которых с момента выпуска с завода прошло
                    от 3 до 5 лет. На них установленная минимальная пошлина. Непроходные —
                    автомобили старше 5 лет и младше 3 лет. Их привезти будет дороже, пошлина
                    значительно выше в сравнении с проходными.
                    <br />
                    <br /> По действующим правилам таможенного оформления, ввозимые из-за границы
                    иномарки в зависимости от их срока эксплуатации, делятся на несколько групп: до
                    трех лет, от трех до пяти лет, свыше пяти лет.
                    <br />
                    <br /> Так же не стоит забывать, что, чем старше автомобиль и мощнее двигатель,
                    тем больше вы заплатите за пошлину.
                </Text>
                <CalculationUser />
            </ItemContainer>
        </Provider>
    );
};