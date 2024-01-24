const  mongoose  = require("mongoose");
const bcrypt  = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

//defining schema
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:String,
        default:false
    }
})

//creating middleware we can create pre and post middleware

//password hashing
//this middile ware  will called just before the save funtion is call to save  database in db
userSchema.pre("save",async function(next)
{
    //this is use to get data from client side 
    const user = this ;
    //checking is password is  modified before or not
    if(!user.isModified("password")){
        //here next is also middle ware who indicate if work done then pocess next step
        console.log("pass modified")
        next();
    }
    try {
        //creating  salt for hasing passwod 
        const salt = 10;
        //we can use cont salt = await bcrypt.genSalt(10);  //to crete salt
        //hashing the password using that salt //password fetch from client and then salt
        const hashed = await bcrypt.hash(user.password, salt)
        //setting password to fetched password
        user.password= hashed ;
    } catch (error) {
        next(error);
    }
})

//creating token
userSchema.methods.tokenCreate = async function (next){
 
    //generating payload
    const payload = {
        userId : this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
    }

    const secerete = process.env.JWT_SECRETE
    try {
        return jwt.sign(
            //passing paylod //jwt secerete //expiration
            payload,
            secerete,
            {
                expiresIn:"2d"
            }
        )
    } catch (error) {
        next(error)
    }
}

//compareing passwrod                           //password from client side
userSchema.methods.comparePass= async function(password){
    //compare password       //server side password //client side pass 
    return await bcrypt.compare(password , this.password) ;
}



//defining model and collection
const User = new mongoose.model("User",userSchema);

module.exports = User;