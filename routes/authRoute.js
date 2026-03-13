import {login,validateUser,register,registerUser,signin,signup,logout} from "../controllers/authController.js"
import express from "express"
const authRouter = express.Router()

authRouter.get("/login",login)
authRouter.post("/login",validateUser)
authRouter.get("/register",register)
authRouter.post("/register",registerUser)
authRouter.get("/logout",logout)
authRouter.post("/signin",signin)
authRouter.post("/signup",signup);

export default authRouter