"use strict";
// 1 - type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar a soma!");
    }
}
sum("4", "59");
sum(12, 42.3);
sum("4", 6);
// 2 - checando se valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor, defina uma operação");
    }
}
operations([1, 2, 3,]);
operations([1, 2, 3,], "sum");
operations([1, 2, 8,], "multiply");
// 3 - instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const paul = new SuperUser("Paul");
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(jhon);
userGreeting(paul);
// 4 - operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");
function showDetails(dog) {
    if ('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`);
    }
    else {
        console.log("O cachorro é um SRD");
    }
}
showDetails(turca);
showDetails(bob);
// 1 - criar uma função que recebe reviw dos usuarios , precisar usar 
//     narrowing para receber o dado;
// 2 - 
function review(nota) {
    if (typeof nota === "boolean") {
        if (!nota) {
            console.log("Usuário não informou nenhuma nota.");
        }
        else {
            console.log("Usuário não informou uma nota válida");
        }
    }
    else if (typeof nota === "number") {
        if (nota == 1) {
            console.log("Usuário classificou com nota 1");
        }
        else if (nota == 2) {
            console.log("Usuário classificou com nota 2");
        }
        else if (nota == 3) {
            console.log("Usuário classificou com nota 3");
        }
        else if (nota == 4) {
            console.log("Usuário classificou com nota 4");
        }
        else if (nota == 5) {
            console.log("Usuário classificou com nota 5");
        }
        else {
            console.log("Nota inválida!");
        }
    }
}
review(true);
review(false);
review(1);
review(2);
review(3);
review(4);
review(5);
review(6);
