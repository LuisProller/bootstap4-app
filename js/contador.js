const btnIniciar = document.querySelector('#btn-iniciar');
const btnPausar = document.querySelector('#btn-pausar');
const btnZerar = document.querySelector('#btn-zerar');

let count = 0;

const meuListener = function(delta) {

    count = count + delta;
    const output = document.querySelector('output');
    if (count > 0) {
        output.innerHTML = `<span class="text-success">${count}</span>`;
    } else {
        output.innerHTML = `<span class="text-danger">${count}</span>`;
    }

};

// btnDiminuir.addEventListener('click', function(){ meuListener(-1) });
// btnAumentar.addEventListener('click', function(){ meuListener(+1) });

btnDiminuir.addEventListener('click', () => meuListener(-1));
btnAumentar.addEventListener('click', () => meuListener(+1));
