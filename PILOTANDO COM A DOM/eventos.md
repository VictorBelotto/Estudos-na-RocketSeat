## Eventos de teclado
```JS
const input = document.querySelector("input")

// onkeypress

input.input = function(){
    console.log('rodei')
}
////

const h1 = document.querySelector("h1")

h1.addEventListener('click', () =>{
    console.log("Cliquei")
})


//argumento (event)

const input = document.querySelector("body")

input.addEventListener('click', function(event){
    console.log(event.target)
})

``` 