import express from 'express'
import { createPatientController, getPatientsController, getByIdPatientsController, deleteByIdPatientsController, updateyIdPatientsController } from '../controller/patientController.js'

const router = express.Router()

router.post('/create-patient', createPatientController)
router.get('/', getPatientsController)
router.get('/:id', getByIdPatientsController)
router.delete('/:id', deleteByIdPatientsController)
router.put('/:id', updateyIdPatientsController)

export default router