function adicionaCarro(montadora, modelo, versao, anoFabricacao, potencia, preco){
  this.montadora = montadora,
  this.modelo = modelo,
  this.versao = versao,
  this.anoFabricacao = anoFabricacao,
  this.potencia = potencia,
  this.preco = preco
}

const golf = new adicionaCarro("Volkswagen", "Golf", "1.4 TSI Highline", 2016, 150 + "CV", 95000)

const vectra = new adicionaCarro("Chevrolet", "Vectra", "GT-X", 2011, 150 + "CV", 45000 )

const virtus = new adicionaCarro("Volkswagen", "Virtus", "1.0 TSI Highline", 2020, 129 + " CV", 101000 )


const carros = [golf, vectra, virtus]


for( let carObject of carros){

  for(let atributes in carObject){
     
    console.log(`${atributes}: ${carObject[atributes]}`)
    
  

  }
  console.log("/////////////////////")
}