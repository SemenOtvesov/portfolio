import ridePlaseItemImage from "@componentModules/ridePlaseItemImage/ridePlaseItemImage";
import Image from "@componentModules/image/image";
import React from "react";

const imageList: string[] = ['ridePlace', 'ridePlace', 'ridePlace', 'ridePlace']

export default ()=>{
    return <div className="delivery wrapper-component">

        <div className="delivery__item">
            <div className="delivery__item-title ridePlace">Подзаголовок</div>
        
            <div className="delivery__item-text-box">
                <div className="delivery__item-text ridePlace image">Товарищи! постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке направлений прогрессивного развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. <br /><br />Таким образом дальнейшее развитие различных форм деятельности способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач.</div>
                <div className="delivery__item-imageBox" id="aspectSidesRev" data-aspect="0.66">
                    <Image imageType="image" imageName="ridePlace" sourseMod={true}/>
                </div>
            </div>
        </div>

        <div className="delivery__item">
            <div className="delivery__item-title ridePlace">Условия аренды</div>
            <div className="delivery__item-text ridePlace">Товарищи! постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке направлений прогрессивного развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. <br /><br />Таким образом дальнейшее развитие различных форм деятельности способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач.</div>
        
            <div className="delivery__item-image-box">
                {ridePlaseItemImage(imageList)}
            </div>
        </div>

    </div>
}