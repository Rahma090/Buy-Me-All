const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/foods", itemController.AllFoods);///get prod
router.post("/admin/add", itemController.CreateFood);/// add prod
router.delete("/admin/delete/:id", itemController.DeleteFood);/// delete prod
router.put("/admin/update/:id", itemController.UpdateFood);///update prod

router.post("/user/add", itemController.AddTBasket);///add to basket
router.get("/basket", itemController.SeeBasket);/// read the basket
router.delete("/basket/delete", itemController.DeleteBasket);/// delete from the basket
router.delete("/basket/delete/:id", itemController.DeleteFBasket);//// clear the basket

router.get("/orders",itemController.AllOrders)///read orders
router.post("/orders",itemController.AddOrders)///read orders

router.put("/admin/pass",itemController.AdminVerify)/// verify the admin pass
router.post("/admin/pass",itemController.postA)/// add new admin 

router.get("/users",itemController.AllUsers)/// get all users
router.post("/user",itemController.NewUser)/// add  a user 

module.exports = router;

