const dialog = document.querySelectorAll('dialog');
const btnPular = document.querySelectorAll('.btn__pular');
const btnProximo = document.querySelectorAll('.btn__proximo');
const btnJogar = document.querySelector('.btn-jogar');

const mostrarTutorial = localStorage.getItem('mostrarTutorial') || null;

if (!mostrarTutorial) {
    dialog[0].showModal();
    
    btnJogar.addEventListener('click', () => fechaModal());
    
    btnPular.forEach((btn, index) => {
        btn.addEventListener('click', () => fechaModal());
        btnProximo[index].addEventListener('click', () => proximoModal(index));
    });

    localStorage.setItem('mostrarTutorial', 'no');
}

function fechaModal() {
    dialog.forEach((element) => element.close());
}

function proximoModal(index) {
    fechaModal();
    dialog[index + 1].showModal();
}


