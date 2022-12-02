"use strict";
// 1 - void
function withoutReturn() {
    console.log("Esta função não tem retorno");
}
withoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função!");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "João");
// 3- generic functions
function firstELement(arr) {
    return arr[0];
}
console.log(firstELement([1, 2, 3]));
console.log(firstELement(['a', 'b', 'c']));
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: "Ezio" }, { age: 32, job: "Programmer" });
console.log(newObject);
// 4 - constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "5"));
// 5 - especificar tipo de argumento
function mergeArray(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArray([1, 2, 3], ["teste", "testando"]));
// 6 - parametros adicionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting("Ezio"));
console.log(modernGreeting("Ezio", "Dr."));
// 7 - parametro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(15, 12));
// 8 - unknown
// este tipo sempre vai lhe obrigar a validar o tipo de dado recebido para poder trabalhar com ele
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("é um número");
    }
}
doSomething([1, 2, 4]);
doSomething(5);
// 9 - never
function showErrorMessage(msg) {
    throw new Error(msg);
}
//showErrorMessage("Algum erro")
// 10 - Rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(1, 2, 235));
// 11 - destructuring como parametro
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa R${price}`;
}
const shirt = { name: "Camisa", price: 49.99 };
console.log(showProductDetails(shirt));
