const btnIniciar = document.querySelector('#btn-iniciar');
const btnPausar = document.querySelector('#btn-pausar');
const btnParar = document.querySelector('#btn-parar');

const estado = {
    msAtual: 0,
    acao: 'parado',
};

btnIniciar.addEventListener('click', () => computa('inicia'));
btnPausar.addEventListener('click', () => computa('pausa'));
btnParar.addEventListener('click', () => computa('parar'));


function computa(evento) {
    switch (estado.acao) {
        case 'parado':
            switch (evento) {
                case 'inicia':
                    estado.acao = 'contando';
                    break;
                case 'parar':
                    estado.msAtual = 0;
                    break;
            }
            break;
        case 'contando':
            switch (evento) {
                case 'pausa':
                    estado.acao = 'parado';
                    break;
                case 'parar':
                    estado.msAtual = 0;
                    estado.acao = 'parado';
                    break;
            }
            break;
    }

    console.log(estado);
}

setInterval(() => {
    if (estado.acao === 'contando') {
        estado.msAtual += 100;
    }

    document.querySelector('output').innerHTML = (estado.msAtual / 1000).toFixed(1);
}, 100)
