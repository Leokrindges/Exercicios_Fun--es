// Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// é um valor perfeito ou falso se não for. Um valor é dito perfeito
// quando ele é igual a soma dos seus divisores excetuando ele
// próprio.


function numeroPerfeito(numero) {
    let somaDivisores = 0
    let divisaoTexto = ""

    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            somaDivisores += i
            divisaoTexto += i
            if (divisaoTexto !== "") {
                divisaoTexto += " + "
            }
            divisaoTexto += i
        }
    }

    if (somaDivisores === numero) {
        return `${numero} é perfeito, pois ${numero} = ${divisaoTexto}, que são seus divisores.`
    } else {
        return `${numero} não é um número perfeito.`
    }
}

const numero = Number(prompt('Digite um número inteiro'))
document.write(numeroPerfeito(numero))
