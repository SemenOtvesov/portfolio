import React from 'react';
import ArrowButton from '@ts/components/helpers/arrowButton';
import RightItemMiddleItem from '../../rightItemMiddleItem';
import { $gray } from '@ts/style/allStyled/colors';
import useAppSelector from 'ts/hooks/useAppSelector';
import { Car, Tcountry } from '@locTypes/state/carState';
import style from './style';

type Tprops = { lot: Car };

export default ({ lot }: Tprops) => {
    const {
        Right,
        RightItemTop,
        Title,
        TitleSub,
        RightItemMiddle,
        ButtonBox,
        MiniText,
        RightItemBottom,
    } = style();

    const brandList = useAppSelector(state => state.carState.brandList);
    const infoObj = [
        { value: lot.equipment, text: 'Комплектация' },
        { value: lot.mileage, text: 'Пробег, км' },
        { value: lot.year, text: 'Год' },
        { value: lot.engine, text: 'Двигатель, см' },
        { value: lot.evaluation, text: 'Оценка' },
        { value: lot.body, text: 'Кузов' },
        { value: lot.transmission, text: 'Трансмиссия' },
        { value: lot.drive, text: 'Привод' },
    ];
    let country: Tcountry = 'japan';
    for (const key in brandList) {
        const el = brandList[key];
        if (el.brand === lot.brand) {
            country = el.loc;
        }
    }

    return (
        <Right>
            <RightItemTop>
                <Title>{lot.name}</Title>
                <TitleSub>Дата торгов: не назначена</TitleSub>
            </RightItemTop>

            <RightItemMiddle>
                {infoObj.map(el => (
                    <RightItemMiddleItem key={el.text} text={`${el.value}`} title={el.text} />
                ))}
            </RightItemMiddle>

            <RightItemBottom>
                <RightItemMiddleItem
                    text={`${lot.price} ¥`}
                    title={`Стоимость в ${country === 'japan' ? 'Японии' : 'Корее'}`}
                />
                <RightItemMiddleItem
                    text={`${Math.round(lot.price * 12.3 * 0.78)} ₽`}
                    title="Полная пошлина"
                />
                <ButtonBox>
                    <ArrowButton
                        type="dark"
                        content="ПОДРОБНЫЙ РАСЧЕТ"
                        style={{ border: `1px solid ${$gray}` }}
                    />
                    <ArrowButton type="white" content="БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ" />
                </ButtonBox>
                <MiniText>
                    Стоимость является ориентировочной, исключительно в ознакомительных целях,
                    включая все расходы в г.Владивосток. Расчёт может быть не корректным. Для более
                    точного расчета и по всем вопросам - оставьте заявку на бесплатную консультацию,
                    наши специалисты с радостью вам помогут во всем разобраться!
                </MiniText>
            </RightItemBottom>
        </Right>
    );
};
