// Gerar 10 números aleatórios entre 1 e 100
let numeros = [];
for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);  // Gera número entre 1 e 100
}

// Função para ordenar números em ordem crescente
function ordenarCrescente(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// Função para ordenar números em ordem decrescente
function ordenarDecrescente(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// Função para verificar se um número é primo
function ePrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;  // Não é primo
        }
    }
    return true;  // É primo
}

// Função para separar números pares, ímpares e primos
function separarNumeros(arr) {
    let pares = [];
    let impares = [];
    let primos = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            pares.push(arr[i]);
        } else {
            impares.push(arr[i]);
        }

        if (ePrimo(arr[i])) {
            primos.push(arr[i]);
        }
    }

    return { pares, impares, primos };
}

// Ordenando o array
let crescente = ordenarCrescente([...numeros]);
let decrescente = ordenarDecrescente([...numeros]);

// Separando números pares, ímpares e primos
let { pares, impares, primos } = separarNumeros(numeros);

// Exibindo os resultados
console.log("Array original:", numeros);
console.log("Array em ordem crescente:", crescente);
console.log("Array em ordem decrescente:", decrescente);
console.log("Números Pares:", pares);
console.log("Números Ímpares:", impares);
console.log("Números Primos:", primos);
