import React from "react";
export default ()=>{
    let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
    );
    if(scrollWidth > 768){
        return <>
            <div data-parent-height className="company__item">
                <div className="company__item-left">
                    <div className="company__item-title">ДОБРО ПОЖАЛОВАТЬ В FurMarket</div>
                    <div className="company__item-text">
                        <p>Мы глубоко убеждены, сегодня вопросу качества уделяется слишком мало внимания. Современное общество пока до конца не осознало: низкие цены и соответствующее качество мебели ведут к варварскому истреблению лесного массива и, как следствие, вызывают огромные экологические проблемы, растущие в геометрической прогрессии. Нельзя не принимать во внимание что именно, каким образом и насколько долго мы используем.</p>
                        <p>Утилизация стола из ДСП, где достаточное количество вредного вещества, – формальдегида, и утилизация стола на металлокаркасе, при равном сроке службы, отличается по стоимости почти в 3 раза, так как металл – самый пригодный к утилизации материал. Однако, если срок службы некачественного изделия будет ниже качественного хотя бы в 5 раз, а чаще намного больше, то для удовлетворения одной и той же потребности понадобится больше древесины в 15 раз и, соответственно, во столько же раз увеличатся затраты на утилизацию!</p>
                        <p>Наша страна богата природными ресурсами, но даже она не может позволить себе такой халатной расточительности. Нам всем нужна – ПРЕЗУМПЦИЯ КАЧЕСТВА!</p>
                    </div>
                </div>
                <div data-child-height className="company__item-right">
                    <picture id="equalSidesRev" className="company__item-image" data-image-type="image" data-local='company' data-image-name='company_1'>
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=""/>
                        <img src="" alt="" />
                    </picture>
                </div>
            </div>

            <div data-parent-height className="company__item bgOrange revers">
                <div data-child-height className="company__item-left">
                    <div className="company__item-title">Производство</div>
                    <picture className="company__item-image" data-image-type="image" data-local='company' data-image-name='company_2'>
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=""/>
                        <img src="" alt="" />
                    </picture>
                </div>
                <div className="company__item-right">
                    <div className="company__item-title">Только собственные разработки!</div>
                    <div className="company__item-text">
                        <p>Компания furMarket придерживается принципа НЕКОПИРОВАНИЯ! Мы производим мебель только собственной оригинальной разработки, защищенной более чем 20 патентами на различные узлы. Наша мебель выглядит современно, она легко узнаваема, выделяется на рынке высоким качеством изготовления и надёжностью эксплуатации.</p>
                        <p>Мы постоянно доводим её до совершенства, поэтому процесс создания нового изделия может занять до 8-10 последовательных шагов, на каждом из которых изготавливаются и испытываются новые образцы. Благодаря постоянным инвестициям в разработку собственных изделий, мы получаем опыт и гибкость в поиске нестандартных решений.</p>
                    </div>
                </div>
            </div>

            <div data-parent-height className="company__item center">
                <div className="company__item-left">
                    <div className="company__item-text">
                        <p>Качество продукции furMarket общеизвестно и общепризнано, о чем свидетельствует тот факт, что за 20 лет не было ни одной претензии по качеству покраски.</p>
                        <p>Оснащенное современными австрийскими и итальянскими технологиями производство находится в г. Хотьково, а близость к Москве и крупным логистическим комплексам позволяет оперативно поставлять продукцию нашим клиентам по всей России. Большие и маленькие заказы отгружаются во все регионы страны.</p>
                    </div>
                </div>
                <div data-child-height className="company__item-right">
                    <picture id="equalSidesRev" className="company__item-image" data-image-type="image" data-local='company' data-image-name='company_3'>
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=""/>
                        <img src="" alt="" />
                    </picture>
                </div>
            </div>

            <div data-parent-height className="company__item revers center">
                <div data-child-height className="company__item-left">
                    <picture  className="company__item-image" data-image-type="image" data-local='company' data-image-name='company_4'>
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=""/>
                        <img src="" alt="" />
                    </picture>
                </div>
                <div className="company__item-right">
                    <div className="company__item-text">
                        <p>Качество продукции furMarket общеизвестно и общепризнано, о чем свидетельствует тот факт, что за 20 лет не было ни одной претензии по качеству покраски.</p>
                        <p>Оснащенное современными австрийскими и итальянскими технологиями производство находится в г. Хотьково, а близость к Москве и крупным логистическим комплексам позволяет оперативно поставлять продукцию нашим клиентам по всей России. Большие и маленькие заказы отгружаются во все регионы страны.</p>
                    </div>
                </div>
            </div>

            <div data-parent-height className="company__item bgOrange">
                <div className="company__item-left">
                    <div className="company__item-title">Офис и шоу-рум furMarket</div>
                    <div className="company__item-text">
                        <p>Добрые и открытые отношения с клиентами – один из главных принципов работы компании furMarket, составляющий основу ее репутации. Мы искренне любим дело, которым занимаемся, ответственно подходим к решению задач и выполнению обязательств перед покупателями!</p>
                        <p>Приглашаем Вас в уютный и светлый шоу-рум с собственной парковкой, расположенный недалеко от центра, на Проспекте Мира, на территории БЦ «Парк Мира» (находится между станциями м. Рижская и Алексеевская). Мы с радостью обсудим проекты и представленную продукцию за чашечкой ароматного кофе! Наши компетентные специалисты сориентируют по ассортименту, ответят на вопросы и помогут подобрать оптимальный вариант конкретно под Ваши запросы и требования.</p>
                    </div>
                    <div className="company__item-info-box">
                        <div className="company__item-info"><span>Адрес:</span> г. Москва, ул. проспект Мира, 102с143</div>
                        <div className="company__item-info"><span>Телефон:</span> <a href="tel:+79999999999">+7 (999) 999-99-99</a></div>
                        <div className="company__item-info"><span>Юридическое лицо:</span> ООО "furMarket" Россия, Московская обл., 141960, п. Правдинский, ул. Фабричная д. 23, к. 1, помещение 682, ОГРН: 1175150010915; ИНН: 5038130614.</div>
                    </div>
                </div>
                <div data-child-height className="company__item-right">
                    <picture id="equalSidesRev" className="company__item-image" data-image-type="image" data-local='company' data-image-name='company_5'>
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=""/>
                        <img src="" alt="" />
                    </picture>
                </div>
            </div>
        </>
    }else if(scrollWidth > 425){
        return <>
            <div className="company__item column">
                <div data-parent-height className="company__item-top">
                    <div className="company__item-top-left">
                        <div className="company__item-title">ДОБРО ПОЖАЛОВАТЬ В FurMarket</div>
                        <div className="company__item-text">
                            <p>Мы глубоко убеждены, сегодня вопросу качества уделяется слишком мало внимания. Современное общество пока до конца не осознало: низкие цены и соответствующее качество мебели ведут к варварскому истреблению лесного массива и, как следствие, вызывают огромные экологические проблемы, растущие в геометрической прогрессии. Нельзя не принимать во внимание что именно, каким образом и насколько долго мы используем.</p>
                        </div>
                    </div>
                    <picture data-child-height id="equalSides" className="company__item-image" data-image-type="image" data-local='company' data-image-name='company_1'>
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=""/>
                        <img src="" alt="" />
                    </picture>
                </div>
                <div className="company__item-text">
                    <p>Утилизация стола из ДСП, где достаточное количество вредного вещества, – формальдегида, и утилизация стола на металлокаркасе, при равном сроке службы, отличается по стоимости почти в 3 раза, так как металл – самый пригодный к утилизации материал. Однако, если срок службы некачественного изделия будет ниже качественного хотя бы в 5 раз, а чаще намного больше, то для удовлетворения одной и той же потребности понадобится больше древесины в 15 раз и, соответственно, во столько же раз увеличатся затраты на утилизацию!</p>
                    <p>Наша страна богата природными ресурсами, но даже она не может позволить себе такой халатной расточительности. Нам всем нужна – ПРЕЗУМПЦИЯ КАЧЕСТВА!</p>
                </div>
            </div>

            <div data-parent-height data-padding='20' className="company__item bgOrange revers bigInfo">
                <div data-child-height className="company__item-left">
                    <div className="company__item-title">Производство</div>
                    <picture id="equalSides" className="company__item-image" data-image-type="image" data-local='company' data-image-name='company_2'>
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=""/>
                        <img src="" alt="" />
                    </picture>
                </div>
                <div className="company__item-right">
                    <div className="company__item-title">Только собственные разработки!</div>
                    <div className="company__item-text">
                        <p>Компания furMarket придерживается принципа НЕКОПИРОВАНИЯ! Мы производим мебель только собственной оригинальной разработки, защищенной более чем 20 патентами на различные узлы. Наша мебель выглядит современно, она легко узнаваема, выделяется на рынке высоким качеством изготовления и надёжностью эксплуатации.</p>
                        <p>Мы постоянно доводим её до совершенства, поэтому процесс создания нового изделия может занять до 8-10 последовательных шагов, на каждом из которых изготавливаются и испытываются новые образцы. Благодаря постоянным инвестициям в разработку собственных изделий, мы получаем опыт и гибкость в поиске нестандартных решений.</p>
                    </div>
                </div>
            </div>

            <div data-parent-height data-padding='20' className="company__item center">
                <div className="company__item-left">
                    <div className="company__item-text">
                        <p>Качество продукции furMarket общеизвестно и общепризнано, о чем свидетельствует тот факт, что за 20 лет не было ни одной претензии по качеству покраски.</p>
                        <p>Оснащенное современными австрийскими и итальянскими технологиями производство находится в г. Хотьково, а близость к Москве и крупным логистическим комплексам позволяет оперативно поставлять продукцию нашим клиентам по всей России. Большие и маленькие заказы отгружаются во все регионы страны.</p>
                    </div>
                </div>
                <div data-child-height className="company__item-right">
                    <picture id="equalSidesRev" className="company__item-image" data-image-type="image" data-local='company' data-image-name='company_3'>
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=""/>
                        <img src="" alt="" />
                    </picture>
                </div>
            </div>

            <div className="company__item revers center">
                <div className="company__item-left">
                    <picture id="equalSides" className="company__item-image" data-image-type="image" data-local='company' data-image-name='company_4'>
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=""/>
                        <img src="" alt="" />
                    </picture>
                </div>
                <div className="company__item-right">
                    <div className="company__item-text">
                        <p>Качество продукции furMarket общеизвестно и общепризнано, о чем свидетельствует тот факт, что за 20 лет не было ни одной претензии по качеству покраски.</p>
                        <p>Оснащенное современными австрийскими и итальянскими технологиями производство находится в г. Хотьково, а близость к Москве и крупным логистическим комплексам позволяет оперативно поставлять продукцию нашим клиентам по всей России. Большие и маленькие заказы отгружаются во все регионы страны.</p>
                    </div>
                </div>
            </div>

            <div className="company__item bgOrange">
                <div className="company__item-left">
                    <div className="company__item-title">Офис и шоу-рум furMarket</div>
                    <div className="company__item-text">
                        <p>Добрые и открытые отношения с клиентами – один из главных принципов работы компании furMarket, составляющий основу ее репутации. Мы искренне любим дело, которым занимаемся, ответственно подходим к решению задач и выполнению обязательств перед покупателями!</p>
                        <p>Приглашаем Вас в уютный и светлый шоу-рум с собственной парковкой, расположенный недалеко от центра, на Проспекте Мира, на территории БЦ «Парк Мира» (находится между станциями м. Рижская и Алексеевская). Мы с радостью обсудим проекты и представленную продукцию за чашечкой ароматного кофе! Наши компетентные специалисты сориентируют по ассортименту, ответят на вопросы и помогут подобрать оптимальный вариант конкретно под Ваши запросы и требования.</p>
                    </div>
                    <div className="company__item-info-box">
                        <div className="company__item-info"><span>Адрес:</span> г. Москва, ул. проспект Мира, 102с143</div>
                        <div className="company__item-info"><span>Телефон:</span> <a href="tel:+79999999999">+7 (999) 999-99-99</a></div>
                        <div className="company__item-info"><span>Юридическое лицо:</span> ООО "furMarket" Россия, Московская обл., 141960, п. Правдинский, ул. Фабричная д. 23, к. 1, помещение 682, ОГРН: 1175150010915; ИНН: 5038130614.</div>
                    </div>
                </div>
                <div className="company__item-right">
                    <picture id="equalSides" className="company__item-image" data-image-type="image" data-local='company' data-image-name='company_5'>
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=""/>
                        <img src="" alt="" />
                    </picture>
                </div>
            </div>
        </>
    }else{
        return <>
            <div className="company__item column">
                <div data-parent-height className="company__item-top">
                    <div className="company__item-top-left">
                        <div className="company__item-title">ДОБРО ПОЖАЛОВАТЬ В FurMarket</div>
                        <div className="company__item-text">
                            <p>Мы глубоко убеждены, сегодня вопросу качества уделяется слишком мало внимания. Современное общество пока до конца не осознало: низкие цены и соответствующее качество мебели ведут к варварскому истреблению лесного массива и, как следствие, вызывают огромные экологические проблемы, растущие в геометрической прогрессии. Нельзя не принимать во внимание что именно, каким образом и насколько долго мы используем.</p>
                        </div>
                    </div>
                    <picture data-child-height id="equalSides" className="company__item-image" data-image-type="image" data-local='company' data-image-name='company_1'>
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=""/>
                        <img src="" alt="" />
                    </picture>
                </div>
                <div className="company__item-text">
                    <p>Утилизация стола из ДСП, где достаточное количество вредного вещества, – формальдегида, и утилизация стола на металлокаркасе, при равном сроке службы, отличается по стоимости почти в 3 раза, так как металл – самый пригодный к утилизации материал. Однако, если срок службы некачественного изделия будет ниже качественного хотя бы в 5 раз, а чаще намного больше, то для удовлетворения одной и той же потребности понадобится больше древесины в 15 раз и, соответственно, во столько же раз увеличатся затраты на утилизацию!</p>
                    <p>Наша страна богата природными ресурсами, но даже она не может позволить себе такой халатной расточительности. Нам всем нужна – ПРЕЗУМПЦИЯ КАЧЕСТВА!</p>
                </div>
            </div>

            <div className="company__item">
                <div className="company__item-left">
                    <div className="company__item-title">Производство</div>
                    <picture id="equalSides" className="company__item-image" data-image-type="image" data-local='company' data-image-name='company_2'>
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=""/>
                        <img src="" alt="" />
                    </picture>
                </div>
                <div className="company__item-right">
                    <div className="company__item-title">Только собственные разработки!</div>
                    <div className="company__item-text">
                        <p>Компания furMarket придерживается принципа НЕКОПИРОВАНИЯ! Мы производим мебель только собственной оригинальной разработки, защищенной более чем 20 патентами на различные узлы. Наша мебель выглядит современно, она легко узнаваема, выделяется на рынке высоким качеством изготовления и надёжностью эксплуатации.</p>
                        <p>Мы постоянно доводим её до совершенства, поэтому процесс создания нового изделия может занять до 8-10 последовательных шагов, на каждом из которых изготавливаются и испытываются новые образцы. Благодаря постоянным инвестициям в разработку собственных изделий, мы получаем опыт и гибкость в поиске нестандартных решений.</p>
                    </div>
                </div>
            </div>

            <div className="company__item">
                <div className="company__item-left">
                    <picture id="equalSides" className="company__item-image" data-image-type="image" data-local='company' data-image-name='company_3'>
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=""/>
                        <img src="" alt="" />
                    </picture>
                </div>
                <div className="company__item-right">
                    <div className="company__item-text">
                        <p>Качество продукции furMarket общеизвестно и общепризнано, о чем свидетельствует тот факт, что за 20 лет не было ни одной претензии по качеству покраски.</p>
                        <p>Оснащенное современными австрийскими и итальянскими технологиями производство находится в г. Хотьково, а близость к Москве и крупным логистическим комплексам позволяет оперативно поставлять продукцию нашим клиентам по всей России. Большие и маленькие заказы отгружаются во все регионы страны.</p>
                    </div>
                </div>
            </div>

            <div className="company__item">
                <div className="company__item-left">
                    <picture id="equalSides" className="company__item-image" data-image-type="image" data-local='company' data-image-name='company_4'>
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=""/>
                        <img src="" alt="" />
                    </picture>
                </div>
                <div className="company__item-right">
                    <div className="company__item-text">
                        <p>Качество продукции furMarket общеизвестно и общепризнано, о чем свидетельствует тот факт, что за 20 лет не было ни одной претензии по качеству покраски.</p>
                        <p>Оснащенное современными австрийскими и итальянскими технологиями производство находится в г. Хотьково, а близость к Москве и крупным логистическим комплексам позволяет оперативно поставлять продукцию нашим клиентам по всей России. Большие и маленькие заказы отгружаются во все регионы страны.</p>
                    </div>
                </div>
            </div>

            <div className="company__item">
                <div className="company__item-left">
                    <div className="company__item-title">Офис и шоу-рум furMarket</div>
                    <picture id="equalSides" className="company__item-image" data-image-type="image" data-local='company' data-image-name='company_5'>
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=""/>
                        <img src="" alt="" />
                    </picture>
                </div>
                <div className="company__item-right">
                <div className="company__item-text">
                        <p>Добрые и открытые отношения с клиентами – один из главных принципов работы компании furMarket, составляющий основу ее репутации. Мы искренне любим дело, которым занимаемся, ответственно подходим к решению задач и выполнению обязательств перед покупателями!</p>
                        <p>Приглашаем Вас в уютный и светлый шоу-рум с собственной парковкой, расположенный недалеко от центра, на Проспекте Мира, на территории БЦ «Парк Мира» (находится между станциями м. Рижская и Алексеевская). Мы с радостью обсудим проекты и представленную продукцию за чашечкой ароматного кофе! Наши компетентные специалисты сориентируют по ассортименту, ответят на вопросы и помогут подобрать оптимальный вариант конкретно под Ваши запросы и требования.</p>
                    </div>
                    <div className="company__item-info-box">
                        <div className="company__item-info"><span>Адрес:</span> г. Москва, ул. проспект Мира, 102с143</div>
                        <div className="company__item-info"><span>Телефон:</span> <a href="tel:+79999999999">+7 (999) 999-99-99</a></div>
                        <div className="company__item-info"><span>Юридическое лицо:</span> ООО "furMarket" Россия, Московская обл., 141960, п. Правдинский, ул. Фабричная д. 23, к. 1, помещение 682, ОГРН: 1175150010915; ИНН: 5038130614.</div>
                    </div>
                </div>
            </div>
        </>
    }
}