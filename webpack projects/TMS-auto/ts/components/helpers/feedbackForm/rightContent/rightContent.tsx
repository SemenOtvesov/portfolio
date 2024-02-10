import React from 'react';
import style from '../style';
import { Tprops } from '..';
import InputLine2 from './InputLine2';
import InputLine3 from './InputLine3';
import Btn from './btn';
import { useForm } from 'react-hook-form';
import { TuserQuetion, TuserQuetionCall } from '@locTypes/forms/userQuestion';
import onChange from '../onChange';
import Input from '@components/helpers/form/input/index';

export default ({ type }: Tprops) => {
    const { Right, InputLine } = style();
    const { register, handleSubmit, control, reset } = useForm<TuserQuetion | TuserQuetionCall>({
        mode: 'onChange',
    });

    return (
        <Right onSubmit={handleSubmit(data => onChange({ data, reset }))}>
            <InputLine>
                <Input name="name" control={control} required placeholder="Имя"></Input>
                <Input
                    name="phone"
                    control={control}
                    required
                    type="number"
                    placeholder="Телефон"
                ></Input>
            </InputLine>
            <InputLine2 type={type} control={control} />
            <InputLine3 type={type} register={register} />
            <Btn type={type} />
        </Right>
    );
};
