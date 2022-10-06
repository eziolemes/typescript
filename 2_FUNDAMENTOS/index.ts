// 1 - numbers
let x: number = 10
console.log(x)
console.log(typeof x)

const y: number = 15.584848
console.log(y)
console.log(typeof y)
console.log(y.toPrecision(3))

// 2 - string
const firstName: string = "Ezio"
console.log(firstName.toUpperCase())

let fullName: string

const lastName: string = "Lemes"

fullName = firstName + " " + lastName
console.log(fullName)

// 3 - boolean
let a: boolean = false

console.log(a)
console.log(typeof a)

// 4 - inference e annotation
const ann: string  ="Teste" // feito por annotation

let inf = "Teste" // feito por inference

console.log("testando")
console.log("testando 2")

// 5 - desafio 2

let idade: number = 10
let str_idade = idade.toString()
let mensagem: string = "A idade do João é " + str_idade
console.log(mensagem)