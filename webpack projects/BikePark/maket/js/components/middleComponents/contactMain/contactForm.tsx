import React from "react";
import { useForm } from "react-hook-form";
import { TcontactForm } from "./contactFormGeneric";
import ContactInput from "./contactInput";
import { nameRegExp, phoneRegExp } from "@js/constants";
import ContactCheckBox from "./contactCheckBox";
import contactFormSubmit from "@js/mainFunctions/events/submit/contactFormSubmit/contactFormSubmit";

type Tprops = {

}
const regExpComparison = {
    name: nameRegExp,
    phone: phoneRegExp
}
export default ({}: Tprops)=>{
    const {register, formState: {errors}, handleSubmit, control, watch, reset} = useForm<TcontactForm>()
    return (
        <form onSubmit={handleSubmit((data)=>contactFormSubmit({data, reset}))} className="contact__item-right">
            <div className="contact__item-section-title mbHidden">Оставить заявку</div>

            <div className="contact__item-section-text bold">Остались вопросы? Свяжитесь с нами</div>

            <ContactInput
                nameInput='name'
                regExpComparison={regExpComparison}
                register={register}
                errors={errors}
                watch={watch}
                placeholder="Имя*"
                className="contact__form-input inputArea"
            />
            <ContactInput
                nameInput='phone'
                regExpComparison={regExpComparison}
                register={register}
                errors={errors}
                watch={watch}
                placeholder="Номер телефона*"
                className="contact__form-input inputArea"
            />

            <div className="contact__form-checkbox-box">
                <ContactCheckBox control={control}/>
                <div className="contact__form-checkbox-text">Согласие на обработку персональных данных</div>
            </div>

            <button type='submit' className="contact__form-button">Отправить</button>
        </form>
    )
}