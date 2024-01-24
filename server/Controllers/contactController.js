const Contact = require("../Models/contactModel");

const contactForm = async (req,res,next) => {
    try {
        
        const response = req.body;

        //console.log(response)

        await Contact.create(response);

        return res.status(200).json({  msg:"messsage send sucessfully" })

    } catch (error) {
       console.log(error)
    }
}

module.exports = contactForm;