const User = require("../Models/userModel");
const bcrypt = require("bcrypt")

const home = async(req,res) => {
    try {
        res.status(200)
        .send("welcome to home")
    } catch (error) {
        console.log("error"+error)
    }
}

const register = async(req,res,next) => {
    try {
        const { username , email , phone , password } = req.body;

        //we can perform bcryption method here as well as in model middileware

        //validation
                                    //checking is req.body.email is present or not in database
        const userExist = await User.findOne({ email })

        if(userExist){
            res.status(400).json({message:"already exist"})
        }

        const user = await User.create({ username , email , phone , password })

        res.status(200)
        .json({
                //passing message to client
            msg:" user create sucessfull",
                //calling token created at model using user
            token: await user.tokenCreate(),
                //passing user id to client for authentication converting it to string because object is stored as string
            userId: user._id.toString(),
        })
    
    } catch (error) {
        res.status(500).json({
            message:"unable to create user",
            error
        })
    }
}

const login = async(req,res,next) =>{
try {
    //fetching data from client
    const {email,password} =req.body;

    //validation is user exist or not
    const exist = await User.findOne({ email });

    if(!exist){ 
        res.status(400).json({
            message: "Invalid email and password",
            error
        })
    }

    //checking is password is valid or not 
    //using instance method creted at server model (middleware) we compare password
    const user = await exist.comparePass(password);

    if(user) {
        res.status(200)
        .json({
                //passing message to client
            msg:" login sucess sucessfull",
                //calling token from exist user at model 
            token: await exist.tokenCreate(),
                //passing user id to client for authentication converting it to string because object is stored as string
            userId: exist._id.toString(),
        })
    }
    else {
        res.status(401).json({
            message:"invalid email and password",
            error
        })
    }

} catch (error) {
   
    res.status(500).json({
        message:"unable to create user",
        error
    })
}
}

const UserAuth = (req,res) => {
    try {
        //here we get user data as in middileware we change the data of req
        const userData = req.user;
        //console.log("fetched user data after cnverting by middileware",userData);

        //returning with user data to client
        res.status(200).json(userData)        
    } catch (error) {
        console.log("error while fetchng user data",error);
    }
}

module.exports = {home,register,login,UserAuth}