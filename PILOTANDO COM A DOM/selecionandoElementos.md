# *Ver sobre NODELIST e HTML COLECTION

# getElementById()
```JS
const element = document.getElementById("blog-title");

console.log(element)
```

# getElementsByClassName()
```JS
const element = document.getElementsByClassName("one");

console.log(element)
```
# getElementsByTagName
```JS
const element = document.getElementsByTagName("h1");
console.log(element)
```
# querySelector()
    * Pegara o primeiro seletor que achar no DOM
    * Deve ser colocado o seletor como é no CSS

```JS
const element = document.querySelector("#blog-title")

```
# querySelectorAll()
    * Pega e tras todos com o mesmo ID, Classe etc...

```JS
const element = document.querySelectorAll("#blog-title")

//retorna todos com o mesmo seletor

```
