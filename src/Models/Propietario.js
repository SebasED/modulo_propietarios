const { Schema, model } = require("mongoose");

const PropietarioSchema = new Schema ({
    name:  {
        type: String,
        required: true
    }, // String is shorthand for {type: String}
    lastname: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
    /*creation_date: { type: Date, default: Date.now },
    update_date: { type: Date, default: Date.now },
    registration_creator: String,
    registry_updater: String,
    number_id: Number,
    cellphone: Number,
    e_mail: String,
    address: String,
    pets:[{ name: String, id: Number }]*/
});

module.exports = model ("Propietario", PropietarioSchema)