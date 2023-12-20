const categoryRoute = require('express').Router();
const {AllCategory,AddCategory,DeleteCategory} = require('../controllers/category.controller');



categoryRoute.get('/category',AllCategory)
categoryRoute.post('/category',AddCategory)
categoryRoute.delete('/category/:id',DeleteCategory)


module.exports=categoryRoute;