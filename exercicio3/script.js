//Criei três arrays
const arrayNumero = [17,9,7,14]
const arrayString = ['Camilla', 'Paulo', 'Thiago','Jaciara']
const arrayMisto = ['aniversário',01, 5>3,]

//Adicionando um valor ao final da array
console.log('____________________________________________')
console.log(arrayNumero)
const novaNumero = arrayNumero.slice()
novaNumero.push(23)
console.log(novaNumero)

console.log('____________________________________________')
//Tirar o ultimo elemento da array
console.log(arrayString)
const novaString = arrayString.slice()
novaString.pop()
console.log(novaString)

console.log('____________________________________________')
//Remover o segundo item da array
console.log(arrayMisto)
const novaMisto = arrayMisto.slice()
novaMisto.splice(1,1)
console.log(novaMisto)