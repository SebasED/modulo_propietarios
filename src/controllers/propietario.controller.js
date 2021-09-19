const Propietario = require("../Models/Propietario");

exports.obtener = async (req, res) => {
    try {
        const propietario = await Propietario.find({active:true});
        res.json(propietario);
    } catch (error) {
        res.json(error)
    }
}

exports.obtenerPorId = async (req, res) => {
    try {
        const id = req.params.id;
        const propietario = await Propietario.findById(id);
        res.json(propietario);
    } catch (error) {
        res.json(error)
    }
}

exports.agregar = async (req, res) => {
    try {
        const { name, lastname, registration_creator, registry_updater, cedula, cellphone, e_mail, address, pets } = req.body;
        if (name && lastname) {
            const nuevoPropietario = new Propietario({name, lastname, registration_creator, registry_updater, cedula, cellphone, e_mail, address, pets});
            await nuevoPropietario.save();
            res.json({msg: "Se agrego al propietario satisfactoriamente", id: nuevoPropietario._id});
        }else{
            res.json({isOK: false, msg: "Los datos son requeridos"})
        }
        
    } catch (error) {
        res.json(error)
    }
}

exports.actualizar = async (req, res) => {
    
    try {
        const id = req.params.id;
        const data = req.body;
        if (id && data) {
            await Propietario.findByIdAndUpdate(id, data);
            res.json("El propietario se actualizo correctamente");
        } else{
            res.json({msg: "Datos insuficientes"});
        }
    } catch (error) {
        console.log(error);
        res.json(error);

    }    
}

exports.eliminar = async (req, res) => {
    try {
        const id = req.params.id;
        const eliminado = await Propietario.findByIdAndUpdate(id, {active: false});
        res.status(200).json({isOK: true, msg: "Se elimino el propietario de forma satisfactorio"});
    } catch (error) {
        res.status(500).json(error);
    }
}