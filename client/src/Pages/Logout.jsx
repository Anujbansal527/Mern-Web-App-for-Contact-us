import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Store/auth";



const Logout = () => {
    
    //fetching data of logoutuser from out conext api
    const {LogoutUser} = useAuth();


    useEffect(()=>{
        //calling the funtion from global context hook
        LogoutUser();

    },[LogoutUser])
    
    return(
        <Navigate to="/login" />
    )
}

export default Logout;