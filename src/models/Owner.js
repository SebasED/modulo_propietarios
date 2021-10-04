const { Schema, model } = require('mongoose');

const OwnerSchema = new Schema(
  {
    name: {
      type: String,
    },
    lastname: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
    creation_date: {
      type: Date,
      default: Date.now,
    },
    update_date: {
      type: Date,
      default: Date.now,
    },
    created_by: {
      type: String,
    },
    updated_by: {
      type: String,
    },
    document: {
      type: String,
    },
    phonenumber: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    pets: [],
  },
  {
    versionKey: false,
  }
);

module.exports = model('Owner', OwnerSchema);
