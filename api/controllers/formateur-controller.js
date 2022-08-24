const db = require('../models')


// image Upload
const multer = require('multer')
const path = require('path')

const Formateur = db.Formateur


// 1. create Formateur
const addFormateur = async (req, res) => {

    let info = {
        name: req.body.name,
        prenom:req.body.prenom,
        photo: req.file.path,
        post:req.body.post
    }
    const formateur = await Formateur.create(info)
    res.status(200).send(formateur)
    console.log(formateur)

}


// 2. get all Formateur

const getAllFormateur = async (req, res) => {

    let formateur = await Formateur.findAll({include:[db.Formation]})
    res.status(200).send(formateur)
}


// 3. get single Formateur

const getOneFormateur = async (req, res) => {

    let id = req.params.id
    let formateur = await Formateur.findOne({ where: { id: id },include:[db.Formation]})
    res.status(200).send(formateur)

}

// 4. update Formateur

const updateFormateur = async (req, res) => {

    Formateur.update({
    name: req.body.name,
    prenom:req.body.prenom,
    photo: req.file.path,
    post:req.body.post
},{where:{id:req.params.id}})
.then((response)=>res.status(200).send(response))
.catch((err)=>res.status(400).send(err))

}


// 5. delete Formateur by id

const deleteFormateur = (req, res) => {
    const id = req.params.id;
  
    Formateur.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Formateur was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Formateur with id=${id}. Maybe Formateur was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Formateur with id=" + id
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




module.exports = {
    addFormateur,
    upload,
    getAllFormateur,
    getOneFormateur,
    updateFormateur,
    deleteFormateur
    
    

}