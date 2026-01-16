import PatientModel from "../models/patients.model.js"

export const createPatientController = async (req, res) => {

    try {
        const {name, age, purpose_of_visit, email, phone} = req.body
        const patient = await PatientModel({name, age, purpose_of_visit, email, phone}).save()
        res.status(200).send({
            success: true, message: 'Patient is successfully created.', patient
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false, message: 'Error in creating Patient.', error
        })
    }

}

export const getPatientsController = async (req, res) => {
    try {
        const patitents = await PatientModel.find({})
        res.status(200).send({
            success: true, message: 'App Patients data', patitents
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false, message: 'Error while getting Patients data', error
        })
    }
}

export const getByIdPatientsController = async (req, res) => {
    try {
        const id = req.params.id
        const patient = await PatientModel.findById({_id: id})
        res.status(200).send({
            success: true, message: 'Current patient info by id', patient
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false, message: 'Somthing went while getting current record by id', error
        })
    }
}

export const deleteByIdPatientsController = async (req, res) => {
    try {
        const id = req.params.id
        await PatientModel.findByIdAndDelete({_id: id})
        res.status(200).send({
            success: true, message: 'Patient deleted successfully'
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false, message: 'Patient not deleted', error
        })
    }
}

export const updateyIdPatientsController = async(req, res) =>{
    try {
        const id = req.params.id
        const {name, age, purpose_of_visit, email, phone} = req.body
        const patient = await PatientModel.findByIdAndUpdate({_id: id},{name, age, purpose_of_visit, email, phone}, {new: true} )
        res.status(200).send({
            success: true, message: 'Patient Successfully updated!', patient
        })
    } catch (error) {
        console.log(error)
        req.status(500).send({
            success: false, message: 'Patient not updated, please validate', error
        })
    }
}