import mongoose from "mongoose";

export const ConnectDb = () => {
    try {
        mongoose.connect(process.env.MONGO_URL).then(() => {
            console.log("Post dataBase connected");
        })
    } catch (error) {
        console.log(error);

    }
}