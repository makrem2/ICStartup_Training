module.exports=(sequelize,DataType)=>{
    const Category=sequelize.define("Category",{
        name: {
            type:DataType.STRING,
            required: true,
          }
    });

    Category.associate=models=>{
        Category.hasMany(models.Formation,{
            onDelete:"cascade"
        })
        Category.hasMany(models.Evenement,{
            onDelete:"cascade"
        })
        Category.hasMany(models.Blog,{
            onDelete:"cascade"
        })
        Category.hasMany(models.Etudiant,{
            onDelete:"cascade"
        })
    }




return Category

}