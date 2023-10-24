import { auth } from "@firebaseFolder/firebaseInit";
import { userStateInterfase } from "@js/types/state/userStateTypes";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import { logout, setUserUid } from "./userRouter";
import { useEffect } from "react";
import { useAppDispatch } from "@js/hooks/useAppDispatch";
import login from "./requests/actions/login";

export default ()=>{
    const userUid = useSelector((state: userStateInterfase)=>state.userRouter.userUid)
    const userInfo = useSelector((state: userStateInterfase)=>state.userRouter.userInfo)
    const dispatch = useAppDispatch()

    onAuthStateChanged(auth, (user)=>{
        if(!user){return}
        if(userUid != user.uid){
            dispatch(setUserUid(user.uid))
        }
        if(!user){dispatch(logout())}
    })

    useEffect(()=>{
        dispatch(login({userUid, userInfo}))
    }, [userUid, userInfo])
}
