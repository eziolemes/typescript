var firstName = "Ezio";
var idade = 1;
function greeting(name, idade) {
    if (idade >= 18) {
        console.log("Olá " + name + " você é maior de idade");
    }
    else {
        console.log("Olá " + name + " você é menor de idade");
    }
}
greeting(firstName, idade);
// greeting(anotherName)
// greeting(x)
