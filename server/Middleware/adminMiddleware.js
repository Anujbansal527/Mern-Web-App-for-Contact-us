

//to verify that admin is accessing dtaa
const adminMiddleware = (req,res,next) => {
    try {
        
        const adminRole = req.user.isAdmin;

        //console.log(adminRole)
        if(!adminRole){
            return res.status(403).json({message:"access denied User is not an admin"})
        }

        //res.status(200).json({msg:req.user.isAdmin})
        next();
        //processing next req if user is admin

    } catch (error) {
        console.log(error);
    }
}

module.exports = adminMiddleware;