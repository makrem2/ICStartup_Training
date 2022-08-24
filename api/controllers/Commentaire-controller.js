const db = require("../models");

// create main Model
const Commentaire = db.Commentaire;

// 1. create Commentaire
const addCommentaire = async (req, res) => {
  let info = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    BlogId:req.body.BlogId
  };
  const commentaire = await Commentaire.create(info);
  res.status(200).send(commentaire);
  console.log(commentaire);
};

// 2. get all Commentaire
const getCommentaireByBlog = async (req, res) => {
    let id = req.params.id
  let commentaire = await Commentaire.findAll({ where: { BlogId: id }});
  res.status(200).send(commentaire);
};

// 5. delete Commentaire by id

const deleteCommentaire = (req, res) => {
  const id = req.params.id;

  Commentaire.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Commentaire was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Commentaire with id=${id}. Maybe Commentaire was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Commentaire with id=" + id,
      });
    });
};

module.exports = {
  addCommentaire,
  getCommentaireByBlog,
  deleteCommentaire,
};
