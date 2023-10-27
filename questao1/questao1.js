// Crie uma função que recebe 3 notas de um aluno por parâmetro e
// uma letra. Se a letra for A a função deve calcular a média aritmética,
// se for P, a média ponderada (peso: 5, 3 e 2).



function media(n1, n2, n3, caracter) {
    if (caracter == "a") {
        let media = (n1 + n2 + n3) / 3
        return media
    }else if(caracter == "p") {
        media = ((n1 * 5)+ (n2 * 3) + (n3 * 2)) / 10 
        return media
    } else {
        return "Letra inválida, selecione 'a' ou 'p'."
    }
}

let nota1 = 4
let nota2 = 2
let nota3 = 1
let letra = prompt("Escolha 'a' para media aritmética e 'p' para media ponderada")

let resultado = media(nota1, nota2, nota3, letra)

if (letra == "a") {
    document.write(`A média aritmética é ${resultado}`)
}else if(letra == "p") {
    document.write(`A média ponderada é ${resultado}`)
} else {
    document.write(resultado)
}


