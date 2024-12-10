
require('dotenv').config();

const express = require('express');
const {dbConnection} = require('./database/config')
const cors = require('cors');



// Crear el servidor de express
const app = express();

// Configurar CORS

app.use( cors() );


// Conectar a la base de datos
dbConnection();


app.get("/", (req, res) => {
    res.send("Hello World!");
});



app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
});