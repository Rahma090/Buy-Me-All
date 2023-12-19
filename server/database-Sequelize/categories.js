const Categories =(connection,DataTypes)=>{
    return connection.define("categories", {
   user_name: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   user_phOrEmail: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   user_password: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   user_role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
   user_img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
 })

};

module.exports=Categories;