# Condicionais

## If e Else
```JS
//Control flow (controle de fluxo)

// if   else
/*
if(true){
    "se true, faça isso"
}else {
    "se não, faça isso"
}
*/
 
 let temperature = 1
 let highTemperature = temperature >= 37.5
 let mediumTemperature = temperature < 37.5 && temperature >=37
 let lowTemperature = temperature < 33

if(highTemperature){
    console.log("Temperatura alta")
}else if(mediumTemperature){
    console.log("Temperatura media")
}else if(lowTemperature){
    console.log("Temperatura baixa")
}else{
    console.log("Temperatura normal")
}
```
//////////////////////////////////////////////////////////////////////////////
## Swith
```JS
// swith

let expression = "c"

switch(expression){
    case 'a':
        //codigo
        console.log('a')
        break
    case 'b':
        //codigo para expression 'b'
        console.log('b')
        break
    default:   
        console.log("default") 
        break
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function calculate(number1, operator, number2){
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
         case '/':
            result = number1 / number2
            break
        default:
            console.log("Operador não definido")
            break
    }
    return result
}

console.log(calculate(3, '*', 2))
```
//////////////////////////////////////////////////////////////////////////////
## throw .. try ... catch
```JS
function sayMyname(name = ''){
    if (name === ''){
        throw 'Nome não pode ser vazio'
    }
    console.log('depois do erro')

}

//try....catch
try {
    sayMyName()

} catch(e){
    console.log(e)
}
```

