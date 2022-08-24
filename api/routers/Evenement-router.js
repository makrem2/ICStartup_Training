const evenementController = require('../controllers/Evenement-controller')


// router
const router = require('express').Router()


// use routers
router.post('/addEvenement',evenementController.upload,evenementController.addEvenement)

router.get('/getAllEvenement',evenementController.getAllEvenement)

router.get('/getOneEvenement/:id',evenementController.getOneEvenement)

router.patch('/updateEvenement/:id',evenementController.upload,evenementController.updateEvenement)

router.delete('/deleteEvenement/:id',evenementController.deleteEvenement)







module.exports = router