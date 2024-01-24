const express = require("express");
const authRoute = require("./Router/authRouter");
const db = require("./Utils/db")
//const ErrorHandler = require("./Middleware/errorMiddleware");
const cors = require("cors");
const contactRoute = require("./Router/contactRouter");
const serviceRoute = require("./Router/serviceRouter")
const adminRoute = require("./Router/adminRouter")

const app = express();

const PORT = 5000 ;

app.use(cors());

//middle ware
app.use(express.json());

//routes
app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute)
app.use("/api/data",serviceRoute)
app.use("/api/admin",adminRoute)

//calling error middleware
//app.use(ErrorHandler);

//database
db();


//server
app.listen(PORT, () => {
    console.log(`Server is  running at PORT ${PORT}`)
})

/* we can write this one also

db().then(()=>{
    app.listen(PORT, () => {
    console.log(`Server is  running at PORT ${PORT}`)
})
})

*/