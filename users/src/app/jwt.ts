import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config()

export const generateToken = (id: any) => {
    return jwt.sign({id}, process.env.JWT_KEY!, {
        expiresIn: '10d'
    });
}

export const verifyUserToken =(token:any)=>{
  if (token) {
    return  jwt.verify(token, process.env.JWT_KEY)    
  }else{
    return null
  }
}