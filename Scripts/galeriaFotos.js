var galeriaEl;
var botonTemaClaro;
var botonTemaOscuro;
var botonReset;
var botones;

function aplicarTemaClaro() {
    galeriaEl.removeAttribute('style');

    galeriaEl.className = 'tema-claro';

    quitarResaltadoBotones();
    botonTemaClaro.classList.add('botonActivo');
}

function aplicarTemaOscuro() {
    galeriaEl.className = '';

    galeriaEl.style.backgroundColor = '#343a40';
    galeriaEl.style.padding = '15px';
    galeriaEl.style.border = '2px solid #dc3545';
    galeriaEl.style.borderRadius = '15px';
    galeriaEl.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
    galeriaEl.style.color = '#f8f9fa';

    galeriaEl.style.display = 'flex';
    galeriaEl.style.flexWrap = 'wrap';
    galeriaEl.style.justifyContent = 'space-around';
    galeriaEl.style.gap = '20px';

    quitarResaltadoBotones();
    botonTemaOscuro.classList.add('botonActivo');
}

function restablecerEstilos() {
    galeriaEl.className = '';
    galeriaEl.removeAttribute('style');

    quitarResaltadoBotones();
    botonReset.classList.add('botonActivo');

    setTimeout(() => {
        botonReset.classList.remove('botonActivo');
    }, 500);
}

function quitarResaltadoBotones() {
    botones.forEach(boton => {
        boton.classList.remove('botonActivo');
    });
}

botones.forEach(boton => {

    boton.addEventListener('mouseenter', function() {

        if (!this.classList.contains('botonActivo')) {
            this.classList.add('botonActivo');

            // Guardamos el estado original para saber si debemos quitar la clase al salir
            this.dataset.temporal = 'true';
        }
    });

    boton.addEventListener('mouseleave', function() {
        // Solo quitamos la clase si fue aÃ±adida temporalmente por el hover
        if (this.dataset.temporal === 'true') {
            this.classList.remove('botonActivo');
            this.dataset.temporal = 'false';
        }
    });
});

function inicializaReferencias(){
    galeriaEl = document.getElementById('galeria');
    botonTemaClaro = document.getElementById('tema-claro');
    botonTemaOscuro = document.getElementById('tema-oscuro');
    botonReset = document.getElementById('restablecer');
    botones = document.querySelectorAll('button');

    botonTemaClaro.addEventListener('click', aplicarTemaClaro);
    botonTemaOscuro.addEventListener('click', aplicarTemaOscuro);
    botonReset.addEventListener('click', restablecerEstilos);
}

restablecerEstilos();