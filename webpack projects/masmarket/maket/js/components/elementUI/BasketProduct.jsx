import React from "react";

export default({id, select, quantityEl})=>{
    const pcV = 
    <div className="mainBasket__list-item-left">
        <button id="inputCh" className="mainBasket__list-button-all mainBasket__list-item-checked">
            <div className="inputCh active"><input type="checked"/></div>
        </button>
        <div data-basket='img' id="equalSides" className="mainBasket__list-item-img">
            <picture id="prod" data-prod-name={id} className="loading-img">
                <div id="equalSidesRev" className="img-mask"></div>
                <source srcSet=''/>
                <img src='' alt="" />
            </picture>
        </div>
        <div className="mainBasket__list-item-textBox">
            <div id="productTitle" className="mainBasket__list-item-textBox-title"></div>
            <div className="mainBasket__list-item-textBox-params">
                <div data-prod-param='weight' className="mainBasket__list-item-textBox-param"></div>
                <div id="prodParam" className="mainBasket__list-item-textBox-param">{select}</div>
            </div>
            <div id="productInstallment" className="mainBasket__list-item-textBox-installment"></div>
        </div>
        <div className="mainBasket__list-item-priseBox">
            <div id="productNewPrise" className="mainBasket__list-item-priseBox-newPrise"></div>
            <div id="productOldPrise" className="mainBasket__list-item-priseBox-oldPrise"></div>
        </div>
    </div>;

    const mbV = 
    <div className="mainBasket__list-item-left">
        <button id="inputCh" className="mainBasket__list-button-all mainBasket__list-item-checked">
            <div className="inputCh active"><input type="checked"/></div>
        </button>
        <div data-basket='img' id="equalSides" className="mainBasket__list-item-img">
            <picture id="prod" data-prod-name={id} className="loading-img">
                <div id="equalSidesRev" className="img-mask"></div>
                <source srcSet=''/>
                <img src='' alt="" />
            </picture>
        </div>
        <div className="mainBasket__list-item-textBox">
        <div id="productTitle" className="mainBasket__list-item-textBox-title"></div>
        <div className="mainBasket__list-item-textBox-params">
            <div data-prod-param='weight' className="mainBasket__list-item-textBox-param"></div>
            <div id="prodParam" className="mainBasket__list-item-textBox-param">{select}</div>
        </div>
        <div id="productInstallment" className="mainBasket__list-item-textBox-installment"></div>
    </div>
    </div>;
    
    return(
        <div data-basket='item' id="product" data-product-id={id} className="mainBasket__list-item">
            {quantityEl(pcV,pcV,mbV)}
            <div className="mainBasket__list-item-right">
                {quantityEl('', '',
                    <div className="mainBasket__list-item-priseBox">
                        <div id="productNewPrise" className="mainBasket__list-item-priseBox-newPrise">65564<span>₽</span></div>
                        <div id="productOldPrise" className="mainBasket__list-item-priseBox-oldPrise">10253<span>₽</span></div>
                    </div>,
                    )}
                <div id="select" className="mainBasket__list-item-select">
                    <button className="mainBasket__list-item-select-button"><div id="text"></div> <span/></button>
                    <ul className="mainBasket__list-item-select-list">
                        <li id="selectItem" value={'1'} className="mainBasket__list-item-select-item selected">{1}</li>
                        {[2,3,4,5,6,7,8,9,10].map(el=>{
                            return <li key={`selectItem${el}`} 
                            id="selectItem" value={el} className="mainBasket__list-item-select-item">{el}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}