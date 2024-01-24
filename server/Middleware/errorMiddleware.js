


// const errorMiddleware = (err , req , res , next) => {
//     //default data for error
//     const status = err.status || 500 ;
//     const message = err.message || "Backend Error";
//     const extraDetails = err.extraDetails || "Error from Backend";

//     //returing data to client when error trigger 
//     return res.status(status).json({message,extraDetails});
// }

// module.exports = errorMiddleware;  

// ErrorHandler.js
// const ErrorHandler = (err, req, res, next) => {
//     console.log("Middleware Error Hadnling");
//     const errStatus = err.statusCode || 500;
//     const errMsg = err.message || 'Something went wrong';
//     const extraDetails = err.extraDetails || "Error from Backend";
//     res.status(errStatus).json({
//         success: false,
//         status: errStatus,
//         message: errMsg,
//         extraDetails: extraDetails,
//     })
// }

// module.exports = ErrorHandler;