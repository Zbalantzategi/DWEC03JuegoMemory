import { usuarios } from "../model/usuarios.model.js";
import { USUARIOS } from "../data/usuarios.data.js";

export function almacenarDatos() {
    USUARIOS.forEach(usu => {
        localStorage.setItem(usu.usuario, usu.contrasenia);
    });
}


export function comprobarUsuario(inputNombre, inputContrasenia) {

    for (let i = 0; i < localStorage.length; i++) {
        let usuar = localStorage.key(i);
        let contrasenia = localStorage.getItem(usuar);

        if (usuar === inputNombre && contrasenia === inputContrasenia) {
            return true;
        }

    }
    return false;
}