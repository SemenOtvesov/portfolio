import React, { useEffect, useState } from 'react';
import Select from '@ts/components/helpers/form/select/index';
import useAppSelector from 'ts/hooks/useAppSelector';
import { Control, FieldPath, FieldValues, UseFormSetValue } from 'react-hook-form';
import { TwindowSize } from 'ts/hooks/useWindowSizeCheck';
import style from './style';
import useAppDispatch from 'ts/hooks/useAppDispatch';
import setActiveModelThunk from '@store/carState/asyncThunk/setActiveModelThunk';

interface Tprops<T extends FieldValues, N> extends React.HtmlHTMLAttributes<HTMLDivElement> {
    nameControl: N;
    control: Control<T, any>;
    size: TwindowSize;
    setValue?: UseFormSetValue<T>;
    pd10?: boolean;
}

function select<T extends FieldValues, N extends FieldPath<T>>({
    control,
    nameControl,
    size,
    pd10,
    setValue,
    ...props
}: Tprops<T, N>) {
    const { InputBox, InputPreview } = style();

    const activeBrandObj = useAppSelector(state => state.carState.activeBrandObj);
    const activeBrandName = useAppSelector(state => state.carState.activeBrandName);
    const activeModel = useAppSelector(state => state.carState.activeModel);
    const [modelList, setModelList] = useState<string[]>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!activeBrandObj) return;
        let list = activeBrandObj.map(el => el.name);
        list = list.filter((item, index) => {
            return list.indexOf(item) === index;
        });
        setModelList(list);
    }, [activeBrandObj]);

    return (
        <InputBox {...props}>
            <InputPreview>Модель</InputPreview>
            <Select
                values={['Все', ...modelList]}
                name={nameControl}
                initValue={`${activeBrandName} ${activeModel}`}
                control={control}
                setValue={() => {}}
                pd10={pd10 || size.isMobile}
                setFn={(model: string) => dispatch(setActiveModelThunk(model))}
            />
        </InputBox>
    );
}

export default select;
