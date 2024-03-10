import mongoose from "mongoose"

const connectDataBase = () => {
    mongoose.connect(process.env.DB_CONNECTION)

    return mongoose.connection
}

export default connectDataBase