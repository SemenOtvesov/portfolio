import React from "react";
import InputGroupe from "@js/components/componentModules/formElements/input/inputGroupe";
import GlobalInput from "@js/components/componentModules/formElements/input/globalInput";
import RightDie from "@js/components/componentModules/formElements/input/rightDie";
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { TcontactForm, TcontactNameInputs } from "./contactFormGeneric";

interface Tprops extends React.HTMLAttributes<HTMLInputElement>{
    nameInput: TcontactNameInputs,
    regExpComparison: {[a: string]: RegExp}
    register: UseFormRegister<TcontactForm>
    errors:  FieldErrors<TcontactForm>,
    watch: UseFormWatch<TcontactForm>
}

export default ({nameInput, regExpComparison, register, errors, watch, ...props}: Tprops)=>{
    return (
        <InputGroupe>
            <GlobalInput<TcontactForm, TcontactNameInputs>
                nameInput={nameInput}
                regExp={regExpComparison[nameInput]}
                register={register}
                requiredText={true}
                {...props}
            />
            <RightDie 
                error={errors[nameInput]}
                value={watch(nameInput)}
                className="rentForm__item-input-rightDie"
            />
        </InputGroupe>
    )
}