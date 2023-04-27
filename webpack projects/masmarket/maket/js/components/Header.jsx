import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"


export default ({firebaseConfig, quantityEl})=>{
    const [catalogActiveName, setCatalogActiveName] = useState('Электроника')
    const [categoriesList, setCategoriesList] = useState()
    const [Charpeters, setCharpeters] = useState()

    let scrollWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    );
    useEffect(()=>{
        scrollWidth = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        );

        return eventClick(setCatalogActiveName)
    })
    useEffect(()=>{
        scrollWidth = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        );

        createSubCategory(categoriesList, catalogActiveName, scrollWidth)
    }, [catalogActiveName])
    useEffect(()=>{
        scrollWidth = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        );
        fetch(`${firebaseConfig.databaseURL}categoriesList.json`).then(rez=>rez.json()).then(rez=>{
            setCategoriesList(rez)
            createChapters(rez, setCharpeters, quantityEl)
        })
    }, [])
    
    return(
        <div className="header">
            <div className="header__container">
                <div className="header__box-top">
                    {sequenceHeaderLeft(scrollWidth, categoriesList, catalogActiveName)}
                    {sequenceHeaderRight(scrollWidth)}
                </div>

                <div className="header__box-bottom">
                    {Charpeters}
                </div>
            </div>
        </div>
    )
}

function createChapters(chapterList, setCharpeters, quantityEl){
    if(chapterList){
        const limitOneCharpeter = Math.round(quantityEl(10, 5, 3) / chapterList.length)
        const finalArr = []
        chapterList.forEach(el=>{
            const iteratorCharpetersList = Math.round(el.subCategories[0].subSubCategories.length / limitOneCharpeter)
            for (let i = 0; i < el.subCategories[0].subSubCategories.length; i += iteratorCharpetersList) {
                const charpeter = el.subCategories[0].subSubCategories[i]
                    finalArr.push(<button key={`./category/${charpeter.pathSubSubCategories}`} className="header__box-bottom-item">
                        <NavLink to={`./category/${charpeter.pathSubSubCategories}`}>{charpeter.titleSubSubCategories}</NavLink>
                    </button>)
            }
        })
        setCharpeters(finalArr)
    }
}

function sequenceHeaderLeft(scrollWidth, catalogCategories, catalogActiveName){
    if(scrollWidth > 768){
        return <>
        <NavLink to={'/'}>
            <div className="header__box-top-item">
                <div className="header__title-box">
                    <picture id="icon" data-icon-name="logo" className="loading-img">
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=''/>
                        <img src='' alt="" />
                    </picture>
                </div>
            </div>
        </NavLink>
        <div className="header__box-top-item">
            <button className="header__catalog hover__button">
                <div className="header__catalog-lines"><span></span></div>
                Catalog
            </button>
            <div className="catalog">
                <div className="catalog__cross-box">
                    <div></div>
                    <span className="catalog__cross"></span>
                </div>
                <div className="catalog__main">
                    <div className="catalog__left">
                        {createCategoryTitle(catalogCategories)}
                    </div>
                    <div className="catalog__right">
                        {createSubCategory(catalogCategories, catalogActiveName, scrollWidth)}
                    </div>
                </div>
            </div>
        </div>
        <div className="header__box-top-item header__box-top-item-input">
            <div className="header__input-box">
                <div className="header__input-categories-box">
                    <input className="header__input" type="text" placeholder="Search on Store"/>
                </div>
                <button className="header__input-search-box hover__button">
                    <picture id="icon" data-icon-name="input-seach" className="loading-img">
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=''/>
                        <img src='' alt="" />
                    </picture>
                </button>
            </div>
        </div>
        </>
    }else {
        return <>
        <NavLink to={'/'}>
            <div className="header__box-top-item">
                <div className="header__title-box">
                    <picture id="icon" data-icon-name='logo' className="loading-img">
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=''/>
                        <img src='' alt="" />
                    </picture>
                </div>
            </div>
        </NavLink>
        <div className="header__box-top-item header__box-top-item-input">
            <div className="header__input-box">
                <div className="header__input-categories-box">
                    <input className="header__input" type="text" placeholder="Search on Store"/>
                </div>
                <button className="header__input-search-box hover__button">
                    <picture id="icon" data-icon-name='input-seach' className="loading-img">
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=''/>
                        <img src='' alt="" />
                    </picture>
                </button>
            </div>
        </div>
        <div className="header__box-top-item">
            <button className="header__catalog hover__button">
                <div className="header__catalog-lines"><span></span></div>
                Catalog
            </button>
            <div className="catalog">
                <div className="catalog__cross-box">
                    <div></div>
                    <span className="catalog__cross"></span>
                </div>
                <div className="catalog__main">
                    <div className="catalog__left">
                        {createCategoryTitle(catalogCategories)}
                    </div>
                    <div className="catalog__right">
                        {createSubCategory(catalogCategories, catalogActiveName, scrollWidth)}
                    </div>
                </div>
            </div>
        </div>
        </>
    }
}

