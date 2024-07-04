import UserModel from "../Models/UserModel.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

import tw from 'twilio';

// Register a new User 
export const registerUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const hashedpass = await bcrypt.hash(req.body.password, salt)
    req.body.password = hashedpass
    const hashedpassw = await bcrypt.hash(req.body.confirmpass, salt)
    req.body.confirmpass = hashedpassw
    console.log(req.body.confirmpass);

    const newUser = new UserModel(req.body)
    const { email } = req.body
    try {
        const oldUser = await UserModel.findOne({ email })
        if (oldUser) {
            return res.status(400).json({ maessage: "email is already registerd", success: false })
        }
        const user = await newUser.save()
        const token = jwt.sign({
            email: user.email, id: user._id
        }, process.env.JWT_KEY, { expiresIn: '1h' })
        res.status(200).json({ user,message:"Registration success", token, success: true })
    } catch (error) {
        res.status(500).json({ message: error.message, success: false })
    }
}

// login user
export const loginUser = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await UserModel.findOne({ username: username })

        if (user) {

            const validity = await bcrypt.compare(password, user.password)

            if (!validity) {
                res.status(400).json("Wrong password")
            } else {
                const token = jwt.sign({
                    username: user.username, id: user._id
                }, process.env.JWT_KEY, { expiresIn: '1h' })
                res.status(200).json({ user, token })
            }
        } else {
            res.status(404).json("user dose not exist")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const forgotPas = async (req, res) => {
    const phone = req.body.number
    const user = await UserModel.findOne({ username: req.body.username })
    if (!user) {
        return res.status(200).send({
            message: 'User not Found'
        })
    } else {

    }
}