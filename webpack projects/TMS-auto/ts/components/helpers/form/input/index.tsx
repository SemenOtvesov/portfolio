import { Input, InputProps } from '@mui/material';
import React from 'react';
import style from './style';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';

interface Tprops<T extends FieldValues, N extends FieldPath<T>> extends InputProps {
    name: N;
    control: Control<T, any>;
    textCenter?: boolean;
}

function index<T extends FieldValues, N extends FieldPath<T>>({
    name,
    control,
    textCenter,
    ...props
}: Tprops<T, N>) {
    const { InputSx } = style(textCenter);
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <Input
                    onChange={e => field.onChange(e.target.value)}
                    sx={InputSx}
                    {...props}
                    value={field.value}
                />
            )}
        />
    );
}
export default index;