function sequenceHeaderRight(scrollWidth){
        return <div id="headerItemBtnBox" className="header__box-top-item-button-box">
        <NavLink to={'/userProfile'} className="header__box-top-item-button">
            <button className="header__box-top-item">
                <div className="header__user-button">
                    <picture id="icon" data-icon-name="user-logo" className="loading-img">
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=''/>
                        <img src='' alt="" />
                    </picture>
                    <div className="header__user-button-text">Имя пользователя</div>
                </div>
            </button>
        </NavLink >
        <NavLink to={'/order'} className="header__box-top-item-button">
            <button className="header__box-top-item ">
                <div className="header__user-button">
                    <picture id="icon" data-icon-name="user-logo" className="loading-img">
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=''/>
                        <img src='' alt="" />
                        <div id="equalSidesRev" data-header-item-counter='orders' className="header__box-top-item-counter"></div>
                    </picture>
                    <div className="header__user-button-text">Заказы</div>
                    
                </div>
            </button>
        </NavLink>
        <NavLink to={'/favorites'} className="header__box-top-item-button">
            <button className="header__box-top-item ">
                <div className="header__user-button">
                    <picture id="icon" data-icon-name="favorites-logo" className="loading-img">
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=''/>
                        <img src='' alt="" />
                        <div id="equalSidesRev" data-header-item-counter='favorites' className="header__box-top-item-counter"></div>
                    </picture>
                    <div className="header__user-button-text">Избранное</div>
                    
                </div>
            </button>
        </NavLink>
        <NavLink to={'/basket'} className="header__box-top-item-button">
            <button className="header__box-top-item ">
                <div className="header__user-button">
                    <picture id="icon" data-icon-name="backet-logo" className="loading-img">
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=''/>
                        <img src='' alt="" />
                        <div id="equalSidesRev" data-header-item-counter='basket' className="header__box-top-item-counter"></div>
                    </picture>
                    <div className="header__user-button-text">Корзина</div>
                </div>
            </button>
        </NavLink>
    </div>
}

function createCategoryTitle(catalogCategories){
    let i = 0;
    let iItem = 0
    if(catalogCategories){
        return catalogCategories.map(el=>{
            i++
            return  <div data-name={`${el.name}`}  key={el.name + i} className="catalog__left-item">
                        <div className={iItem++ === 0 ? "catalog__left-item-box active": "catalog__left-item-box"}>
                            <div className="catalog__left-item-imgBox">
                                <picture id="icon" data-icon-name={el.nameImg} className="loading-img">
                                    <div id="equalSidesRev" className="img-mask"></div>
                                    <source srcSet=''/>
                                    <img src='' alt="" />
                                </picture>
                            </div>
                            <div className="catalog__left-item-text">{el.name}</div>
                        </div>
                        <span></span>
                    </div>
            })
    }
}

