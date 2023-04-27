import { rootReduser } from "@maket/rootReduser/rootReduser.js"

export function createStore(rootReduser, initState = {}){
    let state = initState
    let listeners = []

    return{
        subscribe: (fn)=>{
            listeners.push(fn)
            return ()=>{listeners=listeners.filter(el=>el !== fn)}
        },

        dispatch: (state, action, excelId)=>{
            state = rootReduser(state, action, excelId)

            listeners.forEach(listener=>listener(state))
        },

        getState: ()=>{
            return state
        }
    }
}