import React, {useEffect, useState} from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDownloadURL, ref } from "firebase/storage";

export default ({userBasketProds, userFavoritesList, storage, equalSidesFn, firebaseConfig, appLoaderImg})=>{
    const location = useLocation()
    const params = useParams()
    const [urlListProd, setUrlListProd] = useState([])
    const [urlListSelects, setUrlListSelects] = useState([])
    const [infoListSelects, setInfoListSelects] = useState([])
    const [urlListReviews, setUrlListReviews] = useState([])
    const [listReviewsText, setListReviewsText] = useState([])
    const [listQuestionText, setListQuestionText] = useState([])
    let listReviewsTextCheck; let listQuestionTextCheck;
    
    let scrollWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    )

    useEffect(()=>{
        scrollWidth = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        );
        if(scrollWidth < 426){
            const bottomLastItem = document.getElementById('bottomLastItem')
            const headerItemBtnBox = document.getElementById('headerItemBtnBox')
            bottomLastItem.style.cssText = `bottom: ${headerItemBtnBox.offsetHeight}px`
        }

        let iteratorSelectsProd = 0
        const urlListProd = []
        recursionDownloadUrlProds()
        async function recursionDownloadUrlProds(){
            let checkCall = true
            if(checkCall){
                await getDownloadURL(ref(storage, `image/products/expansion/webp/${params.idProduct}/${iteratorSelectsProd + 1}.webp`))
                .then(url => urlListProd.push({webp:url}))
                .catch(error=>checkCall = false)
            }
            if(checkCall){
                await getDownloadURL(ref(storage, `image/products/expansion/png/${params.idProduct}/${iteratorSelectsProd + 1}.png`))
                .then((url) => urlListProd[iteratorSelectsProd].png = url)
                .catch(error=>checkCall = false)
                iteratorSelectsProd++
                recursionDownloadUrlProds()
            }
            if(!checkCall){
                document.getElementById('prodScrollbar').classList.remove('loading-img')
                document.getElementById('mainImg').classList.remove('loading-img')
                setUrlListProd(urlListProd)
            }
        }
        
        let iteratorSelects = 0
        const urlListSelects = []
        recursionDownloadUrlSelects()
        async function recursionDownloadUrlSelects(){
            let checkCall = true
            if(checkCall){
                await getDownloadURL(ref(storage, `image/products/selects/webp/${params.idProduct}/${iteratorSelects + 1}.webp`))
                .then(url => urlListSelects.push({webp:url}))
                .catch(error=>checkCall = false)
            }
            if(checkCall){
                await getDownloadURL(ref(storage, `image/products/selects/png/${params.idProduct}/${iteratorSelects + 1}.png`))
                .then((url) => urlListSelects[iteratorSelects].png = url)
                .catch(error=>checkCall = false)
                iteratorSelects++
                recursionDownloadUrlSelects()
            }
            if(!checkCall){
                setUrlListSelects(urlListSelects)
            }
        }

        let iteratorReviews = 0
        const urlListReviews = []
        recursionDownloadUrlReviews()
        async function recursionDownloadUrlReviews(){
            let checkCall = true
            if(checkCall){
                await getDownloadURL(ref(storage, `image/products/userReviews/webp/${params.idProduct}/${iteratorReviews + 1}.webp`))
                .then(url =>urlListReviews.push({webp:url}))
                .catch(error=>checkCall = false)
            }
            if(checkCall){
                await getDownloadURL(ref(storage, `image/products/userReviews/png/${params.idProduct}/${iteratorReviews + 1}.png`))
                .then((url) => urlListReviews[iteratorReviews].png = url)
                .catch(error=>checkCall = false)
                iteratorReviews++
                recursionDownloadUrlReviews()
            }
            if(!checkCall){
                setUrlListReviews(urlListReviews)
            }
        }

        recursionDownloadReviewsText()
        async function recursionDownloadReviewsText(){
            await fetch(`${firebaseConfig.databaseURL}prodList.json?orderBy="id"&equalTo="${params.idProduct}"`).then(rez=>rez.json()).then(rez=>{
                if(Object.values(Object.values(rez)[0].reviewsList[0])[1] !== listReviewsTextCheck){
                    setListReviewsText(Object.values(rez)[0].reviewsList);
                    listReviewsTextCheck = Object.values(Object.values(rez)[0].reviewsList[0])[1]
                }
            })
        }

        recursionDownloadQuestionText()
        async function recursionDownloadQuestionText(){
            await fetch(`${firebaseConfig.databaseURL}prodList.json?orderBy="id"&equalTo="${params.idProduct}"`).then(rez=>rez.json()).then(rez=>{
                if(Object.values(Object.values(rez)[0].questionList[0])[1] !== listQuestionTextCheck){
                    setListQuestionText(Object.values(rez)[0].questionList);
                    listReviewsTextCheck = Object.values(Object.values(rez)[0].questionList[0])[1]
                }
            })
        }
    },[location.pathname])

    useEffect(()=>{
        createSliderItem(urlListProd);
        equalSidesFn(scrollWidth)
    }, [urlListProd])

    useEffect(()=>{
        createReviewsItems(listReviewsText)
        appLoaderImg(storage)
    }, [listReviewsText])

    useEffect(()=>{
        createQuestionItems(listQuestionText)
        appLoaderImg(storage)
    }, [listQuestionText])
    
    useEffect(()=>{
        if(urlListSelects[0] !== undefined){
            fetch(`${firebaseConfig.databaseURL}prodList.json?orderBy="id"&equalTo="${params.idProduct}"`).then(rez=>rez.json()).then(rez=>{
                const elem = Object.values(rez)[0]
                setInfoListSelects(elem.selects)
                equalSidesFn(scrollWidth)
                document.querySelector('.mainProduct__bottom-select-text').innerHTML = elem.selectsType + ':'
            })
        }
    }, [urlListSelects])

    useEffect(()=>{
        createReviews(urlListReviews);
        equalSidesFn(scrollWidth)
    }, [urlListReviews])

    useEffect(()=>{
            const selectAct = document.querySelector('[data-prod-select].active')
            if(selectAct){
                const prodSelectType = document.getElementById('prodSelectType')
        
                const span = document.createElement('span')
                span.innerHTML = selectAct.dataset.prodSelect
        
                if(prodSelectType.children[0] === undefined){
                    prodSelectType.append(span)
                }
                prodSelectType.dataset.prodSelectValue = selectAct.dataset.prodSelect
            }

            if(userBasketProds[0] !== undefined){
                if(selectAct){
                    userBasketProds.forEach(el=>{
                        if((el.idProd === params.idProduct) && (el.select === selectAct.dataset.prodSelect)){
                            const btn = document.getElementById('btnProdAddBasket')
                            btn.children[0].innerHTML = 'В корзине'
                            btn.classList.add('blocked')
                        }
                    })
                }
            }

            if(userFavoritesList[0] !== undefined){
                userFavoritesList.forEach(el=>{
                    if(params.idProduct === el){
                        const favourBtn = document.querySelector('#favourBtn')
                        favourBtn.classList.add('active')
                        favourBtn.children[1].innerHTML = 'В избранном'
                    }
                })
            }
    })
    
    return (
        <div className="mainProduct">
            <div className="mainProduct__container">
                <div className="mainProduct__top">
                    <div className="mainProduct__title">Машинка перевертыш на радиоуправлении Playtown, управление жестами, зеленая</div>
                    <div className="mainProduct__top-items">
                        <div className="mainProduct__top-items-left">
                            <div className="estimation">
									<div className="estimation__items">
										<input id="rating__5" type="radio" value="5" className="estimation__item" name="rating"/>
										<label htmlFor="rating__5" className="estimation__label"></label>
										<input id="rating__4" type="radio" value="4" className="estimation__item" name="rating"/>
										<label htmlFor="rating__4" className="estimation__label"></label>
										<input id="rating__3" type="radio" value="3" className="estimation__item" name="rating"/>
										<label htmlFor="rating__3" className="estimation__label"></label>
										<input id="rating__2" type="radio" value="2" className="estimation__item" name="rating"/>
										<label htmlFor="rating__2" className="estimation__label"></label>
										<input id="rating__1" type="radio" value="1" className="estimation__item" name="rating"/>
										<label htmlFor="rating__1" className="estimation__label"></label>
									</div>
							</div>

                            <div id="reviewsBtn" className="mainProduct__top-item">
                                <div id="reviewsCounter" className="mainProduct__top-item-text"></div>
                            </div>
                            <div id="questionBtn" className="mainProduct__top-item">
                                <div className="mainProduct__top-item-img">
                                    <picture id="icon" data-icon-name='question' className="loading-img">
                                        <div id="equalSidesRev" className="img-mask"></div>
                                        <source srcSet=''/>
                                        <img src='' alt="" />
                                    </picture>
                                </div>
                                <div id="questionCounter" className="mainProduct__top-item-text"></div>
                            </div>
                            <div id="favourBtn" className="mainProduct__top-item">
                                <div className="mainProduct__top-item-img">
                                    <picture id="icon" data-icon-name='favourite' className="loading-img">
                                        <div id="equalSidesRev" className="img-mask"></div>
                                        <source srcSet=''/>
                                        <img src='' alt="" />
                                    </picture>
                                </div>
                                <div className="mainProduct__top-item-text">В избранное</div>
                            </div>
                            {scrollWidth > 768 ? <>
                                <div className="mainProduct__top-item">
                                    <div className="mainProduct__top-item-img">
                                        <picture id="icon" data-icon-name='comparison' className="loading-img">
                                            <div id="equalSidesRev" className="img-mask"></div>
                                            <source srcSet=''/>
                                            <img src='' alt="" />
                                        </picture>
                                    </div>
                                    <div className="mainProduct__top-item-text">Добавить к сравнению</div>
                                </div>
                            </>:""}
                            <div className="mainProduct__top-item">
                                    <div className="mainProduct__top-item-img">
                                        <picture id="icon" data-icon-name='share' className="loading-img">
                                            <div id="equalSidesRev" className="img-mask"></div>
                                            <source srcSet=''/>
                                            <img src='' alt="" />
                                        </picture>
                                    </div>
                                    <div className="mainProduct__top-item-text">Поделиться</div>
                            </div>
                        </div>
                        <div className="mainProduct__top-items-right">
                            <div className="mainProduct__top-item gray">
                                <div className="mainProduct__top-item-text">Код товара: {params.idProduct}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainProduct__bottom">
                    <div className="mainProduct__bottom-topBox">
                        <div className="mainProduct__bottom-item">
                            <div className="mainProduct__bottom-slider">
                                <div className="mainProduct__bottom-slider-left">

                                    <div id="sliderArrow" onClick={clickScrollBarArrow} className="mainProduct__bottom-slider-arrow up">
                                        <span id="equalSidesRev"></span>
                                    </div>
                                        <div id="prodScrollbar" onClick={clickScrollBar} className="mainProduct__bottom-slider-scrollbar loading-img">
                                            <div id={scrollWidth > 768 ? "equalSides": ''} style={scrollWidth > 768 ? {width: '80%'}: {width: '100%'}} className="img-mask"></div>
                                            {createSliderItem(urlListProd)}
                                        </div>
                                    <div id="sliderArrow" onClick={clickScrollBarArrow} className="mainProduct__bottom-slider-arrow down">
                                        <span id="equalSidesRev"></span>
                                    </div>

                                </div>
                                <div id="equalSides" className="mainProduct__bottom-slider-right">
                                    <div className="mainProduct__bottom-slider-discount"></div>
                                        <picture data-id="1" id="mainImg" className="loading-img mainProduct__bottom-slider-visebleImg">
                                            <div id="equalSidesRev" className="img-mask"></div>
                                            <source srcSet=''/>
                                            <img src='' alt="" />
                                        </picture>
                                        <div className="mainProduct__bottom-slider-box">
                                            <div className="mainProduct__bottom-slider-img">
                                                <picture>
                                                    <source srcSet=''/>
                                                    <img src='' alt="" />
                                                </picture>
                                            </div>
                                            <div className="mainProduct__bottom-slider-img">
                                                <picture>
                                                    <source srcSet=''/>
                                                    <img src='' alt="" />
                                                </picture>
                                            </div>
                                            <div className="mainProduct__bottom-slider-img">
                                                <picture>
                                                    <source srcSet=''/>
                                                    <img src='' alt="" />
                                                </picture>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="mainProduct__bottom-item">
                            <div className="mainProduct__bottom-setings-box">
                                
                                <div className="mainProduct__bottom-settings-brandBox brandbox">
                                    <div className="brandbox__img">
                                        <picture id="brandIcon" data-brand-icon-name='brandBig' className="loading-img">
                                            <div id="equalSidesRev" className="img-mask"></div>
                                            <source srcSet=''/>
                                            <img src='' alt="" />
                                        </picture>
                                    </div>
                                    <div className="brandbox__text-box">
                                        <div className="brandbox__title">Playtown</div>
                                        <div className="brandbox__text">Оригинальный товар</div>
                                    </div>
                                </div>
                                
                                <div className="mainProduct__bottom-select-box">
                                    <div id="prodSelectType" className="mainProduct__bottom-select-text"></div>
                                    <div className="mainProduct__bottom-select-buttons">
                                        {createSelectBtn(urlListSelects, infoListSelects)}
                                    </div>
                                </div>

                                <div className="mainProduct__bottom-params">
                                    <div className="mainProduct__bottom-param-box">
                                        <div className="mainProduct__bottom-param-box-underline"></div>
                                        <div className="mainProduct__bottom-param-title"><div>Тип</div></div>
                                        <div className="mainProduct__bottom-param-value"><div>Машинка радиоуправляемая</div></div>
                                    </div>
                                    <div className="mainProduct__bottom-param-box">
                                    <div className="mainProduct__bottom-param-box-underline"></div>
                                        <div className="mainProduct__bottom-param-title"><div>Радиус действия, м</div></div>
                                        <div className="mainProduct__bottom-param-value"><div>40</div></div>
                                    </div>
                                    <div className="mainProduct__bottom-param-box">
                                    <div className="mainProduct__bottom-param-box-underline"></div>
                                        <div className="mainProduct__bottom-param-title"><div>Артикул</div></div>
                                        <div className="mainProduct__bottom-param-value"><div>ZY1073066-1</div></div>
                                    </div>
                                    <div className="mainProduct__bottom-param-box">
                                    <div className="mainProduct__bottom-param-box-underline"></div>
                                        <div className="mainProduct__bottom-param-title"><div>Управление радиоуправляемой моделью</div></div>
                                        <div className="mainProduct__bottom-param-value"><div>Пульт Д/У</div></div>
                                    </div>
                                    <div className="mainProduct__bottom-param-box">
                                    <div className="mainProduct__bottom-param-box-underline"></div>
                                        <div className="mainProduct__bottom-param-title"><div>Частоты Wi-Fi</div></div>
                                        <div className="mainProduct__bottom-param-value"><div>2.4 ГГц</div></div>
                                    </div>
                                </div>

                                <div className="mainProduct__bottom-setings-linkDescription">Перейти к описанию</div>
                            </div> 
                        </div>
                        <div id="bottomLastItem" className="mainProduct__bottom-item">
                            <div className="mainProduct__bottom-order bchGray">
                                <div className="mainProduct__bottom-prisebox">
                                    <div className="mainProduct__bottom-newPrise">2299 ₽</div>
                                    <div className="mainProduct__bottom-oldPrise">5999 ₽</div>
                                </div>
                                {scrollWidth > 425 ? <div className="mainProduct__bottom-installment"><span>434 ₽</span> x 6 месяцев в Рассрочку</div> : ''}
                                <button id="btnProdAddBasket" data-prod-id-btn={params.idProduct} className="mainProduct__bottom-order-button">
                                    <div>Добавить в корзину </div>
                                    <div id="equalSidesRev" className="img-mask"></div>
                                    <div className="mainProduct__bottom-order-button-userNdf">Пожалуйста войдите в аккаунт</div>
                                </button>
                                <div className="mainProduct__bottom-deliveryInfo">Доставка <span>12 февраля</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="mainProduct__bottom-bottomBox">
                        <div id="reviewsBtn" className="mainProduct__bottom-reviewsImgBox">
                            {createReviews(urlListReviews)}
                        </div>
                        <div className="mainProduct__bottom-seller-info">
                            <div className="mainProduct__bottom-seller-left">
                                <div className="mainProduct__bottom-seller-logo">
                                    <picture id="brandIcon" data-brand-icon-name='brandBig' className="loading-img">
                                        <div id="equalSidesRev" className="img-mask"></div>
                                        <source srcSet=''/>
                                        <img src='' alt="" />
                                    </picture>
                                </div>
                                <div className="mainProduct__bottom-seller-textBox">
                                    <div className="mainProduct__bottom-seller-title">Продавец</div>
                                    <div className="mainProduct__bottom-seller-text">Store</div>
                                </div>
                            </div>
                            <div className="mainProduct__bottom-seller-right">
                                <div className="mainProduct__bottom-seller-right-item">
                                    <picture id="icon" data-icon-name='prod-card' className="loading-img">
                                        <div id="equalSidesRev" className="img-mask"></div>
                                        <source srcSet=''/>
                                        <img src='' alt="" />
                                    </picture>
                                    Безопасная оплата онлайн
                                </div>
                                <div className="mainProduct__bottom-seller-right-item">
                                    <picture id="icon" data-icon-name='prod-return' className="loading-img">
                                        <div id="equalSidesRev" className="img-mask"></div>
                                        <source srcSet=''/>
                                        <img src='' alt="" />
                                    </picture>
                                    Возврат 7 дней
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="reviewsBox" className="mainProduct__reviews bchGray">
                    <div className="mainProduct__reviews__container">
                        <div className="mainProduct__reviews-top">
                            <div></div><span id="reviewsBtn"></span>
                        </div>
                        <ul className="mainProduct__reviews-bottom">
                            {createReviewsItems(listReviewsText)}
                        </ul>
                    </div>
                </div>
                <div id="questionBox" className="mainProduct__reviews bchGray">
                    <div className="mainProduct__reviews__container">
                        <div className="mainProduct__reviews-top">
                            <div></div><span id="questionBtn"></span>
                        </div>
                        <ul className="mainProduct__reviews-bottom">
                            {createQuestionItems(listQuestionText)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

let mark = true
let mainImgNum = 0
function clickScrollBar(event){
    if(mark){
        const target = event.target.closest('.mainProduct__bottom-slider-item')

        const nextTargetSource = target.nextElementSibling ? target.nextElementSibling.querySelector('source') : target.querySelector('source')
        const nextTargetImg = target.nextElementSibling ? target.nextElementSibling.querySelector('img') : target.querySelector('img')
        const targetSource = target.querySelector('source')
        const targetImg = target.querySelector('img')
        const lastTargetSource = target.previousElementSibling ? target.previousElementSibling.querySelector('source') : target.querySelector('source')
        const lastTargetImg = target.previousElementSibling ? target.previousElementSibling.querySelector('img'): target.querySelector('img')

        const dataset = target.dataset;
        const mainImg = document.querySelector('.mainProduct__bottom-slider-right')
    
        mainImgNum = targetImg.closest('[data-main-img-num]').dataset.mainImgNum
        if(dataset.hasOwnProperty('mainImgNum')){
            slideFn(mainImg, nextTargetImg, nextTargetSource, targetImg, targetSource, lastTargetImg, lastTargetSource, dataset)
        }
    }
    mark = false
    setTimeout(()=>mark=true, 900)
}

function clickScrollBarArrow(event){
    const targetArrow = event.target.closest('.mainProduct__bottom-slider-arrow')
    const allProdImg = [...document.querySelectorAll('[data-main-img-num]')]

    if(mark){
        if(targetArrow.className.split(' ')[1] === 'up'){
            mainImgNum > 0 ? mainImgNum-- : ''
        }else if(targetArrow.className.split(' ')[1] === 'down'){
            mainImgNum < allProdImg.length -1 ?  mainImgNum++ : ''
        }

        let nextTargetSource; let nextTargetImg;
        if(+mainImgNum === 0){
            nextTargetSource = allProdImg[mainImgNum].querySelector('source')
            nextTargetImg = allProdImg[mainImgNum].querySelector('img')
        }else{
            nextTargetSource = allProdImg[mainImgNum -1].querySelector('source')
            nextTargetImg = allProdImg[mainImgNum -1].querySelector('img')
        }

        const targetSource = allProdImg[mainImgNum].querySelector('source')
        const targetImg = allProdImg[mainImgNum].querySelector('img')

        let lastTargetSource; let lastTargetImg;

        if(+mainImgNum === allProdImg.length -1){
            lastTargetSource = allProdImg[mainImgNum].querySelector('source')
            lastTargetImg = allProdImg[mainImgNum].querySelector('img')
        }else{
            lastTargetSource = allProdImg[mainImgNum + 1].querySelector('source')
            lastTargetImg = allProdImg[mainImgNum + 1].querySelector('img')
        }
        const dataset = allProdImg[mainImgNum].dataset
        const mainImg = document.querySelector('.mainProduct__bottom-slider-right')

        slideFn(mainImg, nextTargetImg, nextTargetSource, targetImg, targetSource, lastTargetImg, lastTargetSource, dataset)
    }
}

function slideFn(mainImg, nextTargetImg, nextTargetSource, targetImg, targetSource, lastTargetImg, lastTargetSource, dataset){
    mainImg.classList.remove('left')
    mainImg.classList.remove('right')
    const allProdImg = [...document.querySelectorAll('[data-main-img-num]')]
    allProdImg.forEach(el=>el.classList.remove('active'))

    targetImg.closest('[data-main-img-num]').classList.add('active')
    setTimeout(()=>{
        mainImg.classList.add('change');
        [...mainImg.children].forEach(el=>{
            if(el.id === 'mainImg'){
                const mainItems = [...document.querySelector('.mainProduct__bottom-slider-box').children]

                mainItems[0].querySelector('picture').querySelector('source').setAttribute('srcSet', targetSource.getAttribute('srcSet'))
                mainItems[0].querySelector('picture').querySelector('img').setAttribute('src', targetImg.getAttribute('src'))
                mainItems[2].querySelector('picture').querySelector('source').setAttribute('srcSet', targetSource.getAttribute('srcSet'))
                mainItems[2].querySelector('picture').querySelector('img').setAttribute('src', targetImg.getAttribute('src'))

                if(+dataset['mainImgNum'] > +el.dataset.id){
                    mainImg.classList.add('left')
                }else if(+dataset['mainImgNum'] < +el.dataset.id){
                    mainImg.classList.add('right')
                }

                setTimeout(()=>{
                    if(lastTargetSource){
                        mainItems[0].querySelector('picture').querySelector('source').setAttribute('srcSet', lastTargetSource.getAttribute('srcSet'))
                        mainItems[0].querySelector('picture').querySelector('img').setAttribute('src', lastTargetImg.getAttribute('src'))
                    }
                    
                    mainItems[1].querySelector('picture').querySelector('source').setAttribute('srcSet', targetSource.getAttribute('srcSet'))
                    mainItems[1].querySelector('picture').querySelector('img').setAttribute('src', targetImg.getAttribute('src'))
                    
                    if(nextTargetSource){
                        mainItems[2].querySelector('picture').querySelector('source').setAttribute('srcSet', nextTargetSource.getAttribute('srcSet'))
                        mainItems[2].querySelector('picture').querySelector('img').setAttribute('src', nextTargetImg.getAttribute('src'))
                    }
                },400)

                el.querySelector('source').setAttribute('srcSet', targetSource.getAttribute('srcSet'))
                el.querySelector('img').setAttribute('srcSet', targetImg.getAttribute('src'))
                el.setAttribute('data-id', dataset['mainImgNum'])
            }
        })
    },400)

    setTimeout(()=>mainImg.classList.remove('change'),800)
}

function createReviews(urlListReviews){
    let i = 0
    if(urlListReviews[0]){
        let text = 1;
        if([1].includes(urlListReviews.length % 10)){text = ' отзыв'}
        if([2,3,4].includes(urlListReviews.length % 10)){text = ' отзыва'}
        if([5,6,7,8,9,0].includes(urlListReviews.length % 10)){text = ' отзывов'}
        
        document.getElementById('reviewsCounter').innerHTML = urlListReviews.length + text
    }
    if(urlListReviews.length > 5){
        let mapI = 0
        return urlListReviews.map(el=>{
            if(i < 5){
                return(<div id="equalSides" key={el.webp + `${i++}`} className="mainProduct__bottom-reviewsImg">
                    <picture>
                        <source srcSet={el.webp}/>
                        <img src={el.png} alt="" />
                    </picture>
                </div>)
            }else{
                if(mapI === 0){
                    mapI++
                    return(<div id="equalSides" key={el.webp + `${i++}`} className="mainProduct__bottom-reviewsImg-blur">
                        <div className="mainProduct__bottom-reviewsImg-text">+{urlListReviews.length - 5}</div>
                        <picture>
                            <source srcSet={el.webp}/>
                            <img src={el.png} alt="" />
                        </picture>
                    </div>)
                }
            }
        })
    }else{
        return urlListReviews.map(el=>{
            return(<div id="equalSides" key={el.webp + `${i++}`} className="mainProduct__bottom-reviewsImg">
                <picture>
                    <source srcSet={el.webp}/>
                    <img src={el.png} alt="" />
                </picture>
            </div>)
        })
    }
}

function createReviewsItems(urlListReviewsText){
    if(urlListReviewsText[0]){
        return urlListReviewsText.map(el=>{
            return <li key={urlListReviewsText.indexOf(el)} className="mainProduct__reviews-item">
                    <div className="mainProduct__reviews-item-top">
                        <div className="mainProduct__reviews-item-user">
                            <div id="equalSidesRev" className="mainProduct__reviews-item-user-logo">
                                <picture id="logo" data-user-uid={el.userUid} className="loading-img">
                                    <div id="equalSidesRev" className="img-mask"></div>
                                    <source srcSet=''/>
                                    <img src='' alt="" />
                                </picture>
                            </div>
                            <div className="mainProduct__reviews-item-user-name">{el.userFullName}</div>
                        </div>
                        <div className="estimation mainProduct__reviews-item-estimation">
                                <div className="estimation__items">
                                    <input id="rating__5" type="radio" value="5" className="estimation__item" name="rating"/>
                                    <label htmlFor="rating__5" className="estimation__label"></label>
                                    <input id="rating__4" type="radio" value="4" className="estimation__item" name="rating"/>
                                    <label htmlFor="rating__4" className="estimation__label"></label>
                                    <input id="rating__3" type="radio" value="3" className="estimation__item" name="rating"/>
                                    <label htmlFor="rating__3" className="estimation__label"></label>
                                    <input id="rating__2" type="radio" value="2" className="estimation__item" name="rating"/>
                                    <label htmlFor="rating__2" className="estimation__label"></label>
                                    <input id="rating__1" type="radio" value="1" className="estimation__item" name="rating"/>
                                    <label htmlFor="rating__1" className="estimation__label"></label>
                                </div>
                        </div>
                    </div>
                    <div className="mainProduct__reviews-item-section">
                        <div className="mainProduct__reviews-item-section-title">Достоинства</div>
                        <div className="mainProduct__reviews-item-section-text">{el.reviewsDignities}</div>
                    </div>
                    <div className="mainProduct__reviews-item-section">
                        <div className="mainProduct__reviews-item-section-title">Недостатки</div>
                        <div className="mainProduct__reviews-item-section-text">{el.reviewsDisadvantages ? el.reviewsDisadvantages: 'не указаны'}</div>
                    </div>
                </li>
        })
    }
}

function createQuestionItems(listQuestionText){
    if(listQuestionText[0]){
        let text = 1;
        if([1].includes(listQuestionText.length % 10)){text = ' вопрос'}
        if([2,3,4].includes(listQuestionText.length % 10)){text = ' вопроса'}
        if([5,6,7,8,9,0].includes(listQuestionText.length % 10)){text = ' вопросов'}
        
        document.getElementById('questionCounter').innerHTML = listQuestionText.length + text

        return listQuestionText.map(el=>{
            return <li key={listQuestionText.indexOf(el)} className="mainProduct__reviews-item">
                    <div className="mainProduct__reviews-item-top">
                        <div className="mainProduct__reviews-item-user">
                            <div id="equalSidesRev" className="mainProduct__reviews-item-user-logo">
                                <picture id="logo" data-user-uid={el.userUid} className="loading-img">
                                    <div id="equalSidesRev" className="img-mask"></div>
                                    <source srcSet=''/>
                                    <img src='' alt="" />
                                </picture>
                            </div>
                            <div className="mainProduct__reviews-item-user-name">{el.userFullName}</div>
                        </div>
                    </div>
                    <div className="mainProduct__reviews-item-section">
                        <div className="mainProduct__reviews-item-section-text">{el.question}</div>
                    </div>
                </li>
        })
    }
}

function createSliderItem(itemLinkList = []){
    let imgiteratorSelectsProd = 0
    if(itemLinkList[0]){
        document.getElementById('mainImg').querySelector('source').setAttribute('srcSet', itemLinkList[0].webp)
        document.getElementById('mainImg').querySelector('img').setAttribute('src', itemLinkList[0].png)
    }
    return itemLinkList.map(el=>{
        return <div id="equalSides" key={el.webp} data-main-img-num={imgiteratorSelectsProd++}
        className={imgiteratorSelectsProd === 1 ? "mainProduct__bottom-slider-item active" : "mainProduct__bottom-slider-item"}>
                    <picture>
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet={el.webp}/>
                        <img src={el.png} alt="" />
                    </picture> 
                </div>
        }
    )
}

function createSelectBtn(itemLinkList = [], itemInfoList = []){
    let listIterator = 0
    return itemLinkList.map(el=>{
        return <div key={el.webp} data-prod-select={itemInfoList[0] !== undefined ? itemInfoList[listIterator++] : ''}
            className={listIterator === 1 ? "mainProduct__bottom-select-button active" : "mainProduct__bottom-select-button"}>
                    <picture>
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet={el.webp}/>
                        <img src={el.png} alt="" />
                    </picture>
                </div>
        }
    )
}