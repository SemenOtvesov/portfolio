import React from "react"

export default (props)=>{
    return(
        <button className={buttonClass(props)}>
            <picture id="adv" data-adv-name={props.sorce.name} className="loading-img">
                <div id="equalSidesRev" className="img-mask"></div>
                <source srcSet=''/>
                <img src='' alt="" />
            </picture>
        </button>
    )
}

function buttonClass(props){
    if(props.sorce.className){
        return props.type + 'Advertisement comonAdv ' + props.sorce.className
    }else{
        return props.type + 'Advertisement comonAdv '
    }
}