///cretating auth middileware to check is user is authorixed or not
const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");


const authMiddleware = async(req,res,next) => {
    
    //console.log("req data ", req.header("Authorization"))
    //fetching token data from client's headerNAMED AS Authorization
    const token = req.header("Authorization");

    //if tooken is fetched from client then or if not then
    if(!token){
        //if token in not recevided
        return res.status(401).json({
            message:"Unauthorized HTTP, token not provided"
        })
    }
        //console.log(token); //we get token here in the form of "Bearer ......token........." now we have to remove this bearer from our tokent to authenticate or verfiy token

                            //replace method chnage "Bearer" to  " " and trim method remove empty space
        const jwtToken = token.replace("Bearer","").trim()

        //console.log(jwtToken)
        
        try {
         
        const isVarify = jwt.verify(jwtToken,process.env.JWT_SECRETE)
        
        //console.log(isVarify); //we get data what we pass during creating token
       
        //now fetching data from client based on email
        const userData = await User.findOne({email:isVarify.email})
        .select({
            password: 0, //here we remove password from our payload because prevent data from hacking
        })

        //console.log(userData);

        //upadating data of req. here 
        req.user = userData; //complete user data
        req.token = token;  //current token
        req.userID = userData._id; //user id

        //next middileware to perform next() step 
        next()
        } catch (error) {
            console.log("auth",error)
        }
    
} 

module.exports = authMiddleware;