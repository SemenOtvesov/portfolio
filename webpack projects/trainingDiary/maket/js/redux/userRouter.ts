import { firebaseConfig } from "@firebaseFolder/firebaseInit";
import { sendingImgToServer } from "@js/mainFunctions/events/window/windowListenerChange";
import { ItraningList, TapproachInfo, TexerciseList, Ttraining } from "@js/types/componentsTypes";
import { Ilogin, Iuser, Tstate, TtrainingInfo, TuserUid } from "@js/types/stateTypes";
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    'userRouter/login',
    async ({userUid, userInfo}: Ilogin)=>{
        if(Object.keys(userInfo).includes('name')){
            await postUser(userUid, userInfo)
        }
        
        return await fetchUser(userUid)
    }
)

export const addTraining = createAsyncThunk(
    'userRouter/addTraining',
    async ({name, previewName, quantityApproach, exercisesList}: TtrainingInfo, info)=>{
        const prevState: any = info.getState()

        const userUid = prevState.userRouter.userUid
        const trainingListKeys = prevState.userRouter.user.trainingListKeys
        if(!userUid){return}
        
        return requestAddTraining(
            userUid, 
            {name, previewName, quantityApproach, exercisesList}, 
            trainingListKeys
        )
    }
)
export const deleteTraining = createAsyncThunk(
    'userRouter/deleteTraining',
    async ({und}: {und: undefined}, info)=>{
        const prevState: any = info.getState()

        const userUid = prevState.userRouter.userUid
        const activeTraining: string = prevState.userRouter.activeTraining
        if(!userUid){return}
        if(!activeTraining){return}
        
        return await requestDeleteTraining(userUid, activeTraining)
    }
)

export const addExercise = createAsyncThunk(
    'userRouter/addExercise',
    async ({name}: {name: string}, info)=>{
        const prevState: any = info.getState()

        const userUid = prevState.userRouter.userUid
        const activeTraining: string = prevState.userRouter.activeTraining
        const exercisesListLenght: number = prevState.userRouter.activeTrainingExercisesList.length
        if(!userUid){return}
        if(!activeTraining){return}
        
        return requestAddExercise(userUid, name, activeTraining, exercisesListLenght)
    }
)
export const deleteExercise = createAsyncThunk(
    'userRouter/deleteExercise',
    async ({name}: {name: string}, info)=>{
        const prevState: any = info.getState()

        const userUid = prevState.userRouter.userUid
        const activeTraining = prevState.userRouter.activeTraining
        const exercisesListLenght: number = prevState.userRouter.activeTrainingExercisesList.length
        if(!userUid){return}
        if(!activeTraining){return}

        return requestDeleteExercise(userUid, name, activeTraining, exercisesListLenght)
    }
)

export const addApproach = createAsyncThunk(
    'userRouter/addApproach',
    async ({nameExercise, approachInfo}: {nameExercise: string, approachInfo: TapproachInfo}, thunkAPI)=>{
        const prevState: any = thunkAPI.getState()

        const userUid = prevState.userRouter.userUid
        const activeTraining = prevState.userRouter.activeTraining
        if(!userUid){return}
        if(!activeTraining){return}

        let approachListLength = 0
        const exercisesList: TexerciseList = prevState.userRouter.activeTrainingExercisesList
        exercisesList.forEach((el)=>{
            if(el.exerciseName === nameExercise){
                approachListLength = el.approachList != undefined ? el.approachList.length + 1 : 1
            }
        })

        return requestAddApproach(userUid, nameExercise, activeTraining, approachInfo, approachListLength)
    }
)
export const deleteApproach = createAsyncThunk(
    'userRouter/deleteApproach',
    async ({nameExercise, exerciseId}: {nameExercise:string, exerciseId: number}, info)=>{
        const prevState: any = info.getState()

        const userUid = prevState.userRouter.userUid
        const activeTraining = prevState.userRouter.activeTraining
        if(!userUid){return}
        if(!activeTraining){return}

        let approachListLength = 0
        const exercisesList: TexerciseList = prevState.userRouter.activeTrainingExercisesList
        exercisesList.forEach((el)=>{
            if(el.exerciseName === nameExercise){
                approachListLength = el.approachList != undefined ? el.approachList.length : 1
            }
        })

        return requestDeleteApproach(userUid, nameExercise, activeTraining, exerciseId, approachListLength)
    }
)

