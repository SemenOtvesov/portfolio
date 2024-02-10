'use client';
import RedBlurContainer from '@ts/components/helpers/redBlurContainer';
import style from './style';
import ArrowButton from '@ts/components/helpers/arrowButton';
import { useForm } from 'react-hook-form';
import { TcalcCarForm } from '@locTypes/forms/calcCarForm';
import onSubmit from './onSubmit';
import SelectModel from './selectModel';
import DoubleInput from '../redBlurContainer/doubleInput/index';
import Brand from './brand';
import { useRouter } from 'next/navigation';
import useAppSelector from 'ts/hooks/useAppSelector';

export default () => {
    const { Title, InputList, size } = style();
    const router = useRouter();
    const brandList = useAppSelector(state => state.carState.brandList);

    const { control, handleSubmit, reset } = useForm<TcalcCarForm>({
        mode: 'onChange',
        defaultValues: {
            brand: 'Все',
            model: 'Все',
            yearStart: 2000,
            yearEnd: new Date().getFullYear(),
        },
    });

    return (
        <form onSubmit={handleSubmit(data => onSubmit({ data, router, brandList, reset }))}>
            <RedBlurContainer style={{ flexDirection: 'column' }}>
                <Title>Рассчитайте автомобиль самостоятельно</Title>
                <InputList>
                    <Brand control={control} name="brand" setValue={() => {}} />
                    <SelectModel control={control} size={size} nameControl="model" />
                    <DoubleInput
                        title={'Год производства'}
                        input1={{
                            name: 'yearStart',
                            type: 'number',
                            startText: 'от',
                            endText: 'г',
                        }}
                        input2={{ name: 'yearEnd', type: 'number', startText: 'от', endText: 'г' }}
                        control={control}
                    />
                </InputList>
                <ArrowButton type="white" content="ПОКАЗАТЬ" />
            </RedBlurContainer>
        </form>
    );
};
