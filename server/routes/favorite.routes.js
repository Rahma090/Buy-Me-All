const favoriteRoute = require('express').Router();
const {UsersFav,AddToFav,RemoveFav} = require('../controllers/favorite.controller');


favoriteRoute.get('/favorite',UsersFav)
favoriteRoute.post('/favorite',AddToFav)
favoriteRoute.delete('/favorite/:id',RemoveFav)


module.exports=favoriteRoute