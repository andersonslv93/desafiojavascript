//01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'
let dia = "dia"
if (dia === "dia") {
    console.log("claro")
} else {
    console.log("de noite")
}


//02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
  }


//03 - crie uma função que exiba uma mensagem no console
function mensagem(exibir) {
if (exibir === "exiba") {
    return "mensagem exibida"
 }
}
console.log(mensagem("exiba"));


//04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function exibirNome(nome) {
    console.log("Meu nome é " + nome)
}
exibirNome("Anderson")


//05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
let sobreMim = [
    {
        nome: "Anderson",
        idade: 30,
        estiloMusical: ["Rock", "R&B", "hip-hop"]
    }
]
console.log(
    `Meu nome é ${sobreMim[0].nome}, tenho ${sobreMim[0].idade} anos, e curto ouvir ${sobreMim[0].estiloMusical}`
)


//06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
let filmeEmusica =[
    {
        filme: "Os Vingadores",
        musica: "Chris Brown - Under The Influence"
    }
]
console.log (
    `Um filme seria ${filmeEmusica[0].filme}, e uma musica seria ${filmeEmusica[0].musica}`
)


//07 - crie uma função que retorne o triplo do número recebido no parâmetro da função
let numero = 10
console.log(numero * 3)


//08 - crie uma função que  verifique se uma  variável é true ou false
let variavel = true
if (variavel) {
    console.log("A condição é verdadeira")
} else{
    console.log("A condição é falsa")
}


//09 - Crie um array que receba 5 itens e exiba no console.
let cores = ["verde", "azul", "cinza", "amarelo", "roxo"];
console.log(cores)


//10 - Utilize um método para adicionar um nome ao inicio do array.
let comida = ["arroz", "frango", "macarrão", "feijão", "batata"]
console.log(comida)
comida.unshift("carne")
console.log(comida)


//11 - Utilize um método para remover o último nome do array.
let nomes = ["Anderson", "Fernanda", "Maria", "Roberto", "Paulo"]
console.log(nomes)
nomes.pop()
console.log(nomes)


//12 - Utilize um método para adicionar dois nomes ao fim do array.
let animais = ["cachorro", "gato", "hamster", "coelho", "cobra"]
console.log(animais)
animais.push("elefante", "tigre")
console.log(animais)

//13 - Utilize um método para remover o primeiro nome do array.
let marcas = ["nike", "puma", "adidas", "asics", "mizuno"]
console.log(marcas)
marcas.shift()
console.log(marcas)


//14 - Utilize um método para organizar em ordem crescente o seguinte array:let numbers = [7,5,6,3,8,9,2,1,4]
//(NÃO ME RECORDO)


//15 - Crie um objeto que receba ao menos três propriedades sobre você.
let sobreMim2 = [
    {
        nome: "Anderson",
        altura: 1.72,
        peso: "80kg"
    }
    ];
    console.log(
        `${sobreMim2[0].nome}, ${sobreMim2[0].altura}, ${sobreMim2[0].peso}`
    )

//16 - Adicione uma nova propriedade sem alterar seu objeto inicial.
sobreMim2.push({
    hobbie: ["treinar", "video-game"]
});
console.log(sobreMim2);


//17 - Remova uma propriedade desse objeto.
//(NÃO ME RECORDO)


//18 - Mostre no console todas as propriedades desse objeto.
console.log(sobreMim2)


//19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos. Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. Na propriedade amigos, adicione ao menos 4 amigos.

let cadastro = [
    {
        nome: "Anderson",
        idade: 30,
        telefone: "(21)95487-8905",
        amigos: ["Thiago", "Carlos", "Jonathan", "Marcos"]
    },
    {
        nome: "Marcelo",
        idade: 24,
        telefone: "(21)99674-6341",
        amigos: ["Roberto,", "Kelly", "Amanda", "Paulo"]
    },
    {
        nome: "Ricardo",
        idade: 32,
        telefone: "(21)99102-3645",
        amigos: ["Maria", "Julia", "Juliana", "Paula"]
    },
    {
        nome: "Marcella",
        idade: 31,
        telefone: "(21)94533-6673",
        amigos: ["Vanessa", "Roberta", "Estella", "Enzo"]
    },
    {
        nome: "Isabela",
        idade: 22,
        telefone: "(21)99002-3992",
        amigos: ["Edson", "Edna", "Carol", "Jefferson"]
    }
    ];


//20 - Mostre no console o nome de um amigo de cada lista.
console.log(
    `${cadastro[0].amigos[1]}`
)
console.log(
    `${cadastro[1].amigos[2]}`
)
console.log(
    `${cadastro[2].amigos[3]}`
)
console.log(
    `${cadastro[3].amigos[0]}`
)
console.log(
    `${cadastro[4].amigos[2]}`
)