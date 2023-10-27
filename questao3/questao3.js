// Crie uma função que recebe por parâmetro um valor inteiro e
// positivo e retorne verdadeiro se o número for primo ou falso se não for.

verificaPrimo(Number(prompt("Digite um número inteiro")))

function verificaPrimo(n1) {
    let numerodivisores = 0
    for (let i = 1; i <= n1; i++) {
        if (n1 % i == 0) {
            numerodivisores++
        }
    }
    if (numerodivisores == 2) {
        document.write("verdadeiro")
    } else {
        document.write("falso")
    }
}