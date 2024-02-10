import React from 'react';
import DoubleInput from '@components/helpers/redBlurContainer/doubleInput/index';
import { Control } from 'react-hook-form';
import style from '../style';
import { TsettingsForm } from '@locTypes/forms/settingsForm';
import { inputProps } from './topLine';

type Tprops = { control: Control<TsettingsForm, any> };

export default ({ control }: Tprops) => {
    const { ItemContainer, size } = style();
    return (
        <ItemContainer>
            <DoubleInput
                title="Год производства"
                input1={{
                    name: 'yearOfProductionStart',
                    type: 'number',
                    startText: 'от',
                    endText: 'г',
                    props: inputProps(size),
                }}
                input2={{
                    name: 'yearOfProductionEnd',
                    type: 'number',
                    startText: 'до',
                    endText: 'г',
                    props: inputProps(size),
                }}
                control={control}
                style={{ flex: '1 1', width: '100%' }}
            />
            <DoubleInput
                title="Стоимость"
                input1={{
                    name: 'priseStart',
                    type: 'number',
                    startText: 'от',
                    endText: '₽',
                    props: inputProps(size),
                }}
                input2={{
                    name: 'priseEnd',
                    type: 'number',
                    startText: 'до',
                    endText: '₽',
                    props: inputProps(size),
                }}
                control={control}
                style={{ flex: '1 1', width: '100%' }}
            />
            <DoubleInput
                title="Пробег"
                input1={{
                    name: 'mileageStart',
                    type: 'number',
                    startText: 'от',
                    endText: 'км',
                    props: inputProps(size),
                }}
                input2={{
                    name: 'mileageEnd',
                    type: 'number',
                    startText: 'до',
                    endText: 'км',
                    props: inputProps(size),
                }}
                control={control}
                style={{ flex: '1 1', width: '100%' }}
            />
        </ItemContainer>
    );
};
