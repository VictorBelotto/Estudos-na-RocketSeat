// Navegando pelos elementos
// parentNode e parentElement

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



//Navegar nos elementos irmãos
