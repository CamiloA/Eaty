//dependencies


const express = require('express');
const router = express.Router();

//models
var Restaurante = require('../models/restaurante');

Restaurante.methods(['get','put','post','delete']);
Restaurante.register(router,'/restaurantes')




router.get('/restaurantes', function (req,res){
  res.send('api funcionando');
})

module.exports = router;
