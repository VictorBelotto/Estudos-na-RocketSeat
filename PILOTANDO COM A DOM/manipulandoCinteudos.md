# textContent
```JS
const element = document.querySelector(".blog");

console.log(element.textContent += " Olá DEV!")

element.textContent = "Olá DEV!"
```

# innerText

```JS
const element = document.querySelector(".blog");

element.innerText = "Olá DEVS"

```

# innerHTML
```JS
const element = document.querySelector(".blog");

element.innerHTML = "Olá Devs! <small>!!!!!!! </small>"

```
# Manipular valor    .value
```JS
const element = document.querySelector('input');

console.log(element.value)
element.value = "outro valor"

```

# atributos
```JS

const header = document.querySelector('header')

header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('class'))

header.removeAttribute('id')
header.removeAttribute('class')

console.log(header)

header.setAttribute('class', 'bg header')
```