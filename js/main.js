import { almacenarDatos, comprobarUsuario } from "./service/usuarios.service.js";
import { generarTablero } from "./service/tablero.service.js"

almacenarDatos();

const botonEntrar = document.getElementById('boton');

//Comprobar datos y contraseña en el index.html
if(botonEntrar != null) {
    
    botonEntrar.addEventListener('click', function () {

    const inputNombre = document.getElementById('nombre').value;
    const inputContrasenia = document.getElementById('contrasenia').value;

    const regExp = /^[A-Za-z0-9]+$/;

    if (!regExp.test(inputContrasenia)) {
        alert('Introduce una contraseña válida');
        return;
    }

    if (comprobarUsuario(inputNombre, inputContrasenia)) {
        window.location.href = 'bienvenida.html';
    } else {
        alert("No existe ningún usuario con ese nombre y contraseña");
    }

    });
}

//Creación dinámica del tablero al pulsar FÁCIL, DIFICIL, O INTERMEDIO


const facil = document.getElementById('facil');
const intermedio = document.getElementById('intermedio');
const dificil = document.getElementById('dificil');

export let parejas;

if(facil != null) {
    facil.addEventListener('click', function () {
    parejas = 4;
    localStorage.setItem('pares', parejas.toString());
    window.location.href = 'tablero.html';
    
});

}

if(intermedio != null) {
    intermedio.addEventListener('click', function() {
    parejas = 6;
    localStorage.setItem('pares', parejas.toString());
    window.location.href = 'tablero.html';
});
}

if(dificil != null) {
    dificil.addEventListener('click', function () {
    parejas = 8;
    localStorage.setItem('pares', parejas.toString());
    window.location.href = 'tablero.html';z
});
}






