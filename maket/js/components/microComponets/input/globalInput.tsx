import React from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

interface Tprops<Tform extends FieldValues, TinputNames extends Path<Tform>>
    extends React.InputHTMLAttributes<HTMLInputElement> {
    nameInput: TinputNames;
    requiredText: string | boolean;
    regExp: RegExp;
    register: UseFormRegister<Tform>;
}

function globalInput<Tform extends FieldValues, TinputNames extends Path<Tform>>({
    nameInput,
    requiredText,
    regExp,
    register,
    ...props
}: Tprops<Tform, TinputNames>) {
    return (
        <>
            <input
                {...register(nameInput, {
                    required: requiredText,
                    pattern: regExp,
                })}
                {...props}
                className={`input ${props.className ? props.className : ''}`}
            />
        </>
    );
}
export default globalInput;
