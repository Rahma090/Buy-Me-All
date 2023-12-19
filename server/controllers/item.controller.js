const restaurant=require('../database-Sequelize/index')

const AllFoods = async(req,res) => {
    try {
    const result=await restaurant.Foods.findAll()
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};
const CreateFood = async(req,res) => {
    try {
    const result=await restaurant.Foods.create(req.body)
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};
const UpdateFood = async(req,res) => {
    try {
    const result=await restaurant.Foods.update(req.body,{where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};
const DeleteFood = async(req,res) => {
    try {
    const result=await restaurant.Foods.destroy({where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};
const AddTBasket = async(req,res) => {
    try {
    const result=await restaurant.Basket.create(req.body)
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};
const SeeBasket = async(req,res) => {
    try {
    const result=await restaurant.Basket.findAll()
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const DeleteFBasket = async(req,res) => {
    try {
    const result=await restaurant.Basket.destroy({where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};
const DeleteBasket = async(req,res) => {
    try {
    const result=await restaurant.Basket.truncate()
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};
const AllOrders = async(req,res) => {
    try {
    const result=await restaurant.Users.findAll({
        include: restaurant.Foods
      });
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};
console.log(restaurant);
const AddOrders = async(req,res) => {
    try {
        console.log(req.body)
    const result=await restaurant.orders.create(req.body)
    console.log("test",result);
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const AdminVerify = async(req,res) => {
    try {
        console.log(req.body)
    const result=await restaurant.Admin.findAll({where:{admin_name:req.body.name,admin_password:req.body.password}})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const postA = async(req,res) => {
    try {
    const result=await restaurant.Admin.create(req.body)
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const AllUsers= async(req,res) => {
    try {
    const result=await restaurant.Users.findAll()
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const NewUser= async(req,res) => {
    try {
    const result=await restaurant.Users.create(req.body)
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

module.exports = {AddOrders,AllUsers,NewUser,postA, AllFoods,CreateFood,UpdateFood,DeleteFood,AddTBasket,SeeBasket,DeleteFBasket,DeleteBasket,AllOrders,AdminVerify};
