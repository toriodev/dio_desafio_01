// Classificado de nivel de heroi

let quantidadeDePontos = ""
let heroi = ["Byteblade", "Neocortex", "Codebreaker", "Virtual Vixen", "Glitch Guardian", "Cyber Sentinel", "Data Phantom", "Shadow Surfer"]
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

quantidadeDePontos = 1200


if (quantidadeDePontos <= 1000){
  console.log("O Herói de nome " + heroi[0] + " está no nível de " + nivel[0] + " com " + quantidadeDePontos + " pontos")
}else if(quantidadeDePontos >= 1001 && quantidadeDePontos < 2000){
  console.log("O Herói de nome " + heroi[1] + " está no nível de " + nivel[1] + " com " + quantidadeDePontos + " pontos")
}else if(quantidadeDePontos >= 2001 && quantidadeDePontos < 5000){
  console.log("O Herói de nome " + heroi[2] + " está no nível de " + nivel[2] + " com " + quantidadeDePontos + " pontos")
}else if(quantidadeDePontos >= 5001 && quantidadeDePontos < 7000){
  console.log("O Herói de nome " + heroi[3] + " está no nível de " + nivel[3] + " com " + quantidadeDePontos + " pontos")
}else if(quantidadeDePontos >= 7001 && quantidadeDePontos < 8000){
  console.log("O Herói de nome " + heroi[4] + " está no nível de " + nivel[4] + " com " + quantidadeDePontos + " pontos")
}else if(quantidadeDePontos >= 8001 && quantidadeDePontos < 9000){
  console.log("O Herói de nome " + heroi[5] + " está no nível de " + nivel[5] + " com " + quantidadeDePontos + " pontos")
}else if(quantidadeDePontos >= 9001 && quantidadeDePontos < 10000){
  console.log("O Herói de nome " + heroi[6] + " está no nível de " + nivel[6] + " com " + quantidadeDePontos + " pontos")
}else {
  console.log("O Herói de nome " + heroi[7] + " está no nível de " + nivel[7] + " com " + quantidadeDePontos + " pontos")
}