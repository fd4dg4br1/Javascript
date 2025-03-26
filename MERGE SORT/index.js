let num = 0;
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
    const sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) sortedArr.push(leftArr.shift());
        else sortedArr.push(rightArr.shift());
    }
    console.log("L:" + leftArr, "R:" + rightArr, "S:" + sortedArr);
    return [...sortedArr, ...leftArr, ...rightArr];
}

// ---------------------------------------------


// 🔹 1. Implementação Passo a Passo
// Reescreva o Merge Sort sem usar slice() e shift(), apenas com índices e laços for ou while. 
// Isso ajuda a entender melhor o funcionamento interno do algoritmo e evita criação excessiva 
// de novos arrays.

// 🔹 Dica: Trabalhe diretamente com índices ao invés de criar subarrays.

function mergeSortM1(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr;
    const rightArr = arr.slice(mid);
    return mergeM1(mergeSortM1(leftArr), mergeSortM1(rightArr));
}
function mergeM1(leftArr, rightArr) {
    const sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) sortedArr.push(leftArr.shift());
        else sortedArr.push(rightArr.shift());
    }
    console.log("L:" + leftArr, "R:" + rightArr, "S:" + sortedArr);
    return [...sortedArr, ...leftArr, ...rightArr];
}

// 🔹 2. Merge Sort Descendente
// Modifique o código para ordenar os elementos do maior para o menor (ordem decrescente).

// 🔹 3. Merge Sort para Strings
// Modifique o algoritmo para ordenar um array de strings em ordem alfabética.

// Exemplo:

// javascript
// Copiar
// Editar
// const nomes = ["Gabriel", "Amanda", "Carlos", "Beatriz"];
// console.log(mergeSort(nomes));
// ✅ O resultado esperado seria: ["Amanda", "Beatriz", "Carlos", "Gabriel"]

// 🔹 Desafio extra: Faça a ordenação sem considerar letras maiúsculas e minúsculas.


// 🔹 4. Merge Sort em Objetos
// Imagine que você tem uma lista de objetos com nome e idade.

// javascript
// Copiar
// Editar
// const pessoas = [
//     { nome: "Gabriel", idade: 20 },
//     { nome: "Amanda", idade: 25 },
//     { nome: "Carlos", idade: 22 }
// ];
// ✅ Modifique o Merge Sort para ordenar a lista de acordo com a idade das pessoas.

let arr = [8, 20, -2, 4, -6];
arr = mergeSort(arr);
console.log(arr);
