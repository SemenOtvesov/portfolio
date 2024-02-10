import React from 'react';
import { Tprops } from '..';
import style from '../style';
import { UseFormRegister } from 'react-hook-form';
import { TuserQuetion, TuserQuetionCall } from '@locTypes/forms/userQuestion';

interface TlocTypes extends Tprops {
    register: UseFormRegister<TuserQuetion | TuserQuetionCall>;
}

export default ({ type, register }: TlocTypes) => {
    const { InputLine, Textarea } = style();
    if (type !== 'othersQuestions') {
        return (
            <InputLine>
                <Textarea
                    {...register('info')}
                    placeholder="Укажите всю информацию по желаемому автомобилю"
                ></Textarea>
            </InputLine>
        );
    }
    return <></>;
};
