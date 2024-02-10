import React from 'react';
import style from '../style';
import { Tprops } from '..';
import { Control, UseFormRegister } from 'react-hook-form';
import {
    TconcatQuestion,
    Tnames,
    TuserQuetion,
    TuserQuetionCall,
} from '@locTypes/forms/userQuestion';
import Input from '@components/helpers/form/input/index';
import Select from '@components/helpers/form/select/index';
import { TwindowSize } from 'ts/hooks/useWindowSizeCheck';

const selectCityArr = ['Авто из Японии или из Кореи?', 'Япония', 'Корея'];
const connectionArr = ['Как с Вами связаться?', 'WhatsApp', 'Перезвонить'];

interface TlocTprops extends Tprops {
    control: Control<TuserQuetion | TuserQuetionCall, any>;
}

export default ({ type, control }: TlocTprops) => {
    const { InputLine, size } = style();
    if (type === 'othersQuestions') {
        return (
            <InputLine>
                <Input name={'city'} control={control} required placeholder="Ваш город" />
                <Select<TconcatQuestion, Tnames>
                    control={control}
                    values={connectionArr}
                    name="connection"
                    style={styleObjGen(size)}
                />
            </InputLine>
        );
    }
    return (
        <InputLine>
            <Select<TconcatQuestion, Tnames>
                control={control}
                values={selectCityArr}
                name="country"
                style={styleObjGen(size)}
            />
            <Select<TconcatQuestion, Tnames>
                control={control}
                values={connectionArr}
                name="connection"
                style={styleObjGen(size)}
            ></Select>
        </InputLine>
    );
};

function styleObjGen(size: TwindowSize) {
    return !size.isMobile ? { flex: '0 0 calc(50% - 4px)', maxWidth: 'calc(50% - 4px)' } : {};
}
