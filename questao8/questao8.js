// Crie uma função chamada mostrarDobro(num), que recebe um
// parâmetro sendo um número inteiro. Esta função será chamada ao
// abrir a página e mostrará um alerta com o resultado. Exemplo: “O
// dobro do número 5 é 10.”

function mostrarDobro(num) {
    let resultado = num * 2
    document.write(`O dobro do número ${num} é ${resultado}.`)
}

let numero = mostrarDobro(Number(prompt("Digite um número inteiro")))