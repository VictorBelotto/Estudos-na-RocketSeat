## Prototype
    *Aprofundar nesse assunto*
```JS
 
    *prototype-based language
    *prototype chain
    *__proto__

    //O JS é uma linguagem baseada em prototipos, dentro dela temos diversas funcionalidades que melhoram a manipulação de dados

    *exemplo como o .length, que retorna o tamanho de um array e etc...
```
///////////////////////////////////////////////////////////////////////
## Type conversion (typecasting) vs Type coersion
```JS
// Type conversion (typecasting) vs Type coersion
    * Alteração de um tipo de dado para outro tipo

console.log('9' + 5) /* O JS vai concatenar os valores e mostrar "95", isso é o Type coersion, ele mudou o "5" que era um tipo NUMBER para uma STRING,
ele faz isso sozinho para que não tenha nem um erro*/

// E podemos alterar manualmente tambem para que ocorra a soma dos valores, alterando o tipo STRING para NUMBER, Type conversion (typecasting)

console.log(Number('9') + 5) // O resultado sera realmente a soma "14", pois mudamos o tipo do "9" que era uma STRING para um tipo Number.
```
///////////////////////////////////////////////////////////////////////

## Manipulando Strings e Numeros
```JS
// Manipulando Strings e Numeros

let string = "123";
console.log(Number(string)); //conversão de string para number

let number = 321
console.log(String(number)); //conversão de numero para string

## Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word = "Paralelepipedo";
console.log(word.length) //Retorna a quantidade de caracteres da palavra, se houver espaços ele conta também!!

let number = 123;
console.log(String(number).length)
```
/////////////////////////////////

## Transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula
```JS
let number = 345.33455555

//(toFixed para deixar com X casas depois do PONTO) e (replace para trocar um caracter por outro, primeiro o caracter que você quer mudar e no outro por qual trocar)

console.log(number.toFixed(2).replace(".", ",")) 

// Usando o replace para colocar virgula, o objeto perde o sentido de ser um numero e vira uma string, mesmo tentando converter ele ficara como "NaN"
```

## Transformar Letras minusculas em maiusculas e vice versa
```JS
let word = "Programar é muito legal";
console.log(word.toUpperCase()) // Deixa tudo MAIUSCULO
console.log(word.toLowerCase()) // Deixa tudo minusculo
```
## Modificar espaços no array
* Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array.  
* Depois disso transforme o array em um texto e onde eram espaços, coloque "_"
```JS


let phrase = "Eu quero qualquer coisa BLA BLA BLA";
let myArray = phrase.split(" ");// recebe como argumento o que você quer separar na frase(no caso o espaço), vira um ARRAY
let phraseWithWunderscore = myArray.join("_") //passar como argumento o que colocar no meio para juntar as frases 
console.log(phraseWithWunderscore)

//ainda poderia usar outra função
console.log(phraseWithWunderscore.toLowerCase)


```

//////////////////////////////////////////////////////////////////////
## Manipulando Strings
* Verificar se o texto contém a palavra AMOR

```JS
let phrase = "Eu quero viver o Amor";
console.log(phrase.includes("Amor")); // Esse metodo é Case Sensitive, se tiver maiuscula e procurar minuscula ele retorna false


// Podemos fazer assim para ajudar a verificar
let phrase = "Eu quero viver o Amor";
console.log(phrase.includes("amor")); // Retorna False

console.log(phrase.toUpperCase().includes("AMOR")) //Retorna True

console.log(phrase.toLowerCase().includes("amor")) //Retorna True


```
/////////////////////////////////////
## Array com construtor
```JS
let myArray = new Array('a',  'b', 'c')
console.log(myArray)

```
/////////////////////////////////////
## Contar elementos de um Array
```JS

console.log(Array.length) //Retorna o tamanho do array

let Array = ["a",
{type: "array"} ,
() => {return "oi"}
]

console.log(Array[2]())

```
////////////////////////////////////////////////////////////////////////
```JS
let word = "manipulação";
console.log(Array.from(word)) //recebe a string como argumento e separa cada letra em um elemento do array
```
//////////////////////////////////////////////////////////////////////////////////

## Manipulando Arrays


    *adicionar um item no fim
    
        techs.push("nodeJS")
    
    *adicionar no começo
        techs.unshift("sql")

    *remover do fim
        techs.pop()

    *remover do começo
     techs.shift()

    *pegar somente alguns elementos do array
    *console.log(techs.slice(1, 3)) *posição inicial do array e posição final do array para cortar *nesse caso ele só retorna

    *remover 1 ou mais elementos em qualquer posição do array
        

    * Encontrar o primeiro indice  de um elemento no array
        console.log(techs.indexOf('js'));

```JS
let techs = ["html","css", "js"];

//adicionar um item no fim
techs.push("nodeJS")

//adicionar no começo
techs.unshift("sql")

//remover do fim
techs.pop()

//remover do começo
techs.shift()

//pegar somente alguns elementos do array
//console.log(techs.slice(1, 3)) //posição inicial do array e posição final do array para cortar //nesse caso ele só retorna

//remover 1 ou mais elementos em qualquer posição do array
techs.splice(1, 2)//posiçao inicial e quantos quer remover

//Encontrar o primeiro indice  de um elemento no array
console.log(techs.indexOf('js'));

let indexJs = techs.indexOf('js');
console.log(indexJs)
techs.splice(indexJs, 1)//posiçao inicial e quantos quer remover
console.log(techs)

```
////////////////////////////////////////////////////////////////////////////////////
 