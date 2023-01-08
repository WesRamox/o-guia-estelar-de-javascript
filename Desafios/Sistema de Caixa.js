/* Sistema de gastos familiar */

var familia = {
    receitas: [100, 50, 10, 1000],
    despesas: [50, 200, 500],
}

function soma(array) {
    let total = 0

    for(let value of array) {
        total += value 
   }

    return total
}

var { receitas, despesas } = familia

function calcSaldo() {
    const calcularReceitas = soma(receitas)
    const calcularDespesas = soma(despesas)

    const total = calcularReceitas - calcularDespesas

    const itsOk = total >= 0


    let balanceText = "Negativo "
    if(itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}

calcSaldo()