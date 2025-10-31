import {usuarios} from "../model/usuarios.model.js";

const jsonUsuarios = `[   
   {
      "id":1,
      "nombre" : "Iker",
      "apellido" : "Arana",
      "usuario":"iarana",
      "contrasenia":"1234Abcd"
   },
   {
      "id":2,
      "nombre" : "Ander",
      "apellido" : "Goikoetxea",
      "usuario":"agoikoetxea",
      "contrasenia":"5678Efgh"
   },

   {
      "id":3,
      "nombre" : "Jokin",
      "apellido" : "Olano",
      "usuario":"jolano",
      "contrasenia":"9012Ijkl"
   }
]`;

const usu = JSON.parse(jsonUsuarios);

export const USUARIOS = [];

usu.forEach(usuario => {
   USUARIOS.push(new usuarios(usuario.id, usuario.nombre, usuario.apellido, usuario.usuario, usuario.contrasenia));
});