'use client';
import RedBlurContainer from '@ts/components/helpers/redBlurContainer';
import { useForm } from 'react-hook-form';
import TopLine from './components/topLine';
import MiddleLine from './components/middleLine';
import BottomLine from './components/bottomLine';
import { TsettingsForm } from '@locTypes/forms/settingsForm';
import onSubmit from './onSubmit';
import useAppDispatch from 'ts/hooks/useAppDispatch';

export default () => {
    const dispatch = useAppDispatch();
    const { control, handleSubmit, setValue } = useForm<TsettingsForm>({
        mode: 'onChange',
        defaultValues: {
            brand: 'Все',
            model: 'Все',
            body: 'Все',
            auction: 'Все',
            yearOfProductionStart: 2000,
            yearOfProductionEnd: new Date().getFullYear(),
            priseStart: 0,
            priseEnd: 100000,
            mileageStart: 0,
            mileageEnd: 100000,
            engineCapacityStart: 0,
            engineCapacityEnd: 10,
            evaluation: 'Все',
        },
    });
    return (
        <form onSubmit={handleSubmit(data => onSubmit({ data, dispatch }))}>
            <RedBlurContainer style={{ flexDirection: 'column' }}>
                <TopLine control={control} setValue={setValue}></TopLine>
                <MiddleLine control={control}></MiddleLine>
                <BottomLine control={control} setValue={setValue}></BottomLine>
            </RedBlurContainer>
        </form>
    );
};
