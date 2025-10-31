import { generarTablero } from "./service/tablero.service.js"

const paresGuardados = localStorage.getItem('pares');
const parejas = parseInt(paresGuardados);


generarTablero(parejas);

const todasLasCartas = document.querySelectorAll('.carta');

let primeraCarta = null;
let segundaCarta = null;
let bloqueoTablero = false;

let parejasEncontradas = 0;

//Temporizador
let tiempoRestante;

let tiempoElemento = document.querySelector('.tiempo');

let temporizadorId = null;

if (parejas === 4) {
    tiempoRestante = 100;
} else if (parejas === 6) {
    tiempoRestante = 90;
} else {
    tiempoRestante = 80;

}

if (tiempoElemento) {
    tiempoElemento.textContent = `${tiempoRestante}s`;
}
iniciarTemporizador()

//Evento cartas: dar la vuelta, comprobar si son pareja, bloquear si son pareja.
todasLasCartas.forEach(carta => {
    carta.addEventListener('click', () => {

        if (bloqueoTablero) return;
        if (carta === primeraCarta) return;
        if (carta.classList.contains('emparejada')) return;

        carta.classList.add('voltear');

        if (!primeraCarta) {
            primeraCarta = carta;
            return;
        }

        segundaCarta = carta;
        bloqueoTablero = true;

        comprobarPareja(primeraCarta, segundaCarta, bloqueoTablero);

        function comprobarPareja(primeraCarta, segundaCarta) {
            const sonPareja = primeraCarta.dataset.valor === segundaCarta.dataset.valor;

            if (sonPareja) {
                setTimeout(() => {
                    deshabilitarCartas();
                }, 2000);

            } else {
                vueltaCartas();
            }
        }

        function deshabilitarCartas() {
            primeraCarta.classList.add('emparejada');
            segundaCarta.classList.add('emparejada');

            parejasEncontradas++;
            if (parejasEncontradas === parejas) {
                clearInterval(temporizadorId);
                localStorage.setItem('resultadoJuego', 'victoria');
                localStorage.setItem('vidas', vidas.toString());
                setTimeout(() => {
                    window.location.href = 'resultados.html';
                }, 3000);
            }

            reiniciarTurno();
        }

        function vueltaCartas() {
            vidas--;
            vidasElemento.textContent = vidas;
            if (vidas === 0) {
                clearInterval(temporizadorId);
                localStorage.setItem('resultado', 'derrota');
                localStorage.setItem('vidas', vidas.toString());
                setTimeout(() => {
                    window.location.href = 'resultados.html';
                }, 1000);
                return;
            }

            setTimeout(() => {
                primeraCarta.classList.remove('voltear');
                segundaCarta.classList.remove('voltear');

                reiniciarTurno();
            }, 2000);

        }

        function reiniciarTurno() {
            primeraCarta = null;
            segundaCarta = null;
            bloqueoTablero = false;
        }
    });
});

//Lógica del temporizador
function iniciarTemporizador() {
    temporizadorId = setInterval(() => {

        tiempoRestante--;
        if (tiempoElemento) {
            tiempoElemento.textContent = `${tiempoRestante}s`;
        }

        if (tiempoRestante <= 0) {
            clearInterval(temporizadorId);
            localStorage.setItem('resultadoJuego', 'derrota');
            localStorage.setItem('vidas', vidas.toString());
            window.location.href = 'resultados.html';
        }
    }, 1000);
}


//Lógica de vidas
let vidasElemento = document.querySelector('.vidas');
let vidas;

if (parejas === 4) {
    vidas = 5;
} else if (parejas === 6) {
    vidas = 4;
} else {
    vidas = 3;
}

if (vidas) {
    vidasElemento.textContent = vidas;
}

