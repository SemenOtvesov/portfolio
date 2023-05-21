import React from "react";

export default ()=>{
    let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
    );
    return <>
        <div className="intro designersIntro">
            <div className="intro__background">
                <picture className='loading-img' data-image-type='image' data-local="intro"  data-image-name="designersIntro">
                    <div id='equalSidesRev' className='img-mask'/>
                    <source srcSet=''/>
                    <img src='' alt='' />
                </picture>
            </div>
        </div>
        <div className="scrollBox designersScrollBox">

                <div className="greeting__title-box">
                    <div className="greeting__title-top">КОМПАНИЯ furMarket СТРЕМИТСЯ К РАБОТЕ С ДИЗАЙНЕРАМИ И АРХИТЕКТОРАМИ.</div>
                    <div className="greeting__title-average">ДАВАЙТЕ ЗНАКОМИТЬСЯ!</div>
                    <div className="greeting__title-bottom">
                        <div className="greeting__title-bottom-line"></div>
                        <div className="greeting__title-bottom-img">
                            <picture data-image-type='logo' className="loading-img">
                                <div id="equalSidesRev" className="img-mask"></div>
                                <source srcSet=""/>
                                <img src="" alt="" />
                            </picture>
                        </div>
                    </div>
                </div>

                <div className="designersAdvantages__box">
                    <div className="designersAdvantages__title-box">
                        <div className="designersAdvantages__title">Почему выгодно работать именно с нами? Мы делаем мебель, которая точно понравится вашим заказчикам.</div>
                        <div className="designersAdvantages__title">Она очень качественная и стильно выглядит. Ко всему прочему мы предлагаем достойный сервис и гарантируем сроки производства.</div>
                    </div>

                    <div className="designersAdvantages__item">
                        <div className="designersAdvantages__item-left">
                            <picture data-image-type='image' data-local='advantages' data-image-name='advantages1' className="loading-img">
                                <div id="equalSidesRev" className="img-mask"></div>
                                <source srcSet=""/>
                                <img src="" alt="" />
                            </picture>
                        </div>
                        <div className="designersAdvantages__item-right">
                            <div className="designersAdvantages__item-title">КАЧЕСТВО</div>
                            <div className="designersAdvantages__item-text">furMarket производит самую качественную в России мебель на металлокаркасе? Мы более 20 лет изготавливаем мебель на металлокаркасе. Наше отношение к качеству бескомпромиссно. Поэтому мы даем гарантию в 10 лет на наши изделия из металла</div>
                        </div>
                    </div>

                    <div  className={scrollWidth > 768 ? "designersAdvantages__item revers" : 'designersAdvantages__item'}>
                        <div className="designersAdvantages__item-left">
                            <picture data-image-type='image' data-local='advantages' data-image-name='advantages2' className="loading-img">
                                <div id="equalSidesRev" className="img-mask"></div>
                                <source srcSet=""/>
                                <img src="" alt="" />
                            </picture>
                        </div>
                        <div className="designersAdvantages__item-right">
                            <div className="designersAdvantages__item-title">ДИЗАЙН</div>
                            <div className="designersAdvantages__item-text">Мы сами разрабатываем все свои изделия, всю свою продукцию. Она современно выглядит, технологична, надежна и удобна. Современный офис и furMarket — это слова-синонимы.</div>
                        </div>
                    </div>

                    <div className="designersAdvantages__item">
                        <div className="designersAdvantages__item-left">
                            <picture data-image-type='image' data-local='advantages' data-image-name='advantages3' className="loading-img">
                                <div id="equalSidesRev" className="img-mask"></div>
                                <source srcSet=""/>
                                <img src="" alt="" />
                            </picture>
                        </div>
                        <div className="designersAdvantages__item-right">
                            <div className="designersAdvantages__item-title">ПРОИЗВОДСТВО</div>
                            <div className="designersAdvantages__item-text">furMarket располагает самым развитым производством мебели на металлокаркасе. Мы можем реализовать любые проекты в самые сжатые сроки. Собственное производство - это надежность поставок и гарантия качества</div>
                        </div>
                    </div>

                    <div className={scrollWidth > 768 ? "designersAdvantages__item revers" : 'designersAdvantages__item'}>
                        <div className="designersAdvantages__item-left">
                            <picture data-image-type='image' data-local='advantages' data-image-name='advantages4' className="loading-img">
                                <div id="equalSidesRev" className="img-mask"></div>
                                <source srcSet=""/>
                                <img src="" alt="" />
                            </picture>
                        </div>
                        <div className="designersAdvantages__item-right">
                            <div className="designersAdvantages__item-title">МОДЕЛИРОВАНИЕ</div>
                            <div className="designersAdvantages__item-text">Если есть потребность в визуализациях, мы предоставляем 3D-модели нашей продукции. Обращайтесь к менеджеру вашего проекта</div>
                        </div>
                    </div>

                    <div className="designersAdvantages__item">
                        <div className="designersAdvantages__item-left">
                            <picture data-image-type='image' data-local='advantages' data-image-name='advantages5' className="loading-img">
                                <div id="equalSidesRev" className="img-mask"></div>
                                <source srcSet=""/>
                                <img src="" alt="" />
                            </picture>
                        </div>
                        <div className="designersAdvantages__item-right">
                            <div className="designersAdvantages__item-title">РЕАЛИЗАЦИЯ</div>
                            <div className="designersAdvantages__item-text">Возможность использования заказных цветов ЛДСП (Эггер) и цветов металлокаркаса (по RAL)</div>
                        </div>
                    </div>

                </div>
        </div>
    </>
}