const db = require('../models')


// create main Model
const Category = db.Category

// 1. create categorie
const addCategory = async (req, res) => {

    let info = {
        name: req.body.name,
    }
    const category = await Category.create(info)
    res.status(200).send(category)
    console.log(category)

}

// 2. get all Category

const getAllCategorys = async (req, res) => {

    let categorys = await Category.findAll({})
    res.status(200).send(categorys)
}


// 3. get single Category

const getOneCategory = async (req, res) => {

    let id = req.params.id
    let category = await Category.findOne({ where: { id: id }})
    res.status(200).send(category)

}

// 4. update Category

const updateCategory = async (req, res) => {

    let id = req.params.id

    const category = await Category.update(req.body, { where: { id: id }})

    res.status(200).send(category)
   

}

// 5. delete Category by id

// Delete a Tutorial with the specified id in the request
const deletecategorie = (req, res) => {
    const id = req.params.id;
  
    Category.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Category was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Category with id=${id}. Maybe Category was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Category with id=" + id
        });
      });
  };



// const deleteCategory = async (req, res,next) => {

//     let id = req.params.id
    
//     await Category.destroy({ where: { id: id }} )
// .then(res.status(200).send('Category is deleted !'))
// .catch((err)=>res.status(400).send(err))
    
// }



module.exports = {
    addCategory,
    getAllCategorys,
    getOneCategory,
    updateCategory,
    deletecategorie
}