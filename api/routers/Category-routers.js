const categoryController = require('../controllers/Category-controller')
// router
const router = require('express').Router()


// use routers
router.post('/addCategory',categoryController.addCategory)

router.get('/allCategory', categoryController.getAllCategorys)

router.get('/getonecategory/:id',categoryController.getOneCategory)

router.patch('/updateCategory/:id',categoryController.updateCategory)

router.delete("/deletecategorie/:id", categoryController.deletecategorie);







module.exports = router