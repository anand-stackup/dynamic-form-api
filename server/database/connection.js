const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log(connection.connection.host);
    } catch (error) {
        process.exit(1)
    }
} 

module.exports = connectDb;