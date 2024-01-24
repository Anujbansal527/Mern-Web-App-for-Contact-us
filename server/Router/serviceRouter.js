const express = require("express");
const serviceController = require("../Controllers/serviceController");

const router =  express.Router();

router.route("/service")
.get(serviceController)



module.exports = router;