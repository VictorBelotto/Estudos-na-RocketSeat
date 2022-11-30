## Navegando pelos elementos
// parentNode e parentElement
```JS
const body = document.querySelector('.bg');

console.log(body.parentElement)

console.log(body.parentNode)

// childNodes children

const el = document.querySelector('body');

// O text que aparece no Nodelist é o espaço da linha pulada
console.log(el.childNodes)


//O children não pega esses espaços
console.log(el.children)

// firstChild e firstElementChild

console.log(el.firstChild)

console.log(el.firstElementChild)

// lastChild e lastElementChild (retorna igual)

console.log(el.lastChild)

console.log(el.lastElementChild)
```



## Navegando pelos irmaos
```JS
const elemento = document.querySelector("header")

// Sibling = irmao // nextElementSibling

console.log(elemento.nextElementSibling)

//previousSibling previousElementSibling
const elemento2 = document.querySelector("body script")

console.log(elemento2.previousElementSibling)
``` 