const db = require('../models')


// image Upload
const multer = require('multer')
const path = require('path')


// create main Model
const Blog = db.Blog


// 1. create Blog
const addBlog= async (req, res) => {

    let info = {
        title: req.body.title,
        desc:req.body.desc,
        photo: req.file.path,
        username:req.body.username,
        UserId :req.body.UserId,
        CategoryId :req.body.CategoryId
    }
    const blog = await Blog.create(info)
    res.status(200).send(blog)
    console.log(blog)

}



// 2. get all Blog

const getAllBlog = async (req, res) => {

    let blog = await Blog.findAll({include:[db.Category,db.User]})
    res.status(200).send(blog)
}


// 3. get single Blog

const getOneBlog = async (req, res) => {

    let id = req.params.id
    let blog = await Blog.findOne({ where: {id:id},include:[db.Category,db.User]})
    res.status(200).send(blog)

}

// 4. update Blog

const updateBlog = async (req, res) => {

  Blog.update({
    title: req.body.title,
    desc:req.body.desc,
    photo: req.file.path,
    username:req.body.username,
    UserId :req.body.UserId,
    CategoryId :req.body.CategoryId
},{where:{id:req.params.id}})
.then((response)=>res.status(200).send(response))
.catch((err)=>res.status(400).send(err))

}

// 5. delete Blog by id

const deleteBlog = (req, res) => {
    const id = req.params.id;
  
    Blog.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Blog was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Blog with id=${id}. Maybe Blog was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Blog with id=" + id
        });
      });
  };






// 6. Upload Image Controller

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('photo')





// // 3. get single Blog

// const getBlogbydate = async (req, res) => {

//   let id = req.params.id
//   let blog = await Blog.findOne({ where: {id:id},include:[db.Category,db.User]})
//   res.status(200).send(blog)

// }

module.exports = {
    addBlog,
    upload,
    getAllBlog,
    getOneBlog,
    updateBlog,
    deleteBlog
    
}