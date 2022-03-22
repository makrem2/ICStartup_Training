module.exports=(sequelize,DataType)=>{
    const Formateur=sequelize.define("Formateur",{
        name: {
          type:DataType.STRING
          },
          prenom: {
            type:DataType.STRING,
            allowNull:false
          },
          photo: {
            type:DataType.STRING,
            allowNull:false
          },
          post: {
            type:DataType.STRING,
            allowNull:false
          }
    })

    Formateur.associate=models=>{
      Formateur.hasOne(models.Formation,{
          onDelete:"cascade"
      })
  }

return Formateur

}