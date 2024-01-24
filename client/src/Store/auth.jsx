//context api to save data globally

import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

//creating provider
                //wrapping component knnow as children of context
export const AuthProvider = ( {children} ) => {

    //creating state to store token
                            //give default value as token store in local server
    const [token,setToken] = useState(localStorage.getItem("token"));

    //creating state to store our user data
    const [user,setUser] = useState("");

    //creating state to store our data service data
    const [service,setService] = useState();

    //creating loader to proper fecth data 
    const [loader,setLoader]= useState(true); 


    const GlobalAuthToken = `Bearer ${token}`

    const  setTokenInLS = (serverToken) => {
        //setting token before to avoid extra refresh to render component
        setToken(serverToken);

        return localStorage.setItem("token",serverToken)
    }//creating  setTokenatlocal funtion to store token data

    //validating if token is there then it return true if not then it return false
    let isLoggedIn = !!token;

    //logout functionalities
    const LogoutUser = () =>{
        //null the vale of token
        setToken("");
        localStorage.removeItem("token");
    }

    //authentication and fetch current logged in user data
    const userAuthentication = async() =>{
        try {
            //setting loader true for loading jab tak load na ho jae
            setLoader(true);

            const response = await fetch("http://localhost:5000/api/auth/user"
            , {
            method: "GET",
            headers:{
                Authorization: GlobalAuthToken
            },
        })
        

        if(response.ok)
        {
            //converting response to json 
          const data = await response.json(); 
          //console.log("check data we get from server",data)
          setUser(data);

          //if data was get 
          setLoader(false)
        }
        else{

            setLoader(false)
        }
        } catch (error) {
            console.log("Error fecthing user Data",error)
        }
    }

    //console.log("user data",user)

    //to fetch services data
    const getServices = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/data/service",
            {
                method:"GET",
            })

        if(response.ok){
            const data = await response.json();
           // console.log(data.msg);
            setService(data.msg)
        }
        } catch (error) {
            console.log("service error",error)
        }
    }
    
    const admin = user.isAdmin

    useEffect(()=>{
        //calling user authentication function we create
        getServices();
        userAuthentication(); 
    },[])
    //when we call one time this will render

    return (
        <AuthContext.Provider value={
             {
                isLoggedIn,
                setTokenInLS,  //passing value to prover for globally use
                LogoutUser,
                user,
                service,
                GlobalAuthToken,
                loader,
                admin
            }
        }>
            {children}
        </AuthContext.Provider>
        )
}


//creating consumer to consume data 
//means use this funtion to access token  
export const useAuth = () => {
    const authContextValue =  useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the provider")
    }
    return authContextValue;
}