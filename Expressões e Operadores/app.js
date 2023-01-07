/* 

Expressões e Operadores

- Expressions
- Operators
    Binary
    Unary
    Ternary
*/

/* 
    Operadores unários
    typeof
    delete

*/

const person = {
    name: 'Myke',
    age: 25
}

delete person.age

console.log(person)

// Operador Ternario

// Condition ? value1 : value2

let pao = true
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

console.log(0 ? 'verdadeiro' : 'falso')