const {Categories,Product}=require('../database-Sequelize/index')

const AllCategory = async(req,res) => {
    try {
    const result=await Categories.findAll({
        include: Product
      });
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const OneCategory = async(req,res) => {
    try {
    const result=await Categories.findAll({
        include: {
          model: Product,
          as: 'products',
          where: {
            categoryId:req.params.id
          }
        }
      })
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const AddCategory = async(req,res) => {
    try {
        console.log(req.body)
    const result=await Categories.create(req.body)
    console.log("test",result);
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const DeleteCategory= async(req,res) => {
    try {
    const result=await Categories.destroy({where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

module.exports={AllCategory,OneCategory,AddCategory,DeleteCategory}