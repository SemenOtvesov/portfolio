import React from 'react';
import style from '../style';
import Select from '@components/helpers/redBlurContainer/select/index';
import { Control } from 'react-hook-form';
import { TsettingsForm } from '@locTypes/forms/settingsForm';
import useAppSelector from 'ts/hooks/useAppSelector';

type Tprops = { control: Control<TsettingsForm, any> };

export default ({ control }: Tprops) => {
    const { size } = style();
    const list = useAppSelector(state => state.carState.activeModelList);
    const bodyList: string[] = [];
    list.forEach(el => !bodyList.includes(el.body) && bodyList.push(el.body));

    return (
        <Select
            control={control}
            title="Кузов"
            values={['Все', ...bodyList]}
            name="body"
            pd10={size.isDesktop ? false : true}
            boxProps={{ style: { width: '100%' } }}
        />
    );
};
