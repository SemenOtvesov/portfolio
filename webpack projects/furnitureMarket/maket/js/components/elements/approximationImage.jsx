import React from "react";

export default ({local, imageName})=>{
    return <picture data-image-type='image' data-local={local} data-image-name={imageName} className="approximationPicture loading-img">
                <div id="equalSidesRev" className="approximationPicture__mask img-mask"></div>
                <source srcSet=""/>
                <img src="" alt="" />
            </picture>
}