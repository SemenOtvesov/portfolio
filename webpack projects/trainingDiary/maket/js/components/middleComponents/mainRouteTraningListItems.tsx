import { numberText } from "@mainFunctions/numberText"
import { ItraningList } from "@js/types/componentsTypes"
import React from "react"
import { TtrainingInfo, TuserUid } from "@js/types/stateTypes"

export default (trainingList?: ItraningList, trainingListKeys?: string[], userUid?: TuserUid, activeTraining?: undefined | string)=>{
    if(trainingList ? !trainingList[0] : true){
        return <>
                <div className="main__right-warn">
                    У вас пока что нет тренировок
                </div>
            </>
    }
    let iteratorEl: number = 0
    return trainingList?.map(el=>{

        return <li 
                    id="training" 
                    data-training-number={trainingListKeys ? trainingListKeys[iteratorEl] : ''} 
                    key={Math.random()} 
                    className={(activeTraining ? +activeTraining : NaN) === +iteratorEl ? "main__right-item active": 'main__right-item'}
                >
                    {createPictureParams(el, userUid, trainingListKeys? trainingListKeys[iteratorEl++]: undefined)}
                    <div className="main__right-item-content">
                        <div id="changeSize"
                            data-full-content={el.name}
                            className="main__right-item-title">
                            {el.name}
                        </div>
                        <div className="main__right-item-text">{numberText(el.quantityApproach, ['упражнение', 'упражнения', 'упражнений'])}</div>
                    </div>
                </li>
    })
}
function createPictureParams(el: TtrainingInfo, userUid: TuserUid, iteratorEl: string | undefined){
    if(el.previewName === 'User icon'){
        return <picture 
                data-image-type="previews" 
                data-user-uid={userUid}
                data-training-number={iteratorEl}
                className="main__right-item-preview"
                >
                    <div id="equalSidesRev" className="img-mask"></div>
                    <source srcSet=''/>
                    <img src='' alt="" />
            </picture>
    }

    return <picture 
            data-image-type="previews" 
            data-preview-name={el.previewName}
            data-training-number={iteratorEl}
            className="main__right-item-preview"
            >
                <div id="equalSidesRev" className="img-mask"></div>
                <source srcSet=''/>
                <img src='' alt="" />
        </picture>
}