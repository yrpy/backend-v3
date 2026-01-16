import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
    name: { type: String},
    age: { type: Number},
    purpose_of_visit: { type: String},
    email: { type: String},
    phone: { type: Number}
}, {timestamps: true})

const PatientModel = mongoose.model('patients', PatientSchema)
export default PatientModel
