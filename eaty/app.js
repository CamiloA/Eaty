const express = require ("express");
const path = require('path');
const bodyParser = require('body-parser');
const User  = require('./models/user').User;
const Restaurante  = require('./models/restaurante');
const method_override = require ('method-override');
const app = express();
const restful = require("node-restful");

// //conexion
// mongoose.connect('mongodb://localhost/rest');
// //definiendo Schema
// var userSchemaJSON = {
//   usuario: String,
//   clave: String
//
// };
//
// var user_shcema = new Schema(userSchemaJSON);
//
// var User = mongoose.model('User',user_shcema);
//servir archivos estaticos
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, 'public')));
//parser
app.use(bodyParser.json()); //json
app.use(bodyParser.urlencoded({ extended: true}));
app.use(method_override("_method"));

// //rutas api
// app.get('/api', function (req, res){
//   res.send("./routes/api");
//})
//rutas
// app.use('/api', require('./routes/api'));

app.get('/login', function (req,res) {
  res.render('login')
})
app.get('/', function (req,res) {
  res.render('index')
})
app.get('/restaurantes',function (req, res) {
  Restaurante.find(function (error,doc) {
       if(error){ console.log(error);}
       res.render("restaurantes",{ restaurantes: doc}) //mostrar productos en la vista
   });

})


app.put ("/editar/:id",function (req,res){
  var id = req.params.id
  var data = {
        nombre: req.body.nombre,
        tipo_restaurante: req.body.tipo,
        valoracion: req.body.val,
        direccion: req.body.direccion,
        rango_precios: req.body.rango,
        telefono: req.body.tel
    }
    Restaurante.update({ "_id": id }, data, function(restaurante){
  res.redirect('/restaurantes')
  console.log("editado",data)
 })

})
app.get("/editar/:id",function(req,res) {
  var id_restaurante = req.params.id;
  console.log(id_restaurante)
  Restaurante.findOne({_id: id_restaurante}, function (eror, doc) {
    console.log(doc);
    res.render('editar',{ restaurante: doc})

  })
});
//ruta agregar
app.post('/add',function(req,res){
console.log(req.body);
  var data = {
        nombre: req.body.nombre,
        tipo_restaurante: req.body.tipo,
        valoracion: req.body.val,
        direccion: req.body.direccion,
        rango_precios: req.body.rango,
        telefono: req.body.tel
    }
    var restaurante = new Restaurante (data);
restaurante.save(function(err) {
  console.log(restaurante);
  res.redirect('/add');
})

})
app.get('/add',function (req, res) {
  res.render('add');
})
app.post('/usuarios',function (req, res) {
  // var user = new User ({usuario: "admin", clave: "admin"})
  // user.save(function () {
  //   console.log(user);
  // })
  // res.send("hola");

})
app.get("/delete/:id",function (req, res) {

  var id_restaurante = req.params.id;
  console.log(id_restaurante)
  Restaurante.findOne({_id: id_restaurante}, function (eror, doc) {
    console.log(doc);
    res.render('delete',{ restaurante: doc})

  })
})
app.delete("/delete/:id/",function(req,res){
    var id = req.params.id;
            Restaurante.remove({"_id": id},function(err){
              res.redirect("/restaurantes");
              if (err){ console.log(err);}
          });

});



app.listen(3000);
console.log("encendido");
