const express = require('express')
const router = express.Router()
const Patient = require('./patient')


router.post ('/sendData', async(req,res)=>{
    const patientData = new Patient({
        patientName: req.body.patientName,
        patientAge: req.body.patientAge,
        patientLocation: req.body.patientLocation,
        patientComplaint: req.body.patientComplaint,
    })

    try{
        const savedPatientData = await patientData.save()
        res.json(savedPatientData)
    }
    catch(err){
        res.status(500).json({msg:err})
    }
})

// GET METHOD- Reads data from the database 
router.get ('/getData', async(req,res)=>{

    try{
        const allData = await Patient.find()
        res.json(allData)
    }
catch(err){
    res.status(500).json({msg:err})
}
})

// GET METHOD-for  a  specific entry
router.get ('/getData/:patientID', async(req,res)=>{

    try{
        const onePatientData = await Patient.findById(req.params.patientID)
        res.json(onePatientData)
    }
catch(err){
    res.status(500).json({msg:err})
}
})
module.exports = router

