const User =  require("../Models/userModel");
const Contact = require("../Models/contactModel");


const getAllUsers = async (req,res) => {
    try {
        const users = await User.find({},{password:0});

        if(!users || users.length == 0){
            return res.status(404).json({message: "No Users Found"});
        }

        res.status(200).json(users);
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"server error admin panel"})
    }
}

const getAllContact = async(req,res) =>{
try {
    const contacts = await Contact.find();

    if(!contacts || contacts.length == 0){
        return res.status(404).json({message: "No Users Found"});
    }

    res.status(200).json(contacts);
} catch (error) {
    console.log(error)
        res.status(500).json({msg:"server error admin panel"})
}
}

const deleteUser = async (req,res) =>{
    try {
        //getting data from url that is params
        const id = req.params.id;
        const data = await User.deleteOne({_id:id})
        res.status(200).json({msg:"user deleted sucessfully"})

    } catch (error) {
        console.log(error)
    }
}

const getUser = async(req,res) =>{
    try {
        //getting data from url that is params
        const id = req.params.id;
        const data = await User.findOne({_id:id} , {password:0})
        
        res.status(200).json(data)
        
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async (req,res) => {
    try {
        const id = req.params.id;
        //console.log("id",id)

        const updateData = req.body

        //console.log("update data",updateData)
        
        const updateUser = await User.updateOne({_id:id},{
            //$set function use to set data in monogdb
            $set:updateData
        })


        //console.log("update user",updateUser)

        return res.status(200).json(updateUser);  

    } catch (error) {
        console.log(error)
    }
}


const deleteContacts = async (req,res) =>{
    try {
        //getting data from url that is params
        const id = req.params.id;
        const data = await Contact.deleteOne({_id:id})
        res.status(200).json({msg:"contact deleted sucessfully"})

    } catch (error) {
        console.log(error)
    }
}

module.exports = {getAllUsers,getAllContact,deleteUser,getUser,updateUser,deleteContacts};