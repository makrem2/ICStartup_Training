module.exports=(sequelize,DataType)=>{
    const Etudiant=sequelize.define("Etudiant",{
        name: {
            type:DataType.STRING,
            required: true,
          },
          prenom: {
            type:DataType.STRING,
            required: true,
          },
          email: {
            type:DataType.STRING,
            required: true,
          },
          phone: {
            type:DataType.STRING,
            required: true,
          }
    });

    Etudiant.associate=models=>{
        Etudiant.belongsTo(models.Category,{
            onDelete:"cascade"
        })
    }

return Etudiant

}