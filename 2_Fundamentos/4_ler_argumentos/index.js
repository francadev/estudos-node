console.log(process.argv)
const args = process.argv.slice(2) //colocar em args o terceiro elemento da lista de argumentos
console.log(args)

const nome = args[0].split('=')[1] //dessa lista, seleciona o primeiro arg e coleta o texto após o =
console.log(nome)

const idade = args[1].split('=')[1]
console.log(idade)