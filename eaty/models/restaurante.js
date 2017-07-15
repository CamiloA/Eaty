const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


//conexion
mongoose.connect('mongodb://localhost/rest');
//definiendo Schema

var restauranteSchema = new mongoose.Schema({
  nombre: String,
  tipo_restaurante: String,
  valoracion: Number,
  direccion: String,
  rango_precios: String,
  telefono: Number

})
var Restaurante = mongoose.model("Restaurante",restauranteSchema);

module.exports = Restaurante;
