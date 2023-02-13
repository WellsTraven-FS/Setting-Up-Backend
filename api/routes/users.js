const express = require("express");
const userRouter = express.Router();
const { email, phone, birthday, password } = require("@travenwells0476/utils");

const { signup } = require("../controllers/users");

userRouter.post("/signup", email, phone, birthday, password, signup);

module.exports = userRouter;
