const etudiantController = require('../controllers/Etudiant-controller')


// router
const router = require('express').Router()


// use routers
router.post('/addEtudiant', etudiantController.addEtudiant)
router.get('/getAllEtudiant', etudiantController.getAllEtudiant)
router.get('/getOneEtudiant/:id', etudiantController.getOneEtudiant)
router.delete('/deleteEtudiant/:id', etudiantController.deleteEtudiant)




module.exports = router
