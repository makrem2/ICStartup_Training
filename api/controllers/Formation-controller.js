const db = require('../models')


// image Upload
const multer = require('multer')
const path = require('path')

const Formation = db.Formation




// 1. create Formation
const addFormation= async (req, res) => {

    let info = {
        title: req.body.title,
        desc:req.body.desc,
        photo: req.file.path,
        username:req.body.username,
        prix:req.body.prix,
        duree:req.body.duree,
        UserId :req.body.UserId,
        FormateurId :req.body.FormateurId,
        CategoryId :req.body.CategoryId
    }
    const formation = await Formation.create(info)
    res.status(200).send(formation)
    console.log(formation)

}

// 2. get all Formation

const getAllFormation = async (req, res) => {

    let formation = await Formation.findAll({include:[db.Category,db.Formateur,db.User]})
    res.status(200).send(formation)
}


// 3. get single Formation

const getOneFormation = async (req, res) => {

    let id = req.params.id
    let formation = await Formation.findOne({ where: { id: id }})
    res.status(200).send(formation)

}

// 4. update Formation

const updateFormation = async (req, res) => {
  if(req.file){
    Formation.update({
      title: req.body.title,
      desc:req.body.desc,
      photo: req.file.path,
      username:req.body.username,
      prix:req.body.prix,
      duree:req.body.duree,
      UserId :req.body.UserId,
      FormateurId :req.body.FormateurId,
      CategoryId :req.body.CategoryId
  },{where:{id:req.params.id}})
  .then((response)=>res.status(200).send(response))
  .catch((err)=>res.status(400).send(err))
  } else
  {
    Formation.update({
      title: req.body.title,
      desc:req.body.desc,
      username:req.body.username,
      prix:req.body.prix,
      duree:req.body.duree,
      UserId :req.body.UserId,
      FormateurId :req.body.FormateurId,
      CategoryId :req.body.CategoryId
  },{where:{id:req.params.id}})
  .then((response)=>res.status(200).send(response))
  .catch((err)=>res.status(400).send(err))
  }

   
}

// 5. delete Formation by id

const deleteFormation = (req, res) => {
    const id = req.params.id;
  
    Formation.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Formation was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Formation with id=${id}. Maybe Formation was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Formation with id=" + id
        });
      });
  };


  const getFormationByCategorie = async (req, res) => {

    let id = req.params.id
    let formation = await Formation.findAll({ where: { username : id },include:[db.Category,db.Formateur,db.User]})
    res.status(200).send(formation)
}



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
    addFormation,
    upload,
    getAllFormation,
    getOneFormation,
    updateFormation,
    deleteFormation,
    getFormationByCategorie

}