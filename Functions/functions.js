// function hoisting

// sayMyName();

// function sayMyName() {
//     console.log('Wesley')
// } 

// arrow function

// const sayMyName = () => {
//     console.log('Wesley')
// }

// sayMyName()

// callback function

// function sayMyName(name) {
//     name()
// }

// sayMyName(
//     () => {
//         console.log('Estou em uma callback')
//     }
// )


/* 
    Funções construtoras

    * expressão new
    * criar um novo objeto
    * this keyword

*/

function Person(name) {
    this.name = name
}

const wesley = new Person("Wesley")
const leandro = new Person("Leandro")
console.log(wesley)
console.log(leandro)