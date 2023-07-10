export type setScrollWidthType = (a: number)=> void
export type setRerender = (a: number)=> void
export type setTrainingRenderFrames = ({start, end}:{start: number, end: number})=> void
export type setPaginationArray = (
        a:((arr: number[])=>number[]) | number[]
    )=> void

export interface layoutInterface {
    scrollWidth: number,
    activeTraining: undefined | string
}