function createSubCategory(catalogCategories, nameCategory, scrollWidth){
    if(catalogCategories){
        const element = nameCategory ? catalogCategories.find(el=>el.name === nameCategory) : catalogCategories[0];
        let i = 0
        return  <>
                    <div className="catalog__right-title">{element.name}</div>
                    <ul className="catalog__right-list">
                        {creteContCatalogListRight(element, scrollWidth).map(element=>{
                            i++
                            return <div key={'row' + i} className="catalog__right-list-row">
                                {element.map(el=>{
                                    i++
                                    return <li key={el.subName + i} className="catalog__right-item">
                                                <div className="catalog__right-item-title">{el.subName}</div>
                                                <ul className="catalog__right-item-list">
                                                    {el.subSubCategories.length < 7 ? 
                                                    el.subSubCategories.map(elem=>{
                                                        i++
                                                        return <li id="catalogLink" key={`${elem + i}`} className="catalog__right-item-list-item">
                                                                    <NavLink to={`/category/${elem.pathSubSubCategories}`}>
                                                                        {elem.titleSubSubCategories}
                                                                    </NavLink>
                                                                </li>
                                                    }):
                                                    <>
                                                        {el.subSubCategories.map(elem=>{
                                                            if(el.subSubCategories.indexOf(elem) <= 5){
                                                                i++
                                                                return <li id="catalogLink" key={`${elem + i}`} className="catalog__right-item-list-item">
                                                                            <NavLink to={`/category/${elem.pathSubSubCategories}`}>
                                                                                {elem.titleSubSubCategories}
                                                                            </NavLink>
                                                                        </li>
                                                            }
                                                        })}
                                                        <ul className="catalog__right-item-subList">
                                                        {el.subSubCategories.map(elem=>{
                                                            i++
                                                            if(el.subSubCategories.indexOf(elem) > 5){
                                                                return <li id="catalogLink" key={`${elem + i}`} className="catalog__right-item-list-item">
                                                                            <NavLink to={`/category/${elem.pathSubSubCategories}`}>
                                                                                {elem.titleSubSubCategories}
                                                                            </NavLink>
                                                                        </li>
                                                            }
                                                        })}
                                                        </ul>
                                                        <li key={'arrow'+i} className="catalog__right-item-arrow"><div>Ещё</div> <span></span></li>
                                                    </>}
                                                </ul>
                                            </li>
                                })}
                            </div>
                        })}
                    </ul>
                </>
    }
}

function creteContCatalogListRight(startCategory, scrollWidth){
    let quantity
    if(scrollWidth > 1024){
        quantity = Math.ceil(startCategory.subCategories.length / 3)
    }else if(scrollWidth > 768){
        quantity = Math.ceil(startCategory.subCategories.length / 2)
    }else{
        quantity = Math.ceil(startCategory.subCategories.length / 1)
    }
    const newarr = [];
    let subArr = []
    startCategory.subCategories.forEach(el=>{
        if(quantity > startCategory.subCategories.indexOf(el)){
            subArr.push(el)
        }else{
            newarr.push(subArr)
            quantity = quantity +  quantity
            subArr = []
            subArr.push(el)
        }
        if(startCategory.subCategories.indexOf(el)+1 === startCategory.subCategories.length){
            newarr.push(subArr)
        }
    })
    return newarr
}

function eventClick(setCatalogActiveName){
    const body = document.querySelector('.body')
    body.addEventListener('click', clickFn)

    function clickFn(event){
        const target = event.target

        if(target.closest('.header__catalog')|| target.closest('.catalog__cross') || target.closest('#catalogLink')){
            const blur = document.querySelector('.body-blackBlur')
            const catalog = document.querySelector('.catalog')
            const body = document.querySelector('.body')
            blur.classList.toggle('active')
            catalog.classList.toggle('active')
            body.classList.toggle('hidden')
        }

        if(target.closest('.catalog__left-item')){
            const item = target.closest('.catalog__left-item')
            for(const el of item.parentElement.children){
                el.firstElementChild.classList.remove('active')
            }
            item.firstElementChild.classList.add('active')
            setCatalogActiveName(item.dataset.name)
        }

        if(target.closest('.catalog__right-item-arrow')){
            const arrow = event.target.closest('.catalog__right-item-arrow')
            if(arrow.className.split(' ')[1] !== 'active'){
                arrow.firstElementChild.innerHTML = 'Свернуть'
            }else{
                arrow.firstElementChild.innerHTML = 'Ещё'
            }
            arrow.classList.toggle('active')
            arrow.previousElementSibling.classList.toggle('active')
        }
    }
    return ()=>body.removeEventListener('click', clickFn)
}