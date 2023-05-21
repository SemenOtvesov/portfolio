import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { firebaseConfig } from "@firebaseFolder/firebaseInit";


export const getUser = createAsyncThunk(
    'userSlise/getUser',
    async (userUid)=>{
        return fetch(`${firebaseConfig.databaseURL}userList/${userUid}.json`).then(rez=> rez.json())
    }  
)
export const setUser = createAsyncThunk(
    'userSlise/setUser',
    async ({userUid, userData})=>{
        await fetch(`${firebaseConfig.databaseURL}userList/${userUid}.json`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userData)
        })

        return userData
    }  
)

export const addFollow = createAsyncThunk(
    'userSlise/addFollow',
    async ({userUid, prod})=>{
        await fetch(`${firebaseConfig.databaseURL}userList/${userUid}/favouritesList.json`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(prod)
        })

        return prod
    }  
)
export const deleteUserFavour = createAsyncThunk(
    'userSlise/deleteUserFavour',
    async ({userUid, imageName})=>{
        let deleteId;
        await fetch(`${firebaseConfig.databaseURL}userList/${userUid}/favouritesList.json?orderBy="imageName"&equalTo="${imageName}"`).then(rez=>rez.json()).then(rez=>{
            deleteId = Object.keys(rez)[0]
        })
        if(deleteId){
            return await fetch(`${firebaseConfig.databaseURL}userList/${userUid}/favouritesList/${deleteId}.json`, {
                method: "DELETE"
            }).then(rez=> imageName)
        }else{
            return new Proxy((rez, rej)=>rej())
        }
    }  
)

export const addBasket = createAsyncThunk(
    'userSlise/addBasket',
    async ({userUid, prod})=>{
        await fetch(`${firebaseConfig.databaseURL}userList/${userUid}/basketList.json`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(prod)
        })

        return prod
    }  
)
export const deleteUserBasket = createAsyncThunk(
    'userSlise/deleteUserBasket',
    async ({userUid, imageName})=>{
        let deleteId;
        await fetch(`${firebaseConfig.databaseURL}userList/${userUid}/basketList.json?orderBy="imageName"&equalTo="${imageName}"`).then(rez=>rez.json()).then(rez=>{
            deleteId = Object.keys(rez)[0]
        })
        if(deleteId){
            return await fetch(`${firebaseConfig.databaseURL}userList/${userUid}/basketList/${deleteId}.json`, {
                method: "DELETE"
            }).then(rez=> imageName)
        }else{
            return new Proxy((rez, rej)=>rej())
        }
    }  
)

export const userSlise = createSlice({
    name: 'userSlise',
    initialState: {
        user: [],
        includes: null,
    },
    reducers:{
        logOut(state){
            state.user = [],
            state.includes = null
        }
    },
    extraReducers: {
        [getUser.fulfilled]: (state, action)=>{
            state.user = action.payload || []
            if(action.payload){
                state.includes = true

                if(state.user.favouritesList){
                    state.user.favouritesList = Object.values(state.user.favouritesList)
                }
                if(state.user.basketList){
                    state.user.basketList = Object.values(state.user.basketList)
                }
            }else{state.includes = false}
        },
        [setUser.fulfilled]: (state, action)=>{
            state.user = action.payload
        },

        [addFollow.fulfilled]: (state, action)=>{
            if(state.user.favouritesList){
                state.user.favouritesList.push(action.payload)
            }else{
                state.user.favouritesList = [action.payload]
            }
        },
        [deleteUserFavour.fulfilled]: (state, action)=>{
            state.user.favouritesList = state.user.favouritesList.filter(el=> el.imageName !== action.payload)
        },

        [addBasket.fulfilled]: (state, action)=>{
            if(state.user.basketList){
                state.user.basketList.push(action.payload)
            }else{
                state.user.basketList = [action.payload]
            }
        },
        [deleteUserBasket.fulfilled]: (state, action)=>{
            state.user.basketList = state.user.basketList.filter(el=> el.imageName !== action.payload)
        },
    }
})

export const {logOut} = userSlise.actions