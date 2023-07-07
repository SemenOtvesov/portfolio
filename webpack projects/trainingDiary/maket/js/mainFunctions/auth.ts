import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@firebaseFolder/firebaseInit"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { login, logout, setUserUid } from "@redux/userRouter"
import { userStateInterfase } from "@js/types/stateTypes"
import { useAppDispatch } from "./hooks"

export const authFn = (userUid: string | undefined): void => {
    const dispatch = useAppDispatch()
    const userInfo = useSelector((state: userStateInterfase)=>state.userRouter.userInfo)

    onAuthStateChanged(auth, (userData)=>{
        if(userData){
            if(userUid != userData.uid){dispatch(setUserUid(userData.uid))}
        }else(
            dispatch( setUserUid(undefined) ),
            dispatch( logout() )
        )
    })

    useEffect(()=>{
        if(userUid){
            dispatch(login({userUid, userInfo}))
        }
    }, [userUid, userInfo])
}