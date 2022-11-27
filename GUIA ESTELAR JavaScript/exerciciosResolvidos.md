# Transformar notas escolares
```JS
/*  ### Transformar notas escolares

    Crie um algoritimo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

    * de 90 para cima = A
    * entre 80 - 89   = B
    * entre 70 - 79   = C
    * entre 60 - 69   = D
    * menor que 60    = F     
    
    */

function modificaNota(nota){
    let notaA =  nota >= 90 && nota <=100
    let notaB = nota >=80 && nota <=89
    let notaC = nota >= 70 && nota <= 79
    let notaD = nota >= 60 && nota <=69
    let notaF = nota >= 0 && nota <= 60

    if(notaA){
        nota = "A"
        return nota
    }else if(notaB){
        nota = "B"
        return nota
    }else if(notaC){
        nota = "C"
        return nota
    }else if(notaD){
        nota = "D"
        return nota
    }else if(notaF){
        nota = "F"
        return nota
    }else{
        return "Não é uma nota válida"
    }
}

console.log(modificaNota(-1))
console.log(modificaNota(98))
```
///////////////////////////////////////////////////////////////////////////////////


# Sistemas de gastos familiar
```JS
/*  ### Sistemas de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia está 
com o saldo positivo ou negativo, seguido do valor do saldo

*/

let family = {
    incomes: [2500, 2500],
    expenses: [500, 678.32, 233, 10]
}

function sum(array){
    let total = 0;
    
    for(let value of array){
        total += value
    }

    return total
}

function calculateBalance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = (calculateIncomes - calculateExpenses).toFixed(2);
    const itsOk = total >= 0

    let balanceText = "negativo"

    if(itsOk){
        balanceText ="Positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total}`)
}

calculateBalance()

```

# Transformando graus
## Como eu tentei
    ## Celsius em fahrenheit  

    Crie uma função que receba uma string em Celsius ou fahrenheit e faça a conversão de uma unidade para outra

    C = (F - 32) * 5/9
    F = C * 9/5 + 32


```JS
 let valor = 86

function convertToCelsius(fahrenheit){
  let celsius = (fahrenheit - 32) * (5/9)
  return celsius
}

console.log(convertToCelsius(valor))

function convertToFahrenheit(celsius){
  let fahrenheit = (celsius * (9/5)) + 32

  return fahrenheit
}

console.log(convertToFahrenheit("30")) 


```
/////////////////////////////////////////////////////////////////
## Como foi feito

```JS 
// transformDegree ('50F')

function transformDegree(degree){
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  // Forçando um erro, pois está negando as duas, dando um retorno True para o IF, e cai na primeira validação
  if(!celsiusExists && !fahrenheitExists){
    throw new Error('Grau não identificado')
  }

  //Fluxo ideal, F -> C
  let updateDegree = Number(degree.toUpperCase().replace("F",""));
  let formula = (fahrenheit) => (fahrenheit - 32) * (5/9);
  let degreeSing = 'C';

  
  if(celsiusExists){
    
       updateDegree = Number(degree.toUpperCase().replace("C",""));
       formula = (celsius) => (celsius * (9/5)) + 32
       degreeSing = 'F';
     
  }

  return formula(updateDegree) + degreeSing
  
}
console.log(transformDegree('30C'))

/* try{
  
  console.log(transformDegree('50F'))
  transformDegree('50z')
} catch(error){
  console.log(error.message)
} */


```

# Buscando e contando dados em Arrays
/*
    ## Buscando e contando dados em Arrays

    Baseado no Array de Livros por categoria abaixo, faça os seguintes desafios

    *Contar o número de categorias e o numero de livros em cada categoria
    *Contar o número de autores
    *Mostrar livros do autor Auguto Cury
    *Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor
    

*/
```JS
const booksByCategory = [
  {
      category: "Riqueza",
      books: [
          {
              title: "Os segredos da mente milionária",
              author: "T. Harv Eker",
          },
          {
              title: "O homem mais rico da Babilônia",
              author: "George S. Clason",
          },
          {
              title: "Pai rico, pai pobre",
              author: "Robert T. Kiyosaki e Sharon L. Lechter",
          },
      ],
  },
  {
      category: "Inteligência Emocional",
      books: [
          {
              title: "Você é Insubstituível",
              author: "Augusto Cury",
          },
          {
              title: "Ansiedade – Como enfrentar o mal do século",
              author: "Augusto Cury",
          },
          {
              title: "Os 7 hábitos das pessoas altamente eficazes",
              author: "Stephen R. Covey",
          },
      ],
  },
];


const totalCategories = booksByCategory.length
console.log(totalCategories)

for(let category of booksByCategory){
  console.log('Total de livros da categoria: ', category.category)
  console.log(category.books.length)
}


function countAuthors(){
  let authors = [];

  for(let category of booksByCategory){
    for(let book of category.books){
      
      // Verificar se dentro do ARRAY tem o elemento autor do livro, se não estiver ele vai ser adicionado
      // se o index retornar com - 1 é pq ele não está lá dentro exemplo: (let nada = [])  console.log(nada.indexOf()) = vai retornar -1

       
              
      if(authors.indexOf(book.author) == -1){
        authors.push(book.author)
      }
    }
  }

  console.log("Total de autores: ", authors.length)
}

countAuthors()

function booksOfAuthor(author){
  let books = [];

  for(let category of booksByCategory){
    for(let book of category.books){
      if(book.author === author){
        books.push(book.title)
      }
    }
  }

  console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}
booksOfAuthor("Augusto Cury")

```
/////////////////////////////////////////////////////////////////