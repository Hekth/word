import dados from "../palavras/dados.json" assert { type: "json" };

function listaDePalavras() {
    const arrayIterator = Object.values(dados);
    return arrayIterator;
}

export default listaDePalavras;
