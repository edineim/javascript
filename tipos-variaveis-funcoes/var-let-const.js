// const - nao é permitido alterar valor da varivel durante o codigo e precisa preencher um valor
// var - cria uma variavel
// let - a variavel pode mudar de valor durante o codigo

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area)
