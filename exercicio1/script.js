// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
const sacolao = []

/* a) Fora do array, crie **três objetos** que vão representar frutas do sacolão. Os objetos devem ter as seguintes 
propriedades: 

```jsx
nome: string;
preco: number;
disponibilidade: boolean;
``` */

const compras = {
    nome1: "Banana",
    preço1: 5.20,
    disponibilidade1: true,

    nome2: "Carne",
    preço2: 15.00,
    disponibilidade2: true,

    nome3: "Arroz",
    preço3: 8.00,
    disponibilidade3: true,
}

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**.
sacolao.push(compras)

// c) Imprima o array `sacolao`, e certifique-se de que agora ele seja um array **com três objetos**.
console.log(sacolao);