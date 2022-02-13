const express = require("express");
const signUpController = require("./users.controller");

const router = express.Router();

router.post("/signUp", signUpController);

module.exports = router;
