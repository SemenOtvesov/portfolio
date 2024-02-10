'use client';
import { Control, FieldPath, FieldValues, UseFormSetValue } from 'react-hook-form';
import style from './style';
import Select from '@ts/components/helpers/form/select/index';

interface TpropsLoc<T extends FieldValues, N> extends React.HtmlHTMLAttributes<HTMLSelectElement> {
    title: string;
    values: string[];
    name: N;
    control: Control<T, any>;
    setValue: UseFormSetValue<T>;
    pd10?: boolean;
    boxProps?: React.HtmlHTMLAttributes<HTMLDivElement>;
    initValue?: string;
    setFn?: (value: any) => void;
}

function select<T extends FieldValues, N extends FieldPath<T>>({
    title,
    values,
    name,
    control,
    setFn,
    pd10,
    boxProps,
    initValue,
    setValue,
    ...props
}: TpropsLoc<T, N>) {
    const { InputBox, InputPreview, size } = style();
    return (
        <InputBox {...boxProps}>
            <InputPreview>{title}</InputPreview>
            <Select
                values={values}
                name={name}
                initValue={initValue}
                control={control}
                setValue={setValue}
                setFn={value => setFn && setFn(value)}
                pd10={pd10 || size.isMobile}
                {...props}
            />
        </InputBox>
    );
}

export default select;
