import React from "react";
import ElementAdvertisement from "@elementUI/ElementAdvertisement.jsx"

const imgPathJpg = './img/icon/png/'
const imgPathWebp = './img/icon/webp/'

export default (props)=>{
    let scrollWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    );

    return(
        <>
            {scrollWidth > 768 ? 
             <div className="mainContentFlexBox">
                {props.quantityEl( 
                    <>
                        <ElementAdvertisement type='midle' sorce={{name:"midleAdvertisement-sale-image", altText:''}}/>
                        <ElementAdvertisement type='midle' sorce={{name:"midleAdvertisement-sale-image", altText:''}}/>
                    </>,
                    <>
                        <ElementAdvertisement type='midle' sorce={{name:"midleAdvertisement-sale-image-mbv", altText:''}}/>
                        <ElementAdvertisement type='midle' sorce={{name:"midleAdvertisement-sale-image-mbv", altText:''}}/>
                    </>,
                    <ElementAdvertisement type='midle' sorce={{name:"midleAdvertisement-sale-image-mbv",className: 'mobile', altText:''}}
                />)}
            </div>
            :''}

            <div className="mainUserProfile__element">
                <div className="mainUserProfile__element-title">Мои данные</div>
                <div className="mainUserProfile__element-item-box">
                    <div className="mainUserProfile__element-item bchGray">
                        <div className="mainUserProfile__element-item-data-title ">Оформить подписку</div>
                        <div className="mainUserProfile__element-item-data-main">
                            <picture id="icon" data-icon-name='user-prem' className="loading-img">
                                <div id="equalSidesRev" className="img-mask"></div>
                                <source srcSet=''/>
                                <img src='' alt="" />
                            </picture>
                            <span>Premium</span>
                        </div>
                    </div>
                    <div className="mainUserProfile__element-item bchGray">
                    <div className="mainUserProfile__element-item-data-title">Балы и бонусы</div>
                        <div className="mainUserProfile__element-item-data-main">
                            <picture id="icon" data-icon-name='user-point' className="loading-img">
                                <div id="equalSidesRev" className="img-mask"></div>
                                <source srcSet=''/>
                                <img src='' alt="" />
                            </picture>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mainUserProfile__element">
                <div className="mainUserProfile__element-title">Финансы</div>
                <div className="mainUserProfile__element-item-box">
                    <div className="mainUserProfile__element-item notHover bigItem bchGray">
                    <div className="mainUserProfile__element-item-data-title">Используйте промокод</div>
                        <form className="mainUserProfile__element-item-form" action="">
                            <input onInput={inputDisabledFn} className="mainUserProfile__element-item-input" 
                            type="text" placeholder="Введите промокод или сертификат" />
                            <button disabled className="mainUserProfile__element-item-button">Применить</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="mainUserProfile__element ">
                <div className="mainUserProfile__element-title">Сервис и помощь</div>
                <div className="mainUserProfile__element-item-box ">
                    <div className="mainUserProfile__element-item bchGray">Условия оплаты</div>
                    <div className="mainUserProfile__element-item bchGray">Условия возврата</div>
                </div>
            </div>
        </>
    )
}

function inputDisabledFn(event){
    const button = event.target.nextSibling
    if(!!event.target.value){
        button.classList.add('unlock')
        button.disabled = false
    }else{
        button.classList.remove('unlock')
        button.disabled = true
    }
}
