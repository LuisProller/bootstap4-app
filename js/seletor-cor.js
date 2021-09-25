const form = document.querySelector('form');

console.log('Olá seletor de cor!', form);

const meuListener = function(event) {

    //impede o envio do formulário por HTTP, prevenindo assim o "refresh" F5
    //da nossa página, para evitar que nosso JavaScript seja interrompido
    event.preventDefault();

    //Selecionamos o primeiro input da página
    const input = form.querySelector('input');

    console.log('Input:', input.value);

    //Selecionamos o primeiro body da página
    const body = document.querySelector('body');

    //troca a cor do fundo da pagina
    body.style.backgroundColor = input.value;
};
form.addEventListener('submit', meuListener);