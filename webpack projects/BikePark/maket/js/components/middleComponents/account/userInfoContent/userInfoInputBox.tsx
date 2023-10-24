import React from "react";
import GlobalInput from "@componentModules/formElements/input/globalInput";
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import RightDie from "@componentModules/formElements/input/rightDie"
import InputGroupe from "@componentModules/formElements/input/inputGroupe"
import { TuserInfoForm, TuserInfoNameInputs } from "./formTypes";

import { addressRegExp, mailRegExp, nameRegExp, passRegExp, phoneRegExp } from "@js/constants";

interface Tprops {
    nameInput: TuserInfoNameInputs,
    register: UseFormRegister<TuserInfoForm>,
    edit: boolean,
    errors:  FieldErrors<TuserInfoForm>,
    watch: UseFormWatch<TuserInfoForm>
}

const regExpComparison = {
    name: nameRegExp,
    mail: mailRegExp,
    pass: passRegExp,
    phone: phoneRegExp,
    adress: addressRegExp,
}
const nameBoxComparison = {
    name: 'Имя',
    mail: 'E-mail',
    pass: 'Пароль',
    phone: 'Номер телефона',
    adress: 'Адрес доставки'
}

export default ({nameInput, register, edit, errors, watch}: Tprops)=>{
    return (
        <div className="delivery__item-card">
            <div className="delivery__item-card-title">{nameBoxComparison[nameInput]}</div>
            
            <InputGroupe>
                <GlobalInput<TuserInfoForm, TuserInfoNameInputs>
                    nameInput={nameInput}
                    regExp={regExpComparison[nameInput]}
                    register={register}
                    requiredText={false}
                    className={`delivery__item-card-text account__info-input ${!edit ? 'disabled' : ''}`}
                    disabled={!edit && true}
                />
                <RightDie 
                    error={errors[nameInput]}
                    value={watch(nameInput)}
                    className={`rentForm__item-input-rightDie ${!edit ? 'disabled' : ''}`}
                />
            </InputGroupe>
        </div>
    )
}