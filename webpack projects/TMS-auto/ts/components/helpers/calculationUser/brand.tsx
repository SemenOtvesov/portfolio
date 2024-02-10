import React from 'react';
import useAppSelector from 'ts/hooks/useAppSelector';
import useAppDispatch from 'ts/hooks/useAppDispatch';
import setActiveBrand from '@store/carState/asyncThunk/setActiveBrandThunk';
import Select from '@components/helpers/redBlurContainer/select/index';
import { Control, FieldPath, FieldValues, UseFormSetValue } from 'react-hook-form';

interface TpropsLoc<T extends FieldValues, N> extends React.HtmlHTMLAttributes<HTMLDivElement> {
    name: N;
    control: Control<T, any>;
    setValue: UseFormSetValue<T>;
    pd10?: boolean;
}

function select<T extends FieldValues, N extends FieldPath<T>>({
    control,
    name,
    pd10,
    setValue,
    ...props
}: TpropsLoc<T, N>) {
    const dispatch = useAppDispatch();
    const brandObj = useAppSelector(state => state.carState.brandList);
    const brandList: string[] = [];
    const activeBrandName = useAppSelector(state => state.carState.activeBrandName);

    for (const key in brandObj) {
        const item = brandObj[key];
        brandList.push(item.brand);
    }

    return (
        <Select
            title="Марка"
            values={['Все', ...brandList]}
            initValue={activeBrandName}
            name={name}
            control={control}
            setValue={setValue}
            setFn={value => dispatch(setActiveBrand(value))}
            pd10={pd10}
            boxProps={props}
        />
    );
}

export default select;
