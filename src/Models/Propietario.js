const { Schema, model } = require("mongoose");

const PropietarioSchema = new Schema ({
    name:  {
        type: String,
        required: true
    }, 
    lastname: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    creation_date: { 
        type: Date, 
        default: Date.now, 
        required: true
    },
    update_date: { 
        type: Date, 
        default: Date.now,
        required: true 
    },
    registration_creator: {
        type: String,
        required: true
    },
    registry_updater: {
        type: String,
        required: true
    },
    cedula: {
        type: Number,
        required: true
    },
    cellphone: {
        type: Number,
        required: true
    },
    e_mail: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pets:[
        { 
            name: String, 
            id: Number 
        }
    ]
});

module.exports = model ("Propietario", PropietarioSchema)