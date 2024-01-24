const express = require("express");
const Controllers = require("../Controllers/authControllers");

//imoorting validate middleware and singup validate schema
const validate = require("../Middleware/validateMiddleware");
const SingupSchema = require("../Validators/authValidator");
const authMiddleware = require("../Middleware/authMiddleware");

const router =  express.Router();

router.route("/")
.get(Controllers.home)

//registration route
router.route("/register")
.post(validate(SingupSchema),Controllers.register)
        //here we pass singup schea to validate middileware 

//login route
router.route("/login")
.post(Controllers.login)

//user route for authentication

router.route("/user").get(authMiddleware,Controllers.UserAuth)

module.exports = router;