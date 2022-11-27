## Expressões e Operadores
```JS
/* Expressões e Operadores

-Expressions
-Operators
    Binary  // Soma de dois valores
    Unary //Apenas um valor
    Ternary

*/
// Operação BINARIA
let number = 1

console.log(number + 1)

//Operação Unaria

console.log(++number) // incremento 
// OU
console.log(--number) //decremento

// Operação ternaria
console.log(true ? 'sim é true' : 'é false')

 ```
 //////////////////////////////////////////////////////////////////////////////////////////////////////
## NEW, para criar objetos construtores
```JS
 /* NEW
    * left-hand-side expression
    *criar um novo objeto

*/ 

let dadosPessoais = new Object('Victor');

dadosPessoais.surName = 'Belotto';

console.log(dadosPessoais)
``` 
///////////////////////////////////////////////////////////////////////////////////////////
## Operadores UNARIOS

```JS
/*
    Operadores unários
    typeof
    delete

*/

const person = {
    name: 'victor',
    age: 20
}

delete person.age;

console.log(person)
```
////////////////////////////////////////////////////////////////////////////////////
## Operadores Aritiméticos
```Js
//  Operadores Aritiméticos


//multiplicação = *
console.log( 3.2 * 5.2)

//divisão = /
console.log( 3.2 / 5.2)

//soma = +
console.log( 3.2 + 5.2)

//subtração
console.log( 22.2 - 5.2)

// Resto de divisão = %
let remainder = 11 % 3;
console.log(remainder) //remainder  em ingles é resto

// increment
let increment = 1
increment++
console.log(increment)

console.log(increment++) //Ele vai incrementar, porem depois e agora ele aparece 2
console.log(increment)// aqui vai ter 3
console.log(++increment) // aqui ele incrementa e já exibe

//******  e tem o decrement = --

console.log(--increment) // vai tirar 1 que estava em 4

//exponencial = **

console.log(3 ** 2) // 3 elevado a 2 = 9 (3*3)
```
////////////////////////////////////////////////////////////////////////////////////////////////
## Grouping operator
```Js
let total = (2 + 3) * 5 //17
console.log(total)
```
////////////////////////////////////////////////////////////////////////////////////////////////
##  Operadores de comparação
```JS
// Operadores de comparação

// Irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1;
let two = 2;

// == igual a

console.log(two == one)

console.log(one == 1)

console.log(one == "1")

//!= diferente de
console.log(one != two)
console.log(one != 1)
```
//////////////////////////////////////////
## Operadores de comparação estritamente igual e estritamente diferente

```JS
// Operadores de comparação estritamente igual e estritamente diferente

let one = 1 
let two = 2

// === estritamente igual a 
console.log(one === "1") //false
console.log(one === 1) // true

//!== estritamente diferente de 
console.log(two !== "2") // true
console.log(two !== 2) //false
```
## Operadores de Comparação maior e menor que (igual)
```JS
// >    maior que
// <    menor que
// <=   menor ou igual que
// >=   maior ou igual que 

```
## Operadores de atribuição
```JS
// Operadores de atribuição (Assignnment)

let x

//assignment
x = 1

// addition assignment
// x = x + 2
x += 2
console.log(x)

// subtraction assignment
// x = x -1
x -= 1
console.log(x)

//muliplication assignment
// x = x * 2
x *= 2
console.log(x)

//division assignment
//x = x / 2
x /= 2
console.log(x)

// remainder
// x = x % 2
x %= 2
console.log(x)

// exponetiation
// x = x ** 2
x **= 2
console.log(x)
```
////////////////////////////////////////////////////////////////////////////////////////////////
## Operadores lógicos (Logical operators)
```JS
// Operadores lógicos (logical operators)
// - 2 valores booleanos, quando verificados,
// resultará em verdadeiro ou falso

AND = &&

OR = ||

NOT = !

```
////////////////////////////////////////////////////////////////////////////////////////////////
## Operador Condicional (Ternário)

```JS
//Operador Condicional (Ternário)

//Ele recebe uma condição, se for verdadeira (?) executa 'x' se não (:) executa 'y'
// condition (?) 'x' (:) 'y' 
console.log( true ? 'verdadeiro' : 'falso')

//Cafe da manha top
let pao = true;
let queijo = true;

// aqui a condição do café top é ter ambos true
const niceBreakFast = pao && queijo ? 'Café top' : 'Café ruim';

console.log(niceBreakFast)

let cafe = true;
let cha = false;

const cafezinho = cha || cafe ? 'Da para tomar café' : 'Não da para tomar café'

console.log(cafezinho)
```
////////////////////////////////////////////////////////////////////////////////////////////////
##  Falsy e Truthy
```JS
/*
    Ele fará typecasting para essas operações, obrigando a ser um Boolean

    FALSY
    Quando um valor é considerado false em contexto onde um booleano é obrigatório ( condicionais e loops )

    false
    0
    -0
    ""
    null
    undefined
    Nan

    console.log( false ? 'verdadeiro' : 'falso')


    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório ( condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    infinity
    -infinity
    console.log( true ? 'verdadeiro' : 'falso')
    */
```
////////////////////////////////////////////////////////////////////////////////////////////////
## Operator precedence
```JS
/*
    Precedencia de operadores e segue de cima para baixo também a precedencia


    * grouping                                   ()
    * negação e incremento                       ! ++ --
    * multiplicação e divisão                    * /
    * adição e subtração                         + -
    * relacional                                 < <= > >=
    * igualdade                                  == != === !==
    * AND                                        && 
    * OR                                         || 
    * condicional                                ? :
    * assignment                                 = += -+ *=
*/

```