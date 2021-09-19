const mongoose = require('mongoose');

const conexionDB = async () => {
    try {
        const DB = await mongoose.connect('mongodb+srv://sebas:13mi18eli23505@cluster0.r922w.mongodb.net/owner_module');
        console.log("Db ", DB.connection.name, " is connected");
    } catch (error) {
        console.log(error)
    }    
}

module.exports = conexionDB;
