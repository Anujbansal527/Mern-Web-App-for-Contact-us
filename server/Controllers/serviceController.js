const Service = require("../Models/serviceModel");

const serviceController = async(req,res) =>{
    try {
        const response = await Service.find({})

        if(!response){
            res.status(404).json({msg:"No services found"})
        }

        res.status(200).json({msg:response});

    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"server error"})
    }
}

module.exports = serviceController;