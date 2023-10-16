import React from "react";

export default ()=>{
    return <div className="contact wrapper-component">
        <div className="wrapper-component-title">Контакты</div>

        <div className="contact__item">
            <div className="contact__item-left">

                <div className="contact__item-section">
                    <div className="contact__item-section-title">Номер телефона</div>
                    <div className="contact__item-section-text bold">999 999 999 </div>
                </div>
                
                <div className="contact__item-section">
                    <div className="contact__item-section-title">E-mail</div>
                    <div className="contact__item-section-text">info@bikerental.ae</div>
                </div>

                <div className="contact__item-section">
                    <div className="contact__item-section-title">Адрес шоурума</div>
                    <div className="contact__item-section-text">Страна А, город Б, ул. АААА</div>
                </div>

            </div>
            <form className="contact__item-right">
                
                <div className="contact__item-section-title mbHidden">Оставить заявку</div>

                <div className="contact__item-section-text bold">Остались вопросы? Свяжитесь с нами</div>

                <input type="text" className="contact__form-input inputArea" placeholder="Имя*"/>
                <input type="text" className="contact__form-input inputArea" placeholder="Номер телефона*"/>

                <div className="contact__form-checkbox-box">
                    <div className="contact__form-checkbox"><span></span></div>
                    <div className="contact__form-checkbox-text">Согласие на обработку персональных данных</div>
                </div>

                <button type='submit' className="contact__form-button">Отправить</button>
            </form>
        </div>

        <div className="contact__item"  id="aspectSidesRev" data-aspect="0.51">
            <div className="contact__map"></div>
        </div>
    </div>
}