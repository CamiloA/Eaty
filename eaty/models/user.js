const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


//conexion
mongoose.connect('mongodb://localhost/rest');
//definiendo Schema
var user_shcema = new Schema({
  usuario: String,
  clave: String,
  email:String,
  rol: String
});
var User = mongoose.model("User",user_shcema);
module.exports.User = User;
