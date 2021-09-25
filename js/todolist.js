const btnAdicionar = document.querySelector('#btn-adicionar');
const pai = document.querySelector('#pai');
// const addItem = function() {
//     // Cria a div filha "solta" (ainda sem qualquer pai):
//     const filho = document.createElement('div');
//     filho.className = 'form-row';
//     filho.innerHTML = `
//     <div class="col">
//       <input id="checkbox" type="checkbox" class="form-control" name="checkbox">
//     </div>
//     <div class="col-10">
//       <input id="text" type="text" class="form-control text-center" name="text">
//     </div>
//     <div class="col">
//       <button id="btn-excluir" type="button" class="form-control btn btn-primary text-center">
//         Excluir
//       </button>
//     </div>
// `;

//     filho.addEventListener("change", function(event) {
//         const checkbox = document.querySelector('#checkbox');
//         const input = document.querySelector('#text');

//         input.disabled = checkbox.checked;
//     });

//     filho.addEventListener("click", function(event) {
//         if (event.target.tagName == 'BUTTON') {
//             pai.removeChild(filho);
//         }
//     });

//     pai.appendChild(filho);
// };

// Cria a div filha "solta" (ainda sem qualquer pai):

// function addItem() {
//     const filho = document.createElement('div');
//     filho.className = 'form-row';
//     filho.innerHTML = `
//     <div class="col">
//       <input id="checkbox" type="checkbox" class="form-control" name="checkbox">
//     </div>
//     <div class="col-10">
//       <input id="text" type="text" class="form-control text-center" name="text">
//     </div>
//     <div class="col">
//       <button id="btn-excluir" type="button" class="form-control btn btn-primary text-center">
//         Excluir
//       </button>
//     </div>
//   `;

//     pai.appendChild(filho);



//     function delfilho() {
//         pai.removeChild(filho);
//     }

//     function checkfilho() {
//         text.disabled = checkbox.checked;
//     }



//     return {
//         addfilho: addfilho,
//         delfilho: delfilho,
//         checkfilho: checkfilho
//     }

// }

function addfilho() {
    const filho = document.createElement('div');
    filho.className = 'form-row';
    filho.innerHTML = `
            <div class="col">
            <input id="checkbox" type="checkbox" class="form-control" name="checkbox">
            </div>
            <div class="col-10">
            <input id="text" type="text" class="form-control text-center" name="text">
            </div>
            <div class="col">
            <button id="btn-excluir" type="button" class="form-control btn btn-primary text-center">
            Excluir
            </button>
            </div>
            `;

    pai.appendChild(filho);

    const checkbox = filho.querySelector('#checkbox');
    const text = filho.querySelector('#text');
    const btnExcluir = filho.querySelector('#btn-excluir');

    function delfilho() {
        pai.removeChild(filho);
    }

    function checkfilho() {
        text.disabled = checkbox.checked;
    }

    btnExcluir.addEventListener('click', () => delfilho());
    checkbox.addEventListener('change', () => checkfilho());
}


btnAdicionar.addEventListener('click', () => addfilho());
