let arrayAmigos = [];

function adicionar(){
    let amigo = document.getElementById("nome-amigo");
    let listaAmigos = document.getElementById("lista-amigos");
    
    arrayAmigos.push(amigo.value);
    if (listaAmigos.textContent == ""){
        listaAmigos.textContent = amigo.value;
    }else{
        listaAmigos.textContent = listaAmigos.textContent + ", " + amigo.value
    }
    amigo.value = "";

    atualizarLista();
    atualizarSorteio();
}

function sortear() {
    embaralhar(arrayAmigos);

    let listaSorteio = document.getElementById('lista-sorteio');
    
    for (let i = 0; i < arrayAmigos.length; i++) {
        if (i == arrayAmigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + arrayAmigos[i] +' --> ' + arrayAmigos[0] + '<br/>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + arrayAmigos[i] +' --> ' + arrayAmigos[i + 1] + '<br/>';
        }
    }

}

function reiniciar(){
    arrayAmigos = [];
    document.getElementById('lista-sorteio').innerHTML = "";
    document.getElementById("lista-amigos").innerHTML = ""
}

function embaralhar(lista){
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function excluirAmigo(index) {
    arrayAmigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarSorteio() {
    let listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = '';
}

function atualizarLista() {
    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = '';


    for (let i = 0; i < arrayAmigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = arrayAmigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        listaAmigos.appendChild(paragrafo);
    }
}





// DESAFIO:
// Criar uma funcionalidade no Projeto Amigo Secreto que permita ao usuário clicar em um amigo na lista e removê-lo. Atualizar a visualização da lista após a remoção.

// Adicione os números 1,2,3 em uma variável chamada minhaLista e armazene os números 4, 5 e 6 separadamente em outra variável. Use o método concat() para combinar as sequências de valores em uma nova lista chamadanovaLista. Imprima novaLista no console.

// Remova o último elemento de novaLista. Imprima novaLista após a remoção.

// Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos em novaLista. Pesquise e adapte o código para realizar o embaralhamento.

// Crie uma função chamada removerDuplicatas que aceita um array como parâmetro e retorna um novo array sem elementos duplicados. Teste a função com novaLista e imprima o array resultante.