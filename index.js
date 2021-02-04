/*
Salmos 119:66
Enséñame buen sentido y sabiduría, porque tus mandamientos he creído.
 */

const express = require('express');
const { invertText } = require('./controller');
const cors = require('cors');
const app = express();

// declaro el objeto para permitir las peticiones de afuera
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
// este cor me va a petir allow access origin y poder hacer solicitudes al api
app.use(cors(corsOptions));

// para que responda en formato json
app.use(express.json());
// no se necesita adjuntar archivo
app.use(express.urlencoded({extended: false}));
//declaro la ruta
app.get('/iecho', invertText);
// declaro el puerto de escucha
const port = 7000;

// arrancha el servidor
app.listen(port, ()=>
{
    console.log(`This server is listening on port ${port}`);
});
// la exporto para fines de testing
module.exports = app;