export const userRouter = createSlice({
    name: 'userRouter',
    initialState: {
        user: {},
        userInfo: {},
        userUid: undefined,
        activeTraining: undefined,
        activeTrainingExercisesList: undefined
    },
    reducers: {
        setUserInfo(state, action){
            state.userInfo = action.payload
        },
        setUserUid(state, action){
            state.userUid = action.payload
        },
        logout(state){
            Object.values(state.user)[0] ? state.user = {} : '',
            Object.values(state.userInfo)[0] ? state.userInfo = {} : '',
            state.userUid ?  undefined : ''
        },
        setActiveTrainingRedux(state, action){
            state.activeTraining = action.payload
        },
        setActiveTrainingExercisesListRedux(state, action){
            if(action.payload === undefined){return}
            state.activeTrainingExercisesList = action.payload
        },
    },
    extraReducers: (builder)=>{
        builder.addCase(login.fulfilled, (state: Tstate, action)=>{
            state.user = action.payload
        }),

        builder.addCase(addTraining.fulfilled, (state: Tstate, action)=>{
            if(!action.payload){return}
            if(state.user.trainingList){
                state.user.trainingList.push(action.payload.trainingInfo)
                state.user.trainingListKeys?.push(action.payload.trainingKey)
            }else{
                state.user.trainingList = [action.payload.trainingInfo]
                state.user.trainingListKeys = [action.payload.trainingKey]
            }
        }),

        builder.addCase(deleteTraining.fulfilled, (state: Tstate, action)=>{
            if(action.payload == undefined){return}

            const deleteTrainingKey = state.user.trainingListKeys?.indexOf(action.payload)
            if(typeof deleteTrainingKey != 'number'){return}
            if(!state.user.trainingList){return}

            let idtraining = 0
            state.user.trainingList = state.user.trainingList.filter(el=>{
                if(idtraining++ != +deleteTrainingKey){
                    return current(el)
                }
            })
            let idkey = 0
            state.user.trainingListKeys = state.user.trainingListKeys?.filter(el=>{
                if(idkey++ != +deleteTrainingKey){
                    return el
                }
            })
            
            state.activeTraining = undefined
        }),

        builder.addCase(addExercise.fulfilled, (state: Tstate, action)=>{
            if(!action.payload){return}
            if(!state.user.trainingList){return}
            if(!action.payload.trainingNumber){return}
            
            const training = searchTrainig(state.user.trainingList, state.user.trainingListKeys, action.payload.trainingNumber)
            
            if(!training){return}
            training.exercisesList.push({
                exerciseName: action.payload.exerciseName,
                quantityApproach: 0
            })
            state.activeTrainingExercisesList = training.exercisesList
            training.quantityApproach = action.payload.quantityApproach + 1
        }),

        builder.addCase(deleteExercise.fulfilled, (state: Tstate, action)=>{
            if(!action.payload){return}
            if(!state.user.trainingList){return}
            if(!action.payload.activeTraining){return}
            if(!action.payload.name){return}

            const training = searchTrainig(state.user.trainingList, state.user.trainingListKeys, action.payload.activeTraining)
            
            if(!training){return}
            training.exercisesList = training.exercisesList.filter(el=>{
                if(el.exerciseName !== action.payload?.name){
                    return el
                }
            })
            state.activeTrainingExercisesList = training.exercisesList
            training.quantityApproach = action.payload.quantityApproach - 1
        }),

        builder.addCase(addApproach.fulfilled, (state: Tstate, action)=>{
            if(!action.payload){return}
            if(!state.user.trainingList){return}
            if(!action.payload.activeTraining){return}

            const training = searchTrainig(state.user.trainingList, state.user.trainingListKeys, action.payload.activeTraining)
            
            if(!training){return}
            training.exercisesList = training.exercisesList.filter(el=>{
                if(el.exerciseName === action.payload?.nameExercise){
                    if(el.approachList){
                        el.approachList.push(action.payload.approachInfo)
                    }else{
                        el.approachList = [action.payload.approachInfo]
                    }
                    el.quantityApproach = action.payload.approachListLength
                    return el
                }
                return el
            })
            state.activeTrainingExercisesList = training.exercisesList
        }),

        builder.addCase(deleteApproach.fulfilled, (state: Tstate, action)=>{
            if(!action.payload){return}
            if(!state.user.trainingList){return}
            if(!action.payload.activeTraining){return}

            const training = searchTrainig(state.user.trainingList, state.user.trainingListKeys, action.payload.activeTraining)
            
            if(!training){return}
            training.exercisesList = training.exercisesList.filter(el=>{
                if(el.exerciseName === action.payload?.nameExercise){
                    const approachList: any[] = []
                    let id = 0
                    el.approachList?.forEach(el=>{
                        if(id++ != action.payload?.approachId){
                            approachList.push(current(el))
                        }
                    })
                    el.approachList = approachList
                    el.quantityApproach = action.payload.approachListLength - 1
                    return el
                }
                return el
            })
            state.activeTrainingExercisesList = training.exercisesList
        })
    }
})

