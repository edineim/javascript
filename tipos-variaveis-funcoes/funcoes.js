// 1) declara a função

function imprimeTexto(texto) {
    console.log(texto);
 }
 
 // 2) executa a função (1 ou + vezes)
 
 imprimeTexto("oi");
 imprimeTexto("outro texto");

function apresentar() {
  return "olá";
}

console.log(apresentar())

const soma = function(num1, num2) {return num1 + num2}
console.log(soma(1, 1))