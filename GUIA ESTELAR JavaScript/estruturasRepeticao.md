# Estruturas de Repetição

## For
```JS
## for
// contador ; condição; incremento 
for(let i = 0; i < 10; i++){
    console.log(i)
}

for(let i = 10; i > 0; i--){
    
    if(i === 5){
        continue;
    }
    
    console.log(i)
}
```
///////////////////////////////////////
## while
```JS
//while  (enquanto)

let i = 134135135

while(i > 10){
    console.log(i);
    
    i /= 35
}
```
/////////////////////////////////////////////
## For of
```JS 
let name = "Victor"
let names = ["victor", "Ellen"]

for(let nome of name){
    console.log(nome)
}

for(let nomes of names){
    console.log(nomes)
}
```
////////////////////////////////////////////
## For in
```JS
let person{
    name:"Victor",
    age: 30,
    weight: 88.6
}

for(let property in person){
    console.log(property)
    console.log[property]
}

```
////////////////
## Mais sobre FOR IN e FOR OF
```JS

## For of
// Usamos o For in para percorrer as propriedades de um objeto

const carros = [
    {
        montadora: "Chevrolet",
        modelo:"Vectra",
        anoFabricacao: 2011,
        potencia: 150 + " CV",
        preço: "R$ " + 45000
    },
        {
           montadora:"Volkswagen",
           modelo:"Virtus",
           anoFabricacao: 2020,
           potencia: 129 + " CV",
           preço: "R$ " + 101000
        }
]



for( let carObject of carros){

     for(let atributes in carObject){
        console.log(`${atributes}  ${carObject[atributes]}`)
     }
}


```
## Refatorando o Codigo
```JS

function adicionaCarro(montadora, modelo, versao, anoFabricacao, potencia, preco){
    this.montadora = montadora,
    this.modelo = modelo,
    this.versao = versao,
    this.anoFabricacao = anoFabricacao,
    this.potencia = potencia,
    this.preco = preco
}

const golf = new adicionaCarro("Volkswagen", "Golf", "1.4 TSI Highline", 2016, 150 + "CV", 95000);

const vectra = new adicionaCarro("Chevrolet", "Vectra", "GT-X", 2011, 150 + "CV", 45000 );

const virtus = new adicionaCarro("Volkswagen", "Virtus", "1.0 TSI Highline", 2020, 129 + " CV", 101000 )


const carros = [golf, vectra, virtus]


for( let carObject of carros){

    for(let atributes in carObject){
       
      console.log(`${atributes}: ${carObject[atributes]}`)
      
    

    }
    console.log("/////////////////////")
}

```