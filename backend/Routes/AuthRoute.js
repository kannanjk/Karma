import express from "express"
import { forgotPas, loginUser, registerUser } from "../Controllers/AuthController.js"

const router = express.Router()

router.post("/register",registerUser)  
router.post("/login",loginUser)
router.post('/forgotpass',forgotPas)
  
export default router    