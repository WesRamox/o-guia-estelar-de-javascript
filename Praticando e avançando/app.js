
// declaration
var name

// assignment
// name = "Wesley"

// tipo do dado colocado na variavel
console.log(typeof name)

// agrupamento de declarações
let age, isHuman

age = 15
isHuman = true

// multiplos argumentos na função
// console.log(name, age, isHuman)

// escrita de texto + variaveis
console.log('o ' + name + ' tem ' + age + ' anos')
console.log(`o ${name} tem ${age} anos`)

// Object

const person = {
    name: 'Wesley',
    age: 17,
    weight: 78.2,
    isAdmin: true
}

var { name, ...rest} = person

console.log(name, rest)

const animals = [
    'Lion',
    'Monkey',
    'Cat'
]

// acessar valores do Array
console.log(animals)