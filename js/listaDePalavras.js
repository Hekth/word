async function listaDePalavras() {
    const req = await fetch('../palavras/dados.json');
    const json = await req.json();
    
    const arrayIterator = Object.values(json);
    return arrayIterator;
}

export default listaDePalavras;
