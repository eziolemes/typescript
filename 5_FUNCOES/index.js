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
