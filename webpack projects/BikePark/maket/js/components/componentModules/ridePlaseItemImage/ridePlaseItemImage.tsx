import React from "react";
import Image from "@componentModules/image/image";

export default (imageList: string[])=>{
    if(imageList.length === 4){
        return imageList.map(imageName=>{
            return (
                <div key={Math.random()}>
                    <div className="delivery__item-image mini">
                        <Image imageName={imageName} imageType="image" sourseMod={true}/>
                    </div>
                    <div className="delivery__item-image-text">Товарищи! постоянный количественный рост и сфера нашей активности позволяет </div>
                </div>
                )
        })
    }
    if(imageList.length === 3){
        return imageList.map(imageName=>{
            return (
                <div key={Math.random()} className="delivery__item-image big">
                    <Image imageName={imageName} imageType="image" sourseMod={true}/>
                </div>
                )
        })
    }
    return ''
}