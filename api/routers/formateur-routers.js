const formateurController = require('../controllers/formateur-controller')

// router
const router = require('express').Router()

// use routers
router.post('/addFormateur', formateurController.upload , formateurController.addFormateur)

router.get('/getAllFormateur',formateurController.getAllFormateur)

router.get('/getOneFormateur',formateurController.getOneFormateur)

router.patch('/updateFormateur/:id',formateurController.upload,formateurController.updateFormateur)

router.delete('/deleteFormateur/:id',formateurController.deleteFormateur)






module.exports = router