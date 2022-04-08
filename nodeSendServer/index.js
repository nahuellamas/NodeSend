const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// crear el servidor
const app = express();
// Habilitar CORS
var corsOptions = {
    origin: process.env.FRONTEND_URL,
    optionsSuccessStatus: 200,
    credentials: true
}
app.options('*', cors())
app.use(cors(corsOptions));

conectarDB();

// Puerto de la app
const port = process.env.PORT || 4500;

// Habilitar leer los valores de un body
app.use( express.json() );

// Habilitar carpeta publica para acceder a archivos estaticos
app.use( express.static('uploads') );


// Rutas de la app
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/enlaces', require('./routes/enlaces'));
app.use('/api/archivos', require('./routes/archivos'));

// Arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})