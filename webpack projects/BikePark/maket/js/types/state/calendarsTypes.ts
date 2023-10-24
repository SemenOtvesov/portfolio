export type Tpoints = {
    startPoint: TonePoint,
    endPoint: TonePoint
}
export type TonePoint = {year?:number, month?: number, day?: number}

export type TstateCalendars = {
    selectBikeCalendar: Tpoints,
    activeTypeRentDate: TtypeRentDate,
    activeTypeRentPlase: TtypeRentPlase,
    timeStart: string
}

export type TtypeRentDate = 'day' | 'hour'
export type TtypeRentPlase = 'address' | 'pickup'