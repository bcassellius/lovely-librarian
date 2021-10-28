const { Schema } = require('mongoose');

const staffSchema = new Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    title: {
        type: String,
    },
    extension: {
        type: Int,
    },
    office: {
        type: Int,
    },

});

module.exports = staffSchema;
