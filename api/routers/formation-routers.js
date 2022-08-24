const formationController = require('../controllers/Formation-controller')

// router
const router = require('express').Router()

// use routers
router.post('/addFormation', formationController.upload , formationController.addFormation)

router.get('/getOneFormation/:id',formationController.getOneFormation)

router.get('/getFormationByCategorie/:id',formationController.getFormationByCategorie)


router.get('/getAllFormation',formationController.getAllFormation)

router.patch('/updateFormation/:id', formationController.upload ,formationController.updateFormation)

router.delete('/deleteFormation/:id',formationController.deleteFormation)










module.exports = router