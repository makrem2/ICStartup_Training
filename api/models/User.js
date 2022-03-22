module.exports=(sequelize,DataType)=>{
    const User=sequelize.define("User",{
        username:{
            type:DataType.STRING,
            allowNull:false
        },
        email:{
            type:DataType.STRING,
            allowNull:false
        },
        password:{
            type:DataType.STRING,
            allowNull:false
        },
    })

    User.associate=models=>{
        User.hasMany(models.Formation,{
            onDelete:"cascade"
        })
        User.hasMany(models.Evenement,{
            onDelete:"cascade"
        })
        User.hasMany(models.Blog,{
            onDelete:"cascade"
        })
    }

return User
}