const {Users}=require('../database-Sequelize/index')

const AllUsers= async(req,res) => {
    try {
    const result=await Users.findAll()
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const AddUser= async(req,res) => {
    try {
    const result=await Users.create(req.body)
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const UpdateUser= async(req,res) => {
    try {
    const result=await Users.update(req.body,{where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const DeleteUser= async(req,res) => {
    try {
    const result=await Users.destroy({where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

module.exports={AllUsers,AddUser,UpdateUser,DeleteUser}