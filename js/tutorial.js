const dialog = document.querySelectorAll('dialog');
const btnPular = document.querySelectorAll('.btn__pular');
const btnProximo = document.querySelectorAll('.btn__proximo');
const btnJogar = document.querySelector('.btn-jogar');
const duvida = document.querySelector('.cabecalho__duvida');

const mostrarTutorial = localStorage.getItem('mostrarTutorial') || null;

btnJogar.addEventListener('click', () => fechaModal());
    
btnPular.forEach((btn, index) => {
    btn.addEventListener('click', () => fechaModal());
    btnProximo[index].addEventListener('click', () => proximoModal(index));
});

duvida.addEventListener('click', () => dialog[0].showModal());

if (!mostrarTutorial) {
    dialog[0].showModal();
    
    localStorage.setItem('mostrarTutorial', 'no');
}

function fechaModal() {
    dialog.forEach((element) => element.close());
}

function proximoModal(index) {
    fechaModal();
    dialog[index + 1].showModal();
}


