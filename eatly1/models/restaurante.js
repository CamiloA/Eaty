const restful = require ('node-restful');
const mongoose = restful.mongoose;

//schema
var restaurateSchema = new mongoose.Schema({
  nombre: String,
  tipo_restaurante: String,
  valoracion: String,
  direccion: String,
  rango_precios: String,
  telefono: String

})



module.exports = restful.model('Restaurante',restaurateSchema);

// {
// "nombre": "Plus Coma",
//   "tipo_restaurante": "Comida Rapida",
//   "valoracion": "3",
//   "direccion": "@18.4739383,-69.9168822,17z/data=!4m5!3m4!1s0x8eaf89ce167aa993:0xf4f546c3a425753e!8m2!3d18.4739332!4d-69.9146935",
//   "rango_precios": "150-300",
//   "telefono": "809987665"
//   }
