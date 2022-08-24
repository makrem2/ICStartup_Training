const blogController = require('../controllers/Blog-controller')


// router
const router = require('express').Router()


// use routers
router.post('/addBlog',blogController.upload,blogController.addBlog)

router.get('/getAllBlog',blogController.getAllBlog)

router.get('/getOneBlog/:id',blogController.getOneBlog)

router.patch('/updateBlog/:id',blogController.upload,blogController.updateBlog)

router.delete('/deleteBlog/:id',blogController.deleteBlog)







module.exports = router