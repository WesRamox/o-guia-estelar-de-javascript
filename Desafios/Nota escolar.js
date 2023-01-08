// variavel das notas do sistema

function getNota(nota) {

let notaA = nota >= 90 && nota <= 100
let notaB = nota >= 80 && nota <= 89
let notaC = nota >= 70 && nota <= 79
let notaD = nota >= 60 && nota <= 69
let notaF = nota < 60 && nota >= 0

let notaFinal

    if(notaA) {
        notaFinal = "A"
    } else if(notaB) {
        notaFinal = "B"
    } else if(notaC) {
        notaFinal = "C"
    } else if(notaD) {
        notaFinal = "D"
    } else if(notaF) {
        notaFinal = "F"
    } else {
        notaFinal = "Nota inválida"
    }
    return notaFinal
}

console.log(getNota(30))
console.log(getNota(10))
console.log(getNota(60))
console.log(getNota(45))
console.log(getNota(80))
console.log(getNota(100))
console.log(getNota(9))


