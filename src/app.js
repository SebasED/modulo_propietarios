const express = require('express');
const morgan = require("morgan");
const conexionDB = require("./db.conexion");
const routerPropietario = require("./routes/propietario.routes");
const app = express();

// Conexión a la BD
conexionDB();

// settings
app.set("name", "owner_module");
app.set("port", process.env.port || 3500)

//middleware
app.use( express.json() );
app.use(morgan("common"));

// Llamado de rutas
app.get('/', (req, res) => {
  res.send('Owner Module!')
});

app.use("/api/propietario", routerPropietario )


module.exports = app;