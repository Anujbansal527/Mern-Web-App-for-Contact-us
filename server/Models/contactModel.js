
//destructuring the component
const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String
    }
});


const Contact = new mongoose.model("Contact",contactSchema);

module.exports = Contact;