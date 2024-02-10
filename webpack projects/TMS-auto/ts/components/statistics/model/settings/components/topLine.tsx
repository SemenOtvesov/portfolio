import React from 'react';
import Brand from '@components/helpers/calculationUser/brand';
import SelectModel from '@components/helpers/calculationUser/selectModel';
import Select from '@components/helpers/redBlurContainer/select/index';
import { Control, UseFormSetValue } from 'react-hook-form';
import style from '../style';
import { TsettingsForm } from '@locTypes/forms/settingsForm';
import { TwindowSize } from 'ts/hooks/useWindowSizeCheck';
import SelectBody from './selectBody';

type Tprops = { control: Control<TsettingsForm, any>; setValue: UseFormSetValue<TsettingsForm> };

export const inputProps = (size: TwindowSize) => {
    return size.isDesktop ? {} : { style: { padding: 10 } };
};
export default ({ control, setValue }: Tprops) => {
    const { size, ItemContainer } = style();
    return (
        <ItemContainer>
            <Brand
                control={control}
                setValue={setValue}
                name="brand"
                pd10={size.isDesktop ? false : true}
                style={{ width: '100%' }}
            />
            <SelectModel
                control={control}
                setValue={setValue}
                nameControl="model"
                size={size}
                pd10={size.isDesktop ? false : true}
                style={{ width: '100%' }}
            />
            <SelectBody control={control} />
            <Select
                control={control}
                setValue={setValue}
                title="Аукцион"
                values={['Все']}
                name="auction"
                pd10={size.isDesktop ? false : true}
                boxProps={{ style: { width: '100%' } }}
            />
        </ItemContainer>
    );
};
