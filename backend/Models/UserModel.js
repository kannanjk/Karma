import mongoose from "mongoose"; 

const UserSchema = mongoose.Schema({
    firstname: {
        type: String,    
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    confirmpass: {
        type: String,
        require: true 
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    profilePicture:String,
    coverpicture:String,
    about:String,
    livesin:String,
    workAt:String,
    relationShip:String,
    country:String,
    followers:[],
    following:[]
},  
{
    timestamps:true 
}
)
  
const UserModel = mongoose.model("Users",UserSchema)  
export default UserModel   