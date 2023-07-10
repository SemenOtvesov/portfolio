import { Iuser } from "./stateTypes"

export type ItraningList = Array<{
    name: string, 
    previewName: string, 
    quantityApproach: number,
    exercisesList: TexerciseList
}>
export type Ttraining = {
    name: string, 
    previewName: string, 
    quantityApproach: number,
    exercisesList: TexerciseList
}

export type TexerciseList = Array<{
    exerciseName: string, 
    quantityApproach: number, 
    approachList?: Array<TapproachInfo>
}>

export type TapproachInfo = {weight: number, repetitions: number}

export type TsetState = (newValue: any) => void

export type ToutletContext = {
    user: Iuser, 
    scrollWidth: number,
    activeTraining: undefined | string
}