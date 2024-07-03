import express from "express"
import { createChat, findChat, userchat } from "../Controllers/ChatController.js"

const router = express.Router() 

router.post('/', createChat)
router.get("/:userId", userchat)
router.get("/find/:firstId/:secondId", findChat)

export default router  