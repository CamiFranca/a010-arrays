const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const arrayNumero = [17,9,7,14]
const arrayString = ['Camilla', 'Paulo', 'Thiago','Jaciara']
const arrayMisto = ['aniversário',01, 5>3]
console.log('______________________________________________')
//parte um do exercício: Imprimi a quantidade de coisas do array
console.log(arrayNumero.length-1)
console.log(arrayString.length-1)
console.log(arrayMisto.length-1)
console.log('_____________________________________________')
// parte dois do exercício: Imprimi partes especificas do array
console.log(arrayNumero[0])
console.log(arrayString[1])
console.log(arrayMisto[2])
console.log('____________________________________________')
//Parte três do exercício: Pesquisar se existe ou não um elemento dentro de duas arrays
let arrayVerdadeira = arrayNumero.includes(7)
console.log(arrayVerdadeira)
let arrayFalsa = arrayMisto.includes(3>5)
console.log(arrayFalsa)
