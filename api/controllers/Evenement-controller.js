const db = require('../models')


// image Upload
const multer = require('multer')
const path = require('path')


const Evenement = db.Evenement



// 1. create Evenement
const addEvenement = async (req, res) => {

    let info = {
        title: req.body.title,
        description:req.body.description,
        photo: req.file.path,
        date:req.body.date,
        CategoryId:req.body.CategoryId,
        UserId:req.body.UserId
    }
    const evenement = await Evenement.create(info)
    res.status(200).send(evenement)
    console.log(evenement)

}


// 2. get all Evenement

const getAllEvenement = async (req, res) => {

    let evenement = await Evenement.findAll({include:[db.Category,db.User]})
    res.status(200).send(evenement)
}


// 3. get single Evenement

const getOneEvenement = async (req, res) => {

    let id = req.params.id
    let evenement = await Evenement.findOne({ where: { id: id },include:[db.Category,db.User]})
    res.status(200).send(evenement)

}

// 4. update Evenement

const updateEvenement = async (req, res) => {
  Evenement.update({
    title: req.body.title,
    description:req.body.description,
    photo: req.file.path,
    date:req.body.date,
    CategoryId:req.body.CategoryId,
    UserId:req.body.UserId
},{where:{id:req.params.id}})
.then((response)=>res.status(200).send(response))
.catch((err)=>res.status(400).send(err))
   
}

// 5. delete Evenement by id

const deleteEvenement = (req, res) => {
    const id = req.params.id;
  
    Evenement.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Evenement was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Evenement with id=${id}. Maybe Evenement was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Evenement with id=" + id
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
    addEvenement,
    upload,
    getAllEvenement,
    getOneEvenement,
    updateEvenement,
    deleteEvenement

    
    

}