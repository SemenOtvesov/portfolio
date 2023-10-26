export type TbikeRentInfo = Array<TbikeRentInfoEl>
export type TbikeRentInfoEl = {
    type: string, 
    cards: Array<TbikeRentCard>
}
export type TbikeRentCard = {
    bikeId: number,
    brandName: string, 
    imgName: string,
    imgRentName: string, 
    title: string, 
    prise: number,
    checkRent: boolean,
    typeBike: TactiveBikeEl
    rentInfo?: {
        startRent: string, 
        finishRent: string,
        userUidRent: string
    }
}

export type TrentState = {
    bikeRentInfo: [] | TbikeRentInfo,
    activeBike: TactiveBike,
    activeBikeSize: TactiveBikeSize
    activeBikeBrand: TactiveBikeBrand
    localBikeInfo: [] | TbikeRentInfo,
    bikeRentParamInfo: [] | TbikeRentParamInfo
}

export type TactiveBike = Array<'alum' | 'carbon' | 'mountain' | 'city' | string>
export type TactiveBikeEl = 'alum'| 'carbon' | 'mountain' | 'city'
export type TactiveBikeSize = 'all' | 'Schwinn' | 'Merida' | 'Trek' | 'Cannondale' | 'Kona' | 'Cube' | 'Scott'| 'Santa Cruz'
export type TactiveBikeBrand = 'all' | 'XS' | 'S' | 'S/M' | 'M' | 'L' | 'XL' | 'XXl'
export type TtypePayment = 'online' | 'plase'
export type TbikeRentParamInfo = Array<{bikeId: number, helmet?: boolean, lantern?: boolean, lock?: boolean}>