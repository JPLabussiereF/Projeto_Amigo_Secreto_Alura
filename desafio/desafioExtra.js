// Crie uma função que valide se um número é positivo, negativo ou zero.
function positivoNegativoZero(numero){
    if(numero > 0){
        console.log(`O numero digitado foi "${numero}", o mesmo é positivo!`);
    }else if(numero < 0){
        console.log(`O numero digitado foi "${numero}", o mesmo é negativo!`);
    }else if(numero == 0){
        console.log(`O numero digitado foi zero!`);
    }else{
        console.log("ERRO, Insira um número.");
    }
}
positivoNegativoZero(-1);
// Implemente uma função que verifique se uma pessoa é maior de idade.
function maiorDeIdade(idade){
    if(idade >= 18){
        console.log("Você é maior de idade!");
    }else if(idade < 18 && idade >= 0){
        console.log("Você é menor de idade!");
    }else{
        console.log("ERRO, Insira uma idade valida.");
    }
}
maiorDeIdade("a");
// Desenvolva uma função que valide se uma string é vazia ou não.
function vaziaOuNao(string){
    string == "" ? console.log("A string está vazia") : console.log(`A string não está vazia, e a mesma é "${string}"`)
}
vaziaOuNao("");
// Crie uma função que determine se um ano é bissexto
function anoBissexto(ano){
    (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0 ? console.log('É bissexto') : console.log('Não é bissexto');
}
anoBissexto(2016);
// Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.
function mediaDoisNumeros(num1, num2){
    let media = 0;

    isNaN(num1) || isNaN(num2) ? console.log("Os valores digitados devem ser números!") : media = (num1 + num2) / 2;  

    console.log(media);
}
mediaDoisNumeros(2, 5);
// Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.
function arrayTamanho(array){
    console.log(array.length);
}
arrayTamanho([1,2,3,1]);
// Crie um array e utilize a função includes para verificar se um elemento específico está presente
let arrayInclude = [1, 2, 3, 4, 6];
console.log("O array contém o número 5?", arrayInclude.includes(5));
arrayInclude.includes(5) === true ? console.log("Sim, no array tem o número 5.") : console.log("Não, no array não contém o número 5.");
// Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.
let arrayPresente = [3, 7, 9, 1, 2, 5, 42, 12, 56, 87, 34, 23];
function presenteNoArray(array, elemento){
    array.includes(elemento) === true ? console.log("Sim, no array tem esse elemento.") : console.log("Não, no array não contém esse elemento.");
}
presenteNoArray(arrayPresente, 97);

// Crie um array de strings e utilize includes para verificar se uma determinada string está presente.
let arrayString = ["um", "cheiro", "do", "labu", "."];
function stringNoArray(array, string){
    array.includes(string) === true ? console.log("Sim, no array tem essa string.") : console.log("Não, no array não contém essa string.");
}
stringNoArray(arrayString, "labu");
// Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um estudante procurado. 
// Depois retorne se o objeto está presente no array.
const arrayAlunos = [
    { curso_id: 1, nome: 'João', idade: 20 },
    { curso_id: 2, nome: 'Pedro', idade: 18 },
    { curso_id: 3, nome: 'Labussiere', idade: 42 },
    { curso_id: 4, nome: 'França', idade: 68 }
];
function arrayObjetos(array, objeto) {
    return array.some(item => JSON.stringify(item) === JSON.stringify(objeto)); // O método some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.
} // O JSON.stringify()método estático converte um valor JavaScript em uma string JSON, substituindo opcionalmente valores se uma função substituta for especificada ou incluindo opcionalmente apenas as propriedades especificadas se uma matriz substituta for especificada.

const alunoProcurado = { curso_id: 3, nome: 'Labussiere', idade: 42};

const alunoEstaPresente = arrayObjetos(arrayAlunos, alunoProcurado);

alunoEstaPresente == true ? console.log("O aluno está presente no array.") : console.log("O aluno não está presente no array.");
// Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.
let arraySomaEProduto = [3, 7, 10, 9, 1, 29, 2, 5, 42, 12, 56, 87, 34, 23];
function somaParesProdutoImpares(array){
    let somaPares = 0;
    let produtoImpares = 1;

    for(let num of array){ // O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments (en-US) e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.
        num % 2 === 0 ? somaPares += num : produtoImpares *= num;
    }
    console.log(`A soma dos números pares do aray ficou com o valor de: ${somaPares}\nJá o produto dos números impares no array resultou em: ${produtoImpares}`);
}
somaParesProdutoImpares(arraySomaEProduto);
