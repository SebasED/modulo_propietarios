const {Router} = require("express");
const ctrPropietario = require("../controllers/propietario.controller");
const routerPropietario = Router();

routerPropietario.get('/', ctrPropietario.obtener);

routerPropietario.get('/:id', ctrPropietario.obtenerPorId);

routerPropietario.post('/', ctrPropietario.agregar);

routerPropietario.put('/:id', ctrPropietario.actualizar);

routerPropietario.delete('/:id', ctrPropietario.eliminar);

module.exports = routerPropietario;