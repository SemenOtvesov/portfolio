import { MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import style from './style';
import { Control, Controller, FieldPath, FieldValues, UseFormSetValue } from 'react-hook-form';

interface TpropsLoc<T extends FieldValues, N> extends React.HtmlHTMLAttributes<HTMLSelectElement> {
    name: N;
    values: string[];
    control: Control<T, any>;
    setValue: UseFormSetValue<T>;
    setFn?: (a: any) => void;
    pd10?: boolean;
    initValue?: string;
}

function select<T extends FieldValues, N extends FieldPath<T>>({
    values,
    control,
    name,
    setFn,
    pd10,
    initValue,
    setValue,
    ...props
}: TpropsLoc<T, N>) {
    const { SelectSx } = style(pd10);
    const [active, setActive] = useState<string>(initValue || values[0]);

    useEffect(() => {
        setValue && setValue(name, active);
    }, [active]);

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <Select sx={SelectSx} value={active} {...props}>
                    {values.map(value => (
                        <MenuItem
                            onClick={() => {
                                setActive(value);
                                field.onChange(value);
                                setFn && setFn(value);
                            }}
                            key={value}
                            value={value}
                        >
                            {value}
                        </MenuItem>
                    ))}
                </Select>
            )}
        />
    );
}
export default select;
