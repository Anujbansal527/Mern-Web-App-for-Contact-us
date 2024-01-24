const express = require("express");
const { getAllUsers, getAllContact, deleteUser, getUser, updateUser, deleteContacts } = require("../Controllers/adminController");
const authMiddleware = require("../Middleware/authMiddleware");
const adminMiddleware = require("../Middleware/adminMiddleware");

const router =  express.Router();

router.route("/users")
.get(authMiddleware,adminMiddleware,getAllUsers)
//auth middileware for authorization with token
//admin middileware to check is user is admoin or not


router.route("/contacts")
.get(authMiddleware,adminMiddleware,getAllContact)

router.route("/users/:id")
.get(authMiddleware,adminMiddleware,getUser)

router.route("/users/update/:id")
.patch(authMiddleware,adminMiddleware,updateUser)


router.route("/users/delete/:id")
.delete(authMiddleware,adminMiddleware,deleteUser)

router.route("/contacts/delete/:id")
.delete(authMiddleware,adminMiddleware,deleteContacts)


module.exports = router;