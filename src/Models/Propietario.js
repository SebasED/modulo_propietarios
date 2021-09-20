const { Schema, model } = require("mongoose");

const PropietarioSchema = new Schema ({
    name:  {
        type: String
    }, 
    lastname: {
        type: String
    },
    active: {
        type: Boolean,
        default: true
    },
    creation_date: { 
        type: Date, 
        default: Date.now
    },
    update_date: { 
        type: Date, 
        default: Date.now
    },
    registration_creator: {
        type: String
    },
    registry_updater: {
        type: String
    },
    cedula: {
        type: Number
    },
    cellphone: {
        type: Number
    },
    e_mail: {
        type: String
    },
    address: {
        type: String
    },
    pets:[
        { 
            name: String, 
            id: Number 
        }
    ]
});

module.exports = model ("Propietario", PropietarioSchema)