import React from "react"

export default (props)=>{
    return(
    <div className="Advertisement__box">
        <div className="Advertisement__left">
            {contentAdvesment(props.sorce)}
        </div>
        <div className="Advertisement__right">
            <a className="Advertisement__url" href="#">www.Advertisement.com</a>
            <div className="Advertisement__right-content-box">
                <div className="Advertisement__title">Advertisement</div>
                <div className="Advertisement__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur quo 
                ipsam sit soluta quis repudiandae hic magni harum impedit temporibus exercitationem, optio dolorum et expedita 
                accusantium! Voluptas tempore sint adipisci!</div>
            </div>
            <button className="Advertisement__button">learn more</button>
        </div>
    </div>
    )
}
function contentAdvesment(sorce){
    if(sorce.type === ('img'||'jpeg'||'png'||'webp')){
        return  <picture id="adv" data-adv-name={sorce.name} className="loading-img">
                    <div id="equalSidesRev" className="img-mask"></div>
                    <source srcSet=''/>
                    <img src='' alt="" />
                </picture>
    }else{
        return <video src=''></video>
    }
}