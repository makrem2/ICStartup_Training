module.exports=(sequelize,DataType)=>{
    const Formation=sequelize.define("Formation",{
        title: {
          type:DataType.STRING(15000),
          allowNull:false
          },
          desc: {
            type:DataType.STRING(15000),
            allowNull:false,
            length:1000
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