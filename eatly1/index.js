
//dependencies
const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
mongoose.connect('mongodb://localhost/rest');
//express
const app = express();
//bodyParser
app.use(bodyParser.urlencoded({ extended: true}));
app.use (bodyParser.json());

//set view engine

app.set('view engine','pug');

//rutas
app.use('/api', require('./routes/api'));
// app.get('/', function (req,res){
//   res.send('hola');
// })
//puerto del servidor
app.listen(3100);
console.log("Api Corriendo");