export const {setUserInfo, setUserUid, logout, setActiveTrainingRedux, setActiveTrainingExercisesListRedux} = userRouter.actions

async function fetchUser(userUid: TuserUid){
    return await fetch(`${firebaseConfig.databaseURL}userList/${userUid}.json`).then(rez=>rez.json()).then((rez: Iuser)=>{
        if(rez != undefined){
            if(!rez.trainingList){
                rez.trainingList = []
                rez.trainingListKeys = []
            }else{
                rez.trainingListKeys =  Object.keys(rez.trainingList)
                rez.trainingList = Object.values(rez.trainingList)
            }

            rez.trainingList?.forEach(el=>{
                if(el.exercisesList){
                    el.exercisesList = Object.values(el.exercisesList)
                    el.exercisesList.forEach(exercise=>{
                        if(exercise.approachList){
                            exercise.approachList = Object.values(exercise.approachList)
                        }else{
                            exercise.approachList = []
                        }
                    })
                }else{
                    el.exercisesList = []
                }
            })
            return rez
        }
        return {}
    })
}
async function postUser(
    userUid: TuserUid, 
    userInfo: {}
    ){
    return await fetch(`${firebaseConfig.databaseURL}userList/${userUid}.json`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userInfo)
    }).then(rez=> userInfo)
}

async function requestAddTraining(
    userUid: TuserUid, 
    trainingInfo: TtrainingInfo, 
    trainingListKeys: string[]
    ){
        const trainingKey: string = creacteKey(trainingListKeys)
        return await fetch(`${firebaseConfig.databaseURL}userList/${userUid}/trainingList/${trainingKey}.json`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(trainingInfo)
        }).then(async rez=> {
            if(trainingInfo.previewName === 'User icon'){
                await sendingImgToServer(userUid, trainingKey).then(ret=>trainingInfo)
            }
            return {trainingInfo, trainingKey}
        })
}
async function requestDeleteTraining(
    userUid: TuserUid, 
    activeTraining: string
    ){
    return await fetch(`${firebaseConfig.databaseURL}userList/${userUid}/trainingList/${activeTraining}.json`, {
        method: 'DELETE'
    }).then(rez=>activeTraining)
}

async function requestAddExercise(
    userUid: TuserUid, 
    name: string, 
    activeTraining: undefined | string, 
    exercisesListLenght: number
    ){

    let requestCheck = false
    await fetch(`${firebaseConfig.databaseURL}userList/${userUid}/trainingList/${activeTraining}/exercisesList.json`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({exerciseName: name, trainingNumber: activeTraining, quantityApproach: 0})
    }).then(rez=> {
        requestCheck = true
    })
    if(requestCheck){
        return await fetch(`${firebaseConfig.databaseURL}userList/${userUid}/trainingList/${activeTraining}/quantityApproach.json`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(exercisesListLenght + 1)
        }).then(rez=> {
            return {exerciseName: name, trainingNumber: activeTraining, quantityApproach: exercisesListLenght}
        })
    }
}
async function requestDeleteExercise(
    userUid: TuserUid, 
    name: string, 
    activeTraining: undefined | string, 
    exercisesListLenght: number
    ){
    let deleteKey: string = ''
    await fetch(`${firebaseConfig.databaseURL}userList/${userUid}/trainingList/${activeTraining}/exercisesList.json?orderBy="exerciseName"&equalTo="${name}"`).then(rez=>rez.json()).then(rez=>{
        deleteKey = Object.keys(rez)[0]
    })
    let requestCheck = false
    await fetch(`${firebaseConfig.databaseURL}userList/${userUid}/trainingList/${activeTraining}/exercisesList/${deleteKey}.json`, {
        method: 'DELETE'
    }).then(rez=>{
        requestCheck = true
    })
    if(requestCheck){
        return await fetch(`${firebaseConfig.databaseURL}userList/${userUid}/trainingList/${activeTraining}/quantityApproach.json`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(exercisesListLenght - 1)
        }).then(rez=> {
            return {name, activeTraining, quantityApproach: exercisesListLenght}
        })
    }
}

