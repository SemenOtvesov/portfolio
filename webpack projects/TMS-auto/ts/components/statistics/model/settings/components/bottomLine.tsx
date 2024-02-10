import React from 'react';
import DoubleInput from '@components/helpers/redBlurContainer/doubleInput/index';
import Select from '@components/helpers/redBlurContainer/select/index';
import { Control, UseFormSetValue } from 'react-hook-form';
import style from '../style';
import styleButton from '@components/helpers/button/style';
import { TsettingsForm } from '@locTypes/forms/settingsForm';
import { inputProps } from './topLine';

type Tprops = { control: Control<TsettingsForm, any>; setValue: UseFormSetValue<TsettingsForm> };

export default ({ control, setValue }: Tprops) => {
    const { ItemContainer, size } = style();
    const { RedButton } = styleButton();
    return (
        <ItemContainer>
            <DoubleInput
                title="Объем двигателя"
                input1={{
                    name: 'engineCapacityStart',
                    type: 'number',
                    startText: 'от',
                    endText: 'л',
                    props: inputProps(size),
                }}
                input2={{
                    name: 'engineCapacityEnd',
                    type: 'number',
                    startText: 'до',
                    endText: 'л',
                    props: inputProps(size),
                }}
                control={control}
                style={{ flex: '1 1', width: '100%' }}
            />
            <Select
                title="Оценка"
                values={['Все']}
                control={control}
                setValue={setValue}
                name="evaluation"
                pd10={size.isDesktop ? false : true}
                boxProps={{ style: { width: '100%' } }}
            />
            <RedButton type="submit" style={{ flex: '1 1', padding: size.isDesktop ? 16 : 12 }}>
                ПОКАЗАТЬ
            </RedButton>
        </ItemContainer>
    );
};
