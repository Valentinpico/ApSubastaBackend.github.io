const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://valentin:QweQwe23@cluster0.5vgqsxz.mongodb.net/AppSubasta?retryWrites=true&w=majority")
        console.log("base de datos ejecutandose sin problemas")

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    dbConnection
}
