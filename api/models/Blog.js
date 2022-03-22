module.exports=(sequelize,DataType)=>{
    const Blog=sequelize.define("Blog",{
        title: {
          type:DataType.STRING,
          required: true,
          },
          desc: {
            type:DataType.STRING,
            required: true,
          },
          photo: {
            type:DataType.STRING,
            required: false,
          },
          username: {
            type:DataType.STRING,
            required: true,
          }
    })

    Blog.associate=models=>{
      Blog.belongsTo(models.Category,{
          onDelete:"cascade"
      })
      Blog.belongsTo(models.User,{
        onDelete:"cascade"
    })
  }


return Blog

}