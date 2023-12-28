import listaDePalavras from "./listaDePalavras.js";
const celulas = document.querySelectorAll('td');
const botoes = document.querySelectorAll('.principal__teclado button');
const aviso = document.querySelector('.aviso');
const jogarNovamenteBtn = document.querySelector('.jogar-novamente');

async function main() {
    const palavras = await listaDePalavras();
    let palavraAleatoria = geraPalavraAleatoria();
    let chutes = [];
    let todosOsChutes = [];
    botoes.forEach((botao) => {
        botao.addEventListener('click', () => {
            if (botao.value === 'enter') {
                if (chutes.length < 5) {
                    mostraAviso('aviso vermelho', 'Preencha todos os campos!');
                    return;
                }
    
                if (!palavras.includes(chutes.join(''))) {
                    mostraAviso('aviso amarelo', 'Esta palavra não consta na lista de palavras!');
                    return;
                }
                
                if (chutes.join('') === palavraAleatoria) {
                    mostraAviso('aviso verde', 'Parabéns, você acertou!');
                    comparaChuteComPalavra();
                    desabilitaTeclado();
                    jogarNovamenteBtn.style.display = 'block';
                    return;
                }

                if (todosOsChutes.concat(chutes).length === 30) {
                    mostraAviso('aviso vermelho', `Que pena, você perdeu! A palavra era: ${palavraAleatoria.toUpperCase()}`);
                    comparaChuteComPalavra();
                    desabilitaTeclado();
                    jogarNovamenteBtn.style.display = 'block';
                    return;
                }
                comparaChuteComPalavra();
                adicionaCoresAoTeclado();
                return;
            }
    
            if (botao.value === 'del') {
                chutes.pop();
                adicionaLetrasNaTabela();
                return;
            }
    
            if (botao.value !== 'del' && botao.value !== 'enter' && chutes.length < 5) {
                aviso.style.display = 'none';
                chutes.push(botao.value);
                adicionaLetrasNaTabela();
            }
        });
    });
    
    jogarNovamenteBtn.addEventListener('click', () => resetaJogo());

    /* --------------------- FUNÇÕES USADAS ------------------ */

    function adicionaLetrasNaTabela() {
        const concatenacao = todosOsChutes.concat(chutes);
        celulas.forEach((celula) => celula.innerText = '');
        concatenacao.forEach((chute, index) => celulas[index].innerText = chute);
    }
    
    function geraPalavraAleatoria() {
        const numeroAleatorio = Math.floor(Math.random() * palavras.length);
        return palavras[numeroAleatorio];
    }
    
    function comparaChuteComPalavra() {
        todosOsChutes = todosOsChutes.concat(chutes);
        chutes = [];
        let indiceEspecifico = 0;
        todosOsChutes.forEach((chute, index) => {
            indiceEspecifico = indiceEspecifico === 5 ? 0 : indiceEspecifico;
            
            if (chute === palavraAleatoria[indiceEspecifico]) {
                celulas[index].style.backgroundColor = 'var(--verde)';
                indiceEspecifico += 1;
                return;
            }
            
            if (palavraAleatoria.includes(chute)) {
                celulas[index].style.backgroundColor = 'var(--amarelo)';
                indiceEspecifico += 1;
                return;
            }
            
            if (!palavraAleatoria.includes(chute)) {
                celulas[index].style.backgroundColor = 'var(--cinza-escuro)';
                indiceEspecifico += 1;
                return;
            }
        });
    }

    function adicionaCoresAoTeclado() {
        botoes.forEach((botao) => celulas.forEach((celula) => {
            if (celula.hasAttribute('style')) {
                if (botao.value === celula.innerText.toLowerCase()) {
                    // botao.disabled = celula.style.backgroundColor === 'var(--cinza-escuro)' ? true : false;
                    botao.style.backgroundColor = botao.style.backgroundColor !== 'var(--verde)' ? celula.style.backgroundColor : 'var(--verde)';
                }
            }
        }));
    }

    function desabilitaTeclado() {
        botoes.forEach((botao) => {
            botao.disabled = true;
            botao.style.backgroundColor = 'var(--cinza-escuro)';
        });
    }

    function habilitaTeclado() {
        botoes.forEach((botao) => {
            botao.disabled = false;
            botao.style.backgroundColor = 'var(--cinza)';
        });
    }

    function limpaCelulas() {
        celulas.forEach((celula) => {
            celula.style.backgroundColor = '';
            celula.innerText = '';
        });
    }

    function mostraAviso(classe, msg) {
        aviso.style.display = 'block';
        aviso.className = classe;
        aviso.innerText = msg;
    }


    function resetaJogo() {
        palavraAleatoria = geraPalavraAleatoria();
        chutes = [];
        todosOsChutes = [];
        habilitaTeclado();
        limpaCelulas();
        aviso.style.display = 'none';
        jogarNovamenteBtn.style.display = 'none';
    }
}

main();
