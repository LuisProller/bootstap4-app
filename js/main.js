const btnAdicionar = document.querySelector('#btn-adicionar');

const meuListener = function(event){

  // Impede o envio do formulário por HTTP, prevenindo
  // assim o "refresh" ("F5") da nossa página, para
  // evitar que o nosso JavaScript seja interrompido.
  event.preventDefault();

  //Criar linha de tarefa
  const pai = document.querySelector('#div-pai');

  const filho = document.createElement('div');
  filho.className = 'input-group input-group-sm mb-3';
  filho.innerHTML =
  `
  <div class="d-flex flex-grow-1">
    <div class="flex-grow mr-2 mt-2">
      <input id="cbTarefa" class="form-check-inpu" type="checkbox">
    </div>
    <div class="flex-grow-1">
      <input id="txtInput" type="text" class="form-control" placeholder="Adicionar Item" aria-describedby="basic-addon1">
    </div>
    <div class="flex-grow ml-2">
      <button id="btn-remover" type="button" class="btn btn-danger" >
        <i class="bi bi-trash"></i>
      </button>
    </div>
  </div>
  `
  pai.appendChild(filho);

  //habilitar ou desabilitar a tarefa selecionada
  function tratarLinha(){
    inputText.disabled = btnChecar.checked;

  }

  const btnChecar = filho.querySelector('#cbTarefa');
  const inputText = filho.querySelector('#txtInput');

  btnChecar.addEventListener('click', tratarLinha);


  //remover a tarefa
  function removerTarefa(){
    pai.removeChild(filho);
  }

  const btnRemover = filho.querySelector('#btn-remover');
  btnRemover.addEventListener('click', removerTarefa);

};

btnAdicionar.addEventListener('click', meuListener);
