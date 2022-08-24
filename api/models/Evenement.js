module.exports=(sequelize,DataType)=>{
    const Evenement=sequelize.define("Evenement",{
        title: {
          type:DataType.STRING(15000),
            allowNull:false
          },
          description:{
            type:DataType.STRING(15000),
            allowNull:false
        },
          photo: {
            type:DataType.STRING,
            allowNull:false
          },
          date:{
            type:DataType.STRING,
            allowNull:false
        }
    })

    Evenement.associate=models=>{
      Evenement.belongsTo(models.Category,{
        onDelete:"cascade"
    })
    Evenement.belongsTo(models.User,{
      onDelete:"cascade"
  })
  }

return Evenement

}