// Crie uma função que recebe um valor inteiro e retorne verdadeiro se for ímpar ou falso se for par.

function valor(n1) {
    let conta = n1 % 2
    if (conta == 0) {
        document.write(`O numero ${n1} é par`)
    } else {
        document.write(`O numero ${n1} é ímpar`)
    }
}

valor(Number(prompt("Digite um número inteiro")))