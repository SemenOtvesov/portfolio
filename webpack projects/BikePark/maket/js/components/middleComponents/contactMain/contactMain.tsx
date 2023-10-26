import React from "react";
import ContactForm from "./contactForm";

export default ()=>{
    return <div className="contact wrapper-component">
        <div className="wrapper-component-title">Контакты</div>

        <div className="contact__item">
            <div className="contact__item-left">

                <div className="contact__item-section">
                    <div className="contact__item-section-title">Номер телефона</div>
                    <div className="contact__item-section-text bold">+971 52 563 4064</div>
                </div>
                
                <div className="contact__item-section">
                    <div className="contact__item-section-title">E-mail</div>
                    <div className="contact__item-section-text">info@bikerental.ae</div>
                </div>

                <div className="contact__item-section">
                    <div className="contact__item-section-title">Адрес шоурума</div>
                    <div className="contact__item-section-text">ОАЭ, Дубай, Westar Reflections Driveway</div>
                </div>

            </div>
            <ContactForm/>
        </div>

        <div className="contact__item">
            <iframe className="contact__map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1277.9442052955885!2d55.21092795616358!3d25.04859313719435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d2a3df45147%3A0xcc7d73599816cb58!2sAl%20Jaziah%20building!5e0!3m2!1sru!2sru!4v1697977212049!5m2!1sru!2sru" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
}