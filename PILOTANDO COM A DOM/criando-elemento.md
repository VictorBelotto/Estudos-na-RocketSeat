## Criando e adicionando Elementos
```JS
const body = document.querySelector("body")
// CrateElement
const div = document.createElement("div");
div.innerText = "Olá Devs!"

const divTop = document.createElement("div");
divTop.innerText = "Estou no topo"
//append adiciona no fim

body.append(div)

// prepend adiciona no começo

body.prepend(divTop)
```
## inserir depois e antes de outro elemento
```JS
const body = document.querySelector("body")

const div = document.createElement("div");

const input = body.querySelector("input")

div.innerText = "Olá Devs!"

// esse fica antes do input
body.insertBefore(div, input)


// criando como se fosse um after, pois n tem

body.insertBefore(div, input.nextElementSibling)
```