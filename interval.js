//definina o valor inicial de contagem regresiva
let contador =10;
//exiba o valor inicial
console.log(contador);
//crie uma unção para atualizar a contagem regressiva
function atualizarContagem(){
//diminua o contador em 1 
contador--;
// exiba o valor atual 
console.log(contador);
//verifique se a contagem regresiva chegou a zero
if (contador === 0 ){
//se a contagem regreesiva chegou zero, pare de chamar a função sentiterval
clearInterval(intervalId);
console.log("contagem regressiva concluída!");
}
}
const intervalId=sentInteval(atualizarContagem,1000);
