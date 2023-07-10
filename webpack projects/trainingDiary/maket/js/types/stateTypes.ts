import { ItraningList, TexerciseList } from "./componentsTypes"

export interface userStateInterfase {
    userRouter: {
        user: Iuser,
        userInfo: {}
        userUid: string | undefined,
        activeTraining: string | undefined
    },
    chartRouter: {
        activeApproachsDoughnut: string[],
        activeApproachsBar: string[]
    }
}

export type TuserUid = string | undefined

export type Tstate = {
    user: Iuser, 
    userInfo: {}, 
    userUid: undefined | string, 
    activeTraining: undefined | number,
    activeTrainingExercisesList: undefined | TexerciseList}
export type TprevState = {userRouter?: Tstate}

export interface Ilogin{
    userUid: TuserUid,
    userInfo: {},
}

export interface Iuser {
    name?: string,
    mail?: string,
    pass?: string,
    phone?: string,
    trainingList?: ItraningList,
    trainingListKeys?: string[]
}

export type TtrainingInfo = {name: string, previewName: string, quantityApproach: number, exercisesList: TexerciseList}
export type TaddTraining = {
    userUid: TuserUid,
    trainingInfo: TtrainingInfo
}

export type TChartState = {
    activeApproachsDoughnut: string[],
    activeApproachsBar: string[]
} 