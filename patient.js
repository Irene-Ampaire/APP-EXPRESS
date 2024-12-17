const mongoose = require ('mongoose')

const patientSchema = new mongoose.Schema({
    patientName:{
        type:String,
        required:true
    },
    patientAge:{
        type:Number,
        required:true
    },
    patientLocation:{
        type:String,
        required:false
    },
    patientComplaint:{
        type:String,
        required:true
    }
}, {timestamps:true})

const Patient = mongoose.model('PatientForms', patientSchema);
module.exports = Patient;
