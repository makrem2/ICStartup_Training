const CommentaireController = require("../controllers/Commentaire-controller");

// router
const router = require("express").Router();

// use routers
router.post("/addCommentaire", CommentaireController.addCommentaire);

router.get("/getCommentaireByBlog/:id", CommentaireController.getCommentaireByBlog);

router.delete(
  "/deleteCommentaire/:id",
  CommentaireController.deleteCommentaire
);

module.exports = router;
