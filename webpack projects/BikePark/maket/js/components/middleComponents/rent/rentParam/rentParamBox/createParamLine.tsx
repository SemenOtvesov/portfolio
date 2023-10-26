import Image from "@js/components/componentModules/image/image"
import { TbikeRentCard, TbikeRentParamInfo } from "@js/types/state/rentStateTypes"
import React from "react"
import RentParam from "./rentParam"

type TparamCreateParamLine = {
    complete: boolean, 
    bike: TbikeRentCard,
    bikeRentParamInfo: [] | TbikeRentParamInfo
}

export default function createParamLine({complete, bike, bikeRentParamInfo}:TparamCreateParamLine){
    return (
        <div key={bike.bikeId} className="rent__param-line">
            <div className="rent__param image">
                <Image imageType="bikeImage" imageName={bike.imgRentName} sourseMod={true} modClass="reversWall"/>
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