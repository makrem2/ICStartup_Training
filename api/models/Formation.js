module.exports=(sequelize,DataType)=>{
    const Formation=sequelize.define("Formation",{
        title: {
          type:DataType.STRING,
          allowNull:false
          },
          desc: {
            type:DataType.STRING,
            allowNull:false
          },
          photo: {
            type:DataType.STRING,
            allowNull:false
          },
          username: {
            type:DataType.STRING,
            allowNull:false
          },
          prix:{
            type:DataType.STRING,
            allowNull:false
          },
          duree:{
            type:DataType.STRING,
            allowNull:false
          }
    })

    Formation.associate=models=>{
      Formation.belongsTo(models.Category,{
        onDelete:"cascade"
    })
      Formation.belongsTo(models.User,{
      onDelete:"cascade"
    })

    Formation.belongsTo(models.Formateur,{
      onDelete:"cascade"
  })

  }

return Formation

}