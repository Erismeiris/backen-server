const mongoose = require('mongoose');

// Conexión a MongoDB

const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.DB_CNN,
            {
               
            }
        );

        console.log("Conexión exitosa a MongoDB!");
        
    } catch (error) {
        
        console.error('Error de conexión a MongoDB:', error.message);
    }
};

module.exports = {dbConnection}