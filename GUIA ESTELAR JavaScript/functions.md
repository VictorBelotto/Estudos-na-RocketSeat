## Functions
```JS
//Criar um aplicativo de frases motivacionais

//declararion - declaração da função
//function statement 

function createPhrases(){
    console.log('Estudar é muito bom');
    console.log('Paciência e persistência');
    console.log('Revisão é mãe do aprendizado');
}

//executar a função
//rodar, chamar, invocar
//execute, run, call, invoke

createPhrases()
```
-----------------------------------------
## Arguments e paramenters

```JS

// Function expression
// Function anonymous

//parameters
const sum = function(number1,number2){
    let total = number1 + number2;
    return total
}
let number1 = 10;
let number2 = 20;

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

///////////////////////////////////////////////////

// Função é um liquidificador

function fazerSuco(fruta1, fruta2){
    return 'suco de: ' fruta1 + fruta2;
}

const copo = fazerSuco('banana', 'maça');

console.log(copo); //retorna: * suco de bananamaça

```
------------------------------------------------------------
## funcition scope

```JS


let subject;

function createThink(){
    subject = 'study'
    return subject
}

console.log(subject);//retorna: underfined
console.log(createThink(subject)) //retorna: study, se não tiver o parametro, retorna underfined, mas executa a função e após isso atualiza a variavel com o novo valor
console.log(subject)// retorna study
```

-----------------------------------------------------------------------------------

## function hoisting
```Js


sayMyName()

function sayMyName(){
    console.log('Victor')
}
///////////////////////////////////////////////////////

// Quando uma função é declarada dessa forma, ela sofre o Hoisting e executa a função mesmo ela sendo chamada antes da declaração

//se uma função for declarada dentro de uma Variavel, ela não sofre o Hoisting da função, mesmo sendo do tipo "VAR".

// No caso da "VAR", a declaração sofre hoisting, mas o que ela guarda não sofre hoisting, mesmo com a fução sendo nomeada ou não.

sayMyname()

// Funções declaradas assim, são do tipo Function expression

var sayMyName = function sayMyName(){ 
    console.log('Victor')
}
```
-------------------------------------------------------------------
## Arrow function
```JS
// arrow function. Que gera uma função anonima.

//Funções em forma de expressão geralmente são colocadas em uma "CONST"
// É uma forma mais curta de declarar uma função.
cosnt sayMyName = (name) =>{
    console.log(name);
}

sayMyName('Victor');

```
--------------------------------------------------------------------
## callback function
```JS
//No parametro da função pode ser retornado uma outra função.

function sayMyName(name){
    console.log('antes da call back');
    name();
    console.log('antes da call back');
}
let arrow =  () =>{
    console.log('estou dentro da call back da variavel')
}
sayMyName(arrow);

```
----------------------------------------------------------------------
## function() constructor
    * expressao "new"
    *criar novo objeto
    *this keyword

```JS
// No JS já temos varias funções construtoras

 function Person(name, age, weight ){
    this.name = name,
    this.age = age,
    this.weight = weight 

}

const Victor = new Person("Victor", 20, 66);
const Felipe = new Person("Felipe", 20, 68);
console.log(Victor, Felipe);

//Outra função construtora

let date = new Date("2020-12-01");

console.log(date);

```