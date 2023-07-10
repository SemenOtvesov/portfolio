import React from "react";

type TitemsList = Array<{
    type: string
    name?: string,
    iconName?: string,
}>

export default(itemsList: TitemsList)=>{
    return itemsList.map(item=>{
        if(item.type === 'user'){
            return <li key={Math.random()} id="selectItem" value={'User icon'} className="main__left-select-item file">
                    <div className="main__left-input-text">Выберите файл</div>
                    <input id="selectInput" type="file" accept="image/png" className="main__left-input file"/>
                </li>
        }

        return <li key={item.iconName} id="selectItem" value={item.name} className="main__left-select-item">
            <picture 
                className='loading-img main__left-select-item-icon' 
                data-image-type='previews' 
                data-preview-name={item.iconName}
            >
                <div id='equalSidesRev' className='img-mask'/>
                <source srcSet=''/>
                <img src='' alt='' />
            </picture>
            <div className="main__left-select-item-text">{item.name}</div>
        </li>
    })
}