const form = document.querySelector('form');
const valor = document.getElementById('inputValor');
const juro = document.getElementById('inputJuro');
const mes = document.getElementById('inputMes');

const calculoJuro = function(event) {

    event.preventDefault();

    document.querySelector('output').innerHTML = valor.value * juro.value * mes.value;
}

form.addEventListener('submit', calculoJuro);
