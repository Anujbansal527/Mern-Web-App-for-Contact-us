const {z} = require("zod");

//creating an object schema
const SingupSchema = z.object({
    username : z
                .string({required_error: "Name is reuired"})
                .trim()
                .min(3,{message: "Name must be at least 3 Characters"})
                .max(255, {message:"Name mmust not be more than 225 chracters"}),
    email: z
            .string({required_error:"Email is required"})
            .trim()
            .email({message:"invlid emial adress"})
            .min(3,{message: "email must be at least 3 Characters"})
            .max(255, {message:"email must not be more than 225 chracters"}),
    phone : z
            .string({required_error: "Phone is reuired"})
            .trim()
            .min(10,{message: "Phone must be at least 10 Characters"})
            .max(20, {message:"Phone mmust not be more than 20 chracters"}),  
    password : z
                .string({required_error:"Passwordis required"})
                .min(6,{message:"Passwrod must be at least 6 character"}) 
                .max(255, {message:"password must not be more than 225 chracters"}),
    })


    //exporting schema module
module.exports = SingupSchema; 