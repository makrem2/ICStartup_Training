const db = require('../models')

// create main Model
const Etudiant = db.Etudiant


// 1. create Etudiant
const addEtudiant= async (req, res) => {

    let info = {
        name: req.body.name,
        prenom:req.body.prenom,
        email: req.body.email,
        phone:req.body.phone,
        CategoryId:req.body.CategoryId
    }
    const etudiant = await Etudiant.create(info)
    res.status(200).send(etudiant)
    console.log(etudiant)

}


// 2. get all Etudiant

const getAllEtudiant = async (req, res) => {

    let etudiant = await Etudiant.findAll({include:[db.Category]})
    res.status(200).send(etudiant)
}


// 3. get single Etudiant

const getOneEtudiant = async (req, res) => {

    let id = req.params.id
    let etudiant = await Etudiant.findOne({ where: {id:id},include:[db.Category]})
    res.status(200).send(etudiant)

}


// 5. delete Etudiant by id

const deleteEtudiant = (req, res) => {
    const id = req.params.id;
  
    Etudiant.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Etudiant was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Etudiant with id=${id}. Maybe Etudiant was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Etudiant with id=" + id
        });
      });
  };



module.exports = {
    addEtudiant,
    getAllEtudiant,
    getOneEtudiant,
    deleteEtudiant

    
    

}
