//Función para generar el tablero 
export function generarTablero(pares) {
    const rutasImagenes = [
        '../../img/imagen1.png',
        '../../img/imagen2.png',
        '../../img/imagen3.png',
        '../../img/imagen4.png',
        '../../img/imagen5.png',
        '../../img/imagen6.png',
        '../../img/imagen7.png',
        '../../img/imagen8.png',
    ];

    //selección de rutas necesarias para el nivel y duplicación de array para los pares
    const tablero = document.getElementById('tablero');
    let cartasJuego = rutasImagenes.slice(0, pares);
    let cartasTotales = [...cartasJuego, ...cartasJuego];

    if (pares === 4) {
        tablero.style.gridTemplateColumns = 'repeat(4, 1fr)';
        
    } else if (pares === 6) {
        tablero.style.gridTemplateColumns = 'repeat(6, 1fr)';
    } else if (pares === 8) {
        tablero.style.gridTemplateColumns = 'repeat(8, 1fr)';

    };
    
    
    //Añadir las cartas a el tablero
    cartasTotales.forEach(ruta => {
        

        const contenedorCarta = document.createElement('div');
        contenedorCarta.classList.add('carta');

        contenedorCarta.dataset.valor = ruta;

        const anverso = document.createElement('div');
        anverso.classList.add('anverso');
        anverso.textContent = '?';

        const reverso = document.createElement('div');
        reverso.classList.add('reverso');

        const imgFrente = document.createElement('img');
        imgFrente.src = ruta;
        
        reverso.appendChild(imgFrente);
        contenedorCarta.appendChild(anverso);
        contenedorCarta.appendChild(reverso);
        tablero.appendChild(contenedorCarta);

    });
    

}



