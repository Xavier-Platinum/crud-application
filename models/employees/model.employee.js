const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: `{PATH} is required`
    },
    phone: {
        type: Number
    },
    address: {
        type: String
    },
})

module.exports = {Employee: mongoose.model("Employee", employeeSchema)};