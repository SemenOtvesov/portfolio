import React from "react";
import ApproximationImage from "@elements/approximationImage.jsx";
import Slider from "@averageElements/slider.jsx";

export default ()=>{
    let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
    );

    return <>
        <div className="intro">
            <div className="intro__blur"></div>
            <div className="intro__background">
                <picture className='loading-img' data-image-type='image' data-local="intro"  data-image-name="intro">
                    <div id='equalSidesRev' className='img-mask'/>
                    <source srcSet=''/>
                    <img src='' alt='' />
                </picture>
                <div className="intro__text-box">
                    <div className="intro__text">ОФИСНАЯ МЕБЕЛЬ <br/> НА МЕТАЛЛОКАРКАСЕ</div>
                    <div id="openPopap" data-popap-type={'cooperation'} className="intro__button">Заказать звонок</div>
                </div>
            </div>
        </div>

        <div className="scrollBox">
            <div className="greeting">
                <div className="greeting__title-box">
                    <div className="greeting__title-top">КТО МЫ И КУДА ИДЕМ</div>
                    <div className="greeting__title-average">ДОБРО ПОЖАЛОВАТЬ В</div>
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
                <div className="greeting__text">Ведущий производитель в России офисной мебели на металлокаркасе<br/><br/>Уникальный сплав компетенций в области обработки металла и производства корпусной мебели из ЛДСП.<br/><br/>Мы являемся экспертами в своей области и предлагаем вам самые современные и эффективные решения по оснащению офисов мебелью на металлокаркасе.</div>
                {scrollWidth > 425 
                    ?
                        <div className="greeting__galery">
                            <div className="greeting__galery-item item1">
                                <ApproximationImage local={'approximation'} imageName={'approximationPicture1'}/>
                            </div>
                            <div className="greeting__galery-item item2">
                                <ApproximationImage local={'approximation'} imageName={'approximationPicture2'}/>
                            </div>
                            <div className="greeting__galery-item item3">
                                <ApproximationImage local={'approximation'} imageName={'approximationPicture3'}/>
                            </div>
                            <div className="greeting__galery-item item4">
                                <ApproximationImage local={'approximation'} imageName={'approximationPicture4'}/>
                            </div>
                            <div className="greeting__galery-item item5">
                                <ApproximationImage local={'approximation'} imageName={'approximationPicture5'}/>
                            </div>
                            <div className="greeting__galery-item item6">
                                <ApproximationImage local={'approximation'} imageName={'approximationPicture6'}/>
                            </div>
                        </div>
                    :
                        <Slider slides={[
                            {imageName:'approximationPicture1', local:'approximation'}, 
                            {imageName:'approximationPicture2', local:'approximation'},
                            {imageName:'approximationPicture3', local:'approximation'},
                            {imageName:'approximationPicture4', local:'approximation'},
                            {imageName:'approximationPicture5', local:'approximation'},
                            {imageName:'approximationPicture6', local:'approximation'}
                        ]}/>
                }
            </div>
    
            <div className="advantages">
                <div className="advantages__background"></div>
                <div className="advantages__title">
                    Почему 
                    <picture data-image-type='logo' className="loading-img">
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=""/>
                        <img src="" alt="" />
                    </picture>
                </div>
    
                <div className="advantages__item-box">
    
                    <div className="advantages__item">
                        <div id="equalSides" className="advantages__item-image">
                            <picture className='loading-img' data-image-type='icon' data-local="feature"  data-icon-name="feature-01">
                                <div id='equalSidesRev' className='img-mask'/>
                                <source srcSet=''/>
                                <img src='' alt='' />
                            </picture>
                        </div>
                        <div className="advantages__item-content">
                            <div className="advantages__item-title">Презумпция качества</div>
                            <div className="advantages__item-text">Качество — главный ориентир в работе ZAMM</div>
                        </div>
                    </div>
                    
                    <div className="advantages__item">
                        <div id="equalSides" className="advantages__item-image">
                            <picture className='loading-img' data-image-type='icon' data-local="feature"  data-icon-name="feature-02">
                                <div id='equalSidesRev' className='img-mask'/>
                                <source srcSet=''/>
                                <img src='' alt='' />
                            </picture>
                        </div>
                        <div className="advantages__item-content">
                            <div className="advantages__item-title">Собственное производство</div>
                            <div className="advantages__item-text">Контроль технологий на всех этапах</div>
                        </div>
                    </div>
    
                    <div className="advantages__item">
                        <div id="equalSides" className="advantages__item-image">
                            <picture className='loading-img' data-image-type='icon' data-local="feature"  data-icon-name="feature-03">
                                <div id='equalSidesRev' className='img-mask'/>
                                <source srcSet=''/>
                                <img src='' alt='' />
                            </picture>
                        </div>
                        <div className="advantages__item-content">
                            <div className="advantages__item-title">Экологичное потребление</div>
                            <div className="advantages__item-text">Качественные вещи сохраняет окружающую среду</div>
                        </div>
                    </div>
    
                    <div className="advantages__item">
                        <div id="equalSides" className="advantages__item-image">
                            <picture className='loading-img' data-image-type='icon' data-local="feature"  data-icon-name="feature-04">
                                <div id='equalSidesRev' className='img-mask'/>
                                <source srcSet=''/>
                                <img src='' alt='' />
                            </picture>
                        </div>
                        <div className="advantages__item-content">
                            <div className="advantages__item-title">Мебель на каркасе</div>
                            <div className="advantages__item-text">Надежнее и долговечнее аналогов из ЛДСП</div>
                        </div>
                    </div>
    
                    <div className="advantages__item">
                        <div id="equalSides" className="advantages__item-image">
                            <picture className='loading-img' data-image-type='icon' data-local="feature"  data-icon-name="feature-05">
                                <div id='equalSidesRev' className='img-mask'/>
                                <source srcSet=''/>
                                <img src='' alt='' />
                            </picture>
                        </div>
                        <div className="advantages__item-content">
                            <div className="advantages__item-title">Гибкость и многобразие</div>
                            <div className="advantages__item-text">Выбирайте среди сотен комбинаций цветов, размеров и форм</div>
                        </div>
                    </div>
    
                    <div className="advantages__item">
                        <div id="equalSides" className="advantages__item-image">
                            <picture className='loading-img' data-image-type='icon' data-local="feature"  data-icon-name="feature-06">
                                <div id='equalSidesRev' className='img-mask'/>
                                <source srcSet=''/>
                                <img src='' alt='' />
                            </picture>
                        </div>
                        <div className="advantages__item-content">
                            <div className="advantages__item-title">Складская программа</div>
                            <div className="advantages__item-text">Складская программа стандартных изделий для быстрого заказа</div>
                        </div>
                    </div>
    
                </div>
            </div>
    
            <div className="technologies">
                <div className="technologies__title">НАШИ <span>ТЕХНОЛОГИИ</span></div>
    
                <div className="technologies__main">
                    <div id="equalSides" className="technologies__left">
                        <picture className='loading-img' data-image-type='icon' data-local="technologies"  data-icon-name="technologies-prev">
                            <div id='equalSidesRev' className='img-mask'/>
                            <source srcSet=''/>
                            <img src='' alt='' />
                        </picture>
                    </div>
                    <div className="technologies__item-box">
    
                        <div className="technologies__item">
                            <div id={scrollWidth > 425 ? "equalSidesRev" : "equalSides"} className="technologies__item-img">
                                <picture className='loading-img' data-image-type='icon' data-local="technologies"  data-icon-name="technologies-chart-01">
                                    <div id='equalSidesRev' className='img-mask'/>
                                    <source srcSet=''/>
                                    <img src='' alt='' />
                                </picture>
                            </div>
                            <div className="technologies__item-content">
                                <div className="technologies__item-title">ЛДСП Egger</div>
                                <div className="technologies__item-text">Материалы от австрийской компании Egger отличаются экологичностью и лучшим внешним видом по сравнению с аналогами.</div>
                            </div>
                        </div>
    
                        
                        <div className="technologies__item">
                            <div id={scrollWidth > 425 ? "equalSidesRev" : "equalSides"} className="technologies__item-img">
                                <picture className='loading-img' data-image-type='icon' data-local="technologies"  data-icon-name="technologies-chart-02">
                                    <div id='equalSidesRev' className='img-mask'/>
                                    <source srcSet=''/>
                                    <img src='' alt='' />
                                </picture>
                            </div>
                            <div className="technologies__item-content">
                                <div className="technologies__item-title">Идеальная поверхность</div>
                                <div className="technologies__item-text">Ровные углы, незаметные соединения - следствие высокой культуры производства. Столы выглядят аккуратно и добротно</div>
                            </div>
                        </div>
    
                        <div className="technologies__item">
                            <div id={scrollWidth > 425 ? "equalSidesRev" : "equalSides"} className="technologies__item-img">
                                <picture className='loading-img' data-image-type='icon' data-local="technologies"  data-icon-name="technologies-chart-03">
                                    <div id='equalSidesRev' className='img-mask'/>
                                    <source srcSet=''/>
                                    <img src='' alt='' />
                                </picture>
                            </div>
                            <div className="technologies__item-content">
                                <div className="technologies__item-title">Фурнитура</div>
                                <div className="technologies__item-text">Качественная порошковая краска (Италия), надежные колеса со стопором у тумб (Германия), направляющие полного выдвижения (Италия), стильные хромированные ручки (Италия/Польша)</div>
                            </div>
                        </div>
    
                        <div className="technologies__item">
                            <div id={scrollWidth > 425 ? "equalSidesRev" : "equalSides"} className="technologies__item-img">
                                <picture className='loading-img' data-image-type='icon' data-local="technologies"  data-icon-name="technologies-chart-04">
                                    <div id='equalSidesRev' className='img-mask'/>
                                    <source srcSet=''/>
                                    <img src='' alt='' />
                                </picture>
                            </div>
                            <div className="technologies__item-content">
                                <div className="technologies__item-title">Долговечность</div>
                                <div className="technologies__item-text">Благодаря конструкциям из металла и качественной фурнитуре наши изделия служат долгие годы. Гарантия - 3 года.</div>
                            </div>
                        </div>
    
                        <div className="technologies__item">
                            <div id={scrollWidth > 425 ? "equalSidesRev" : "equalSides"} className="technologies__item-img">
                                <picture className='loading-img' data-image-type='icon' data-local="technologies"  data-icon-name="technologies-chart-05">
                                    <div id='equalSidesRev' className='img-mask'/>
                                    <source srcSet=''/>
                                    <img src='' alt='' />
                                </picture>
                            </div>
                            <div className="technologies__item-content">
                                <div className="technologies__item-title">Склад</div>
                                <div className="technologies__item-text">Четыре цвета металла, шесть декоров ЛДСП, большая размерная сетка. Под заказ (Для офисных проектов): любые декоры Egger, цвета металла по RAL, кастомные размеры и формы (угловые, прямые, круглые)</div>
                            </div>
                        </div>
    
                    </div>
                </div>
    
            </div>
    
            <div className="mainIdeas">
                <div className="mainIdeas__title">ИДЕИ</div>
                {scrollWidth > 425 
                    ? 
                <div className="mainIdeas__box">
                    <div id="equalSides" className="mainIdeas__item">
                        <ApproximationImage local='ideas' imageName='ideas_1'/>
                    </div>
                    <div id="equalSides" className="mainIdeas__item">
                        <ApproximationImage local='ideas' imageName='ideas_2'/>
                    </div>
                    <div id="equalSides" className="mainIdeas__item">
                        <ApproximationImage local='ideas' imageName='ideas_3'/>
                    </div>
                </div>
                    :
                    <Slider slides={[
                        {imageName:'ideas_1', local:'ideas'}, 
                        {imageName:'ideas_2', local:'ideas'}, 
                        {imageName:'ideas_3', local:'ideas'}, 
                    ]}/>}
            </div>
        </div>
        </>
}