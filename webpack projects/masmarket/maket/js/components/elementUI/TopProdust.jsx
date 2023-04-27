import React from 'react'

export default ({idList})=>{
    return (
        <div className="topProduct">
            <div className="topProduct__title"><span>Top product</span> have time to buy!</div>
            <div className="topProduct__products">
                {createProduts(idList)}
            </div>
        </div>
    )
}

function createProduts(idList){
    return idList.map(elem=>{
        return(
            <div id='product' data-product-id={elem} key={'topProd' + elem} className='topProduct__product loading'>
                <div id='equalSides' className="topProduct__product-top">
                    <picture id="prod" data-prod-name={elem} className="loading-img">
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=''/>
                        <img src='' alt="" />
                    </picture>
                </div>
                <div className="topProduct__product-bottom">
                    <div className="topProduct__product-oldPrise">
                        <span id='productOldPrise' className='topProduct__product-oldPrise-text'></span>
                        <span id='productSalePersent' className='topProduct__product-oldPrise-percent'></span>
                    </div>
                    <div id='productNewPrise' className="topProduct__product-newPrise"></div>
                    <div className="topProduct__product-quantity">
                        <div id='productQuantity' className="topProduct__product-quantity-text"></div>
                        <div id='productQuantityLine' className="topProduct__product-quantity-line"></div>
                    </div>
                </div>
            </div>
        )
    })
}
