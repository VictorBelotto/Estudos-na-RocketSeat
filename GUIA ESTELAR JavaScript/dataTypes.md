
## Object
* Objeto
    * Propriedades / Atributos
    * Funcionalidades / Metodos

*object
```JS
    {propriedade : "valor"},
```

## OBS: nomes colocar aspas, pois são dados do tipo STRING, numeros não precisam, apenas se quiser colocar como texto


# Tipos de Dados

## Data types
    * Primitive / Primitive values
    * Structural
    * Structural Primitive

## Primitivos 

    * Strings
    * Number
    * Boolean
    * underfined
    * Symbol
    * BigInt

## Estruturais

    * Object 
    * Array
    * Map
    * Set
    * Date
    * Function

## Primitivo Estrutural / Structural Root Primitive 

    * null



## O JS é uma linguagem fracamente tipada e dinâmica

- Variáveis não precisam ter um tipo previamente definido (String,Number ou Boolean)

* OBS : typeof antes da variavel, retorna o tipo de variavel.

- Podemos mudar o conteudo da variavel


## Scope

* Escopo determina a visibilidade de alguma variável no JS

## Block statement
```JS
// vamos iniciar um bloco
{
    // aqui dentro é um bloco e posso colocar qualquer código
} //aqui fechamos o bloco

```
 * O bloco, tamém criara um novo escopo. Chamamos de `block-scoped` 

 ## var
 ```js
 // var é global e poderá funcionar por fora de um escopo de bloco

 * hoisting (apenas para VAR: quando declarada mesmo em um escopo, ela é criada no topo do arquivo, sem valor atribuido até que seja definido no escopo, underfined)
```

## let e const 
```js
// const e let são locais e só funcionam no escopo onde foram criadas
 * São mais usuais na atualidade.

```
------------------------------------------------------------------------------------------------
## Tipos de Dados 
```JS
//Declaration
var name;

// assignment or atribuição de valores
var name = "Victor"

//que tipo de dado foi colocado na variavel
## typeof antes da variavel, retorna o tipo de variavel.

console.log(typeof name)

//Agrupamento de declarações
let age, isHuman

age = 15
isHuman = true
console.log(name, age, isHuman)

// concatenando valores
console.log('o' + name + 'tem' + age + 'anos.')

// interpolando valores com template literals or template strings
console.log(`o ${name} tem ${age} anos.` )

 ```
////////////////////////////////////////////////////////////////////////////////
 ## Object
```JS

    const person = {
        name: 'Victor',
        age: 20,
        weight: 66,
        isAdmin: true
    }
// interpolando valores com template literals or template strings
console.log(`${person.name} tem ${person.age} anos.`) //

Retorna(Victor tem 20 anos.)

```

## Array
```JS
const animals = [
    'Lion',
    'Monkey',
    {
        name: 'cat',
        age: 3
    }
]
//acessar valores dentro do array

console.log(animals)
console.log(animals[2].name) //podemos acessar dessa forma um objeto de uma lista.



## Exercicios

let student = {
    name: 'Victor',
    age: 20,
    weight: 65.5
}

const Mateus = {
    name: 'Mateus',
    age: 10,
    weight: 35
}


//console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

let students = [student, Mateus]

console.log(students[1])
```
 -----------------------------------------------------------------------------------------------


