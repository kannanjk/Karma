import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    content: {type: String,require:true},
    postId: { type: mongoose.Types.ObjectId, ref: 'post' },
    userId: { type: mongoose.Types.ObjectId, ref: 'user' },
    firstname:{type:String,require:true,ref:'name'},
    profilePicture:{type:String}
},
    { 
        timestamps: true
    }
)

const commentModel = mongoose.model("comment", commentSchema)
export default commentModel