
//Botones para volver a jugar
const botonJugar = document.getElementById('jugar');
const botonInicio = document.getElementById('inicio');

botonJugar.addEventListener('click', () => {
    window.location.href = 'tablero.html';
});
botonInicio.addEventListener('click', () => {
    window.location.href = 'index.html';
});

//Mostrar resultados
const mensajeTitulo = document.getElementById('mensaje-titulo');
const puntuacionElemento = document.getElementById('puntuacion1');

const vidasParseado = parseInt(localStorage.getItem('vidas'));
const resultado = localStorage.getItem('resultadoJuego');

if (resultado === 'victoria') {
        mensajeTitulo.textContent = '¡FELICIDADES, HAS GANADO!';
        puntuacionElemento.textContent = `Vidas restantes: ${vidasParseado}`;
    } else { // Esto cubre 'derrota' o si no se encuentra el resultado
        mensajeTitulo.textContent = '¡HAS PERDIDO!';
        puntuacionElemento.textContent = `Vidas restantes: ${vidasParseado}`;
    }
