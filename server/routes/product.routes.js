const productRouter = require('express').Router();
const {AllProduct,GetProduct,AddProduct,UpdateProduct,DeleteProduct} = require('../controllers/product.controllers');



productRouter.get('/products',AllProduct)
productRouter.get('/products/:id',GetProduct)
productRouter.post('/product',AddProduct)
productRouter.put('/product/:id',UpdateProduct)
productRouter.delete('/product/:id',DeleteProduct)


module.exports=productRouter;