async function requestAddApproach(
    userUid: TuserUid, 
    nameExercise: string, 
    activeTraining: undefined | string, 
    approachInfo: TapproachInfo, 
    approachListLength: number
    ){
    const keyFetchPath = `userList/${userUid}/trainingList/${activeTraining}/exercisesList.json?orderBy="exerciseName"&equalTo="${nameExercise}"`
    let keyFetch: string = ''
    await fetch(`${firebaseConfig.databaseURL}${keyFetchPath}`).then(rez=>rez.json()).then(rez=>{
        keyFetch = Object.keys(rez)[0]
    })
    
    if(keyFetch == undefined || keyFetch == ''){return}
    
    let requestKey = false
    const path = `userList/${userUid}/trainingList/${activeTraining}/exercisesList/${keyFetch}/`
    await fetch(`${firebaseConfig.databaseURL}${path}approachList.json`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(approachInfo)
    }).then(rez=> requestKey = true)

    if(requestKey){
        return await fetch(`${firebaseConfig.databaseURL}${path}quantityApproach.json`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(approachListLength)
        }).then(rez=>{
            return {approachInfo, activeTraining, nameExercise, approachListLength}
        })
    }
}
async function requestDeleteApproach(
    userUid: TuserUid, 
    nameExercise: string, 
    activeTraining: undefined | string, 
    approachId: number, 
    approachListLength: number
    ){
    const keyFetchPath = `userList/${userUid}/trainingList/${activeTraining}/exercisesList.json?orderBy="exerciseName"&equalTo="${nameExercise}"`
    let keyFetch: string = ''
    await fetch(`${firebaseConfig.databaseURL}${keyFetchPath}`).then(rez=>rez.json()).then(rez=>{
        keyFetch = Object.keys(rez)[0]
    })
    
    if(keyFetch == undefined || keyFetch == ''){return}
    
    let deleteKey: string = ''
    const path = `userList/${userUid}/trainingList/${activeTraining}/exercisesList/${keyFetch}/`
    await fetch(`${firebaseConfig.databaseURL}${path}approachList.json`).then(rez=> rez.json()).then(rez=>{
        const keys = Object.keys(rez)
        deleteKey = keys[approachId]
    })

    let requestKey = false
    if(!deleteKey){return}
    await fetch(`${firebaseConfig.databaseURL}userList/${userUid}/trainingList/${activeTraining}/exercisesList/${keyFetch}/approachList/${deleteKey}.json`, {
            method: 'DELETE'
        }).then(rez=>{
            requestKey = true
        })

    if(requestKey){
        return await fetch(`${firebaseConfig.databaseURL}${path}quantityApproach.json`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(approachListLength - 1)
        }).then(rez=>{
            return {activeTraining, nameExercise, approachListLength, approachId}
        })
    }
}




function creacteKey(initArr: string[]): string{
    function callback(){
        let key = ''
        for (let i = 0; i < 28; i++) {
            let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            function randomIntFromInterval(min: number, max: number) {
                return Math.floor(Math.random() * (max - min + 1) + min)
            }
            key += arr_en[randomIntFromInterval(0, arr_en.length-1)]
        }
        if(initArr.includes(key)){
            callback()
        }else{
            return key
        }
    }
    return callback() || ''
}
function searchTrainig(
    trainingList: ItraningList, 
    trainingListKeys: string[] | undefined,
    activeTraining: string
    ): Ttraining | undefined{
        const trainingId = trainingListKeys?.indexOf(activeTraining)
        let id = 0

        let returnTraining: Ttraining | undefined
        if(typeof trainingId !== 'number'){return undefined}
        if(trainingId === undefined){return undefined}
        trainingList?.forEach(training=>{
            if(id++ === +trainingId){
                returnTraining = training
            }
        })
        return returnTraining
}