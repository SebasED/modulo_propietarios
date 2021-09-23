require('./config');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const conexionDB = require('./db.conexion');
const ownerRoutes = require('./routes/owner.routes');

const app = express();

// Conexión a la BD
conexionDB();

app.set('port', process.env.PORT || 3500);

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('common'));

app.use('/api/owner', ownerRoutes);

module.exports = app;
