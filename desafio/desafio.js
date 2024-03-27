// Criar uma funcionalidade no Projeto Amigo Secreto que permita ao usuário clicar em um amigo na lista e removê-lo. Atualizar a visualização da lista após a remoção.

// Adicione os números 1,2,3 em uma variável chamada minhaLista e armazene os números 4, 5 e 6 separadamente em outra variável. 
// Use o método concat() para combinar as sequências de valores em uma nova lista chamadanovaLista. Imprima novaLista no console.
let minhaLista = [1, 2, 3];
let quatroCincoSeis = [4, 5, 6];

let novaLista = minhaLista.concat(quatroCincoSeis);
console.log(novaLista);
// Remova o último elemento de novaLista. Imprima novaLista após a remoção.
novaLista.pop();
console.log(novaLista)
// Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos em novaLista. 
// Pesquise e adapte o código para realizar o embaralhamento.
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);
        
        // guarda de um índice aleatório da lista
        const elemento = lista[indice - 1];
        
        lista[indice - 1] = lista[indiceAleatorio];
        
        lista[indiceAleatorio] = elemento;
    }
}

embaralha(novaLista);
console.log(novaLista);
// Crie uma função chamada removerDuplicatas que aceita um array como parâmetro e retorna um novo array sem elementos duplicados. 
// este a função com novaLista e imprima o array resultante.

let array = [3, 5, 5, 7, 9, 9, 1, 9, 2, 5, 7, 9, 2, 42, 12, 56, 87, 34, 23, 34];

function removerDuplicatas(array){
const set = new Set(array);
const arraySemDuplicados = Array.from(set);
console.log(arraySemDuplicados);
}

removerDuplicatas(array);