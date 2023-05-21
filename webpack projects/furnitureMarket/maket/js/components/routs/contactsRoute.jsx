import React from "react";

export default ()=>{
    return <>
        <div className="contacts__box">
            <div className="contacts__left">
                <div className="contacts__title">КОНТАКТЫ</div>

                <div className="contacts__left-item">
                    <div className="contacts__left-item-title">Шоу-рум furMarket Москва</div>
                    <div className="contacts__left-item-module">
                        <div className="contacts__left-item-module-title">АДРЕС</div>
                        <div className="contacts__left-item-module-text orange">г. Москва, ул. Проспект Мира, д. 102с30</div>
                    </div>
                    <div className="contacts__left-item-module">
                        <div className="contacts__left-item-module-title">РЕЖИМ РАБОТЫ</div>
                        <div className="contacts__left-item-module-text">Обработка заказов:</div>
                        <div className="contacts__left-item-module-text">Пн. — Пт.: с 10:00 до 19:45</div>
                        <div className="contacts__left-item-module-text">Сб. — Вс.: с 11:00 до 19:45</div>
                    </div>
                    <div className="contacts__left-item-module">
                        <div className="contacts__left-item-module-title">ТЕЛЕФОН</div>
                        <div className="contacts__left-item-module-text"><a href="tel:+79999999999">+7 (999) 999-99-99</a></div>
                    </div>
                    <div className="contacts__left-item-module">
                        <div className="contacts__left-item-module-title">E-MAIL</div>
                        <div className="contacts__left-item-module-text"><a href="mailto:sales@furnitureMarket.ru">sales@furnitureMarket.ru</a></div>
                    </div>
                    <div className="contacts__left-item-text-box">
                        <div className="contacts__left-item-text">Шоу-рум компании находится в г. Москва.</div>
                        <div className="contacts__left-item-text">Обязательно приходите к нам на чашку ароматного кофе.</div>
                    </div>
                </div>

                <div className="contacts__left-item">
                    <div className="contacts__left-item-title">Шоу-рум furMarket Санкт-Петербург</div>
                    <div className="contacts__left-item-module">
                        <div className="contacts__left-item-module-title">АДРЕС</div>
                        <div className="contacts__left-item-module-text orange">г. Санкт-Петербург, ул. Бармалеева д. 1</div>
                    </div>
                    <div className="contacts__left-item-module">
                        <div className="contacts__left-item-module-title">РЕЖИМ РАБОТЫ</div>
                        <div className="contacts__left-item-module-text">Обработка заказов:</div>
                        <div className="contacts__left-item-module-text">Пн. — Вс.: с 10:00 до 19:45</div>
                    </div>
                    <div className="contacts__left-item-module">
                        <div className="contacts__left-item-module-title">ТЕЛЕФОН</div>
                        <div className="contacts__left-item-module-text"><a href="tel:+79999999997">+7 (999) 999-99-97</a></div>
                    </div>
                    <div className="contacts__left-item-module">
                        <div className="contacts__left-item-module-title">E-MAIL</div>
                        <div className="contacts__left-item-module-text"><a href="mailto:sales@furnitureMarket.ru">sales@furnitureMarket.ru</a></div>
                    </div>
                </div>

            </div>
            <div className="contacts__right">
                <div id="equalSides" className="map-responsive">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.58072620707!2d37.635491077427595!3d55.800517973101925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b535efdaa5ca1d%3A0xe983c336be2a6f7f!2z0L_RgC3RgiDQnNC40YDQsCwgMTAy0YEzMCwg0JzQvtGB0LrQstCwLCAxMjk2MjY!5e0!3m2!1sru!2sru!4v1684663842175!5m2!1sru!2sru" 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    </>
}