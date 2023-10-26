import Image from "@componentModules/image/image";
import React from "react";

export default ()=>{
    return <div className="delivery wrapper-component">

        <div className="delivery__item">
            <div className="delivery__item-title">О нас</div>
        
            <div className="delivery__item-text-box">
                <div className="delivery__item-text ridePlace image">Товарищи! постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке направлений прогрессивного развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. <br /><br />Таким образом дальнейшее развитие различных форм деятельности способствует подготовки и реализации позиций, занимаемых участниками в отношении.</div>
                <div className="delivery__item-imageBox">
                    <Image imageType="image" imageName="info" sourseMod={true}/>
                </div> 
            </div>
        </div>

    </div>
}