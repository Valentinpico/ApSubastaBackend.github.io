const { Schema, model } = require("mongoose");
const UsuarioSchema = Schema({
  name: {
    type: String,
    required: [true, 'Por favor, ingrese el nombre del usuario'],
  },
  lastName: {
    type: String,
    required: [true, 'Por favor, ingrese el apellido del usuario'],
  },
  email: {
    type: String,
    required: [true, 'Por favor, ingrese el email del usuario'],
  },
  username: {
    type: String,
    required: [true, 'Por favor, ingrese el nombre del usuario'],
      
},
  numberPhone: {
    type: String,
    required: [true, 'Por favor, ingrese el número de telefono'],
  },
  fechaNacimiento: {
    type: Date,
  },
  contrasena: {
    type: String,
    required: [true, 'Por favor, ingrese el nombre del usuario'],
  },
  imageURL: {
    type: String,
  },
});
module.exports = model("Usuario", UsuarioSchema);
