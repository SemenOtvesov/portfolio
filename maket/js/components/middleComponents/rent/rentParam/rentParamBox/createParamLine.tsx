import Image from "@js/components/componentModules/image/image"
import { Tdispatch } from "@js/types/state/allState"
import { TbikeRentCard, TbikeRentParamInfo } from "@js/types/state/rentStateTypes"
import React from "react"
import RentParam from "./rentParam"

type TparamCreateParamLine = {
    complete: boolean, 
    bike: TbikeRentCard, 
    dispatch: Tdispatch,
    bikeRentParamInfo: [] | TbikeRentParamInfo
}

export default function createParamLine({complete, bike, dispatch, bikeRentParamInfo}:TparamCreateParamLine){
    return (
        <div key={bike.bikeId} className="rent__param-line">
            <div className="rent__param image">
                <Image imageType="bikeImage" imageName={bike.imgName} sourseMod={true}/>
            </div>
            <div className={!complete ? "rent__param text": "rent__param text big"}>{bike.title}</div>
            {
                !complete ? 
                <>
                    <RentParam 
                        bikeId={bike.bikeId}
                        type='helmet'
                        bikeRentParamInfo={bikeRentParamInfo}
                    />
                    <RentParam 
                        bikeId={bike.bikeId}
                        type='lantern'
                        bikeRentParamInfo={bikeRentParamInfo}
                    />
                    <RentParam 
                        bikeId={bike.bikeId}
                        type='lock'
                        bikeRentParamInfo={bikeRentParamInfo}
                    />
                </>
                : ''
            }
            <div className="rent__param prise">{bike.prise} AED</div>
        </div>
    )
}