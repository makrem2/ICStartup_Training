module.exports=(sequelize,DataType)=>{
    const Commentaire=sequelize.define("Commentaire",{
        name: {
          type:DataType.STRING,
          required: true,
          },
          email: {
            type:DataType.STRING,
            required: true,
            
          },
          message: {
            type:DataType.STRING(15000),
            required: false,
          }
    })

    Commentaire.associate=models=>{
        Commentaire.belongsTo(models.Blog,{
          onDelete:"cascade"
      })
  }


return Commentaire

}