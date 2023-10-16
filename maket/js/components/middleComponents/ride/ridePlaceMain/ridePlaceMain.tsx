import ridePlaseItemImage from "@js/components/componentModules/ridePlaseItemImage/ridePlaseItemImage";
import React from "react";

const imageList: string[] = ['ridePlace', 'ridePlace', 'ridePlace']

export default ()=>{
    return <div className="delivery wrapper-component">
        <div className="delivery__title">Где кататься</div>

        <div className="delivery__item">
            <div className="delivery__item-title ridePlace">Подзаголовок</div>
            <div className="delivery__item-text ridePlace">Товарищи! постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке направлений прогрессивного развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. <br /><br />Таким образом дальнейшее развитие различных форм деятельности способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач.</div>
        
            <div className="delivery__item-image-box">
                {ridePlaseItemImage(imageList)}
            </div>
        </div>

    </div>
}