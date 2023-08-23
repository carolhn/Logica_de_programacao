// 4. Faça um algoritmo que calcule e mostre a tabuada de (+, -, * e /) de um número
// digitado pelo usuário.

const numero = parseInt(prompt("Informe o número para o cálculo da tabuada: "));
const operacao = prompt("Qual a operação? (+, -, *, /)");

function calculadora(numero, operacao) {
    console.log(`Tabuada do ${operacao} para o número ${numero}:`);
    
    for (let index = 1; index <= 9; index += 1) {
        let calculo;
        
        switch (operacao) {
            case "+":
                calculo = numero + index;
                break;
            case "-":
                calculo = numero - index;
                calculo = (calculo < 0 ? calculo * -1 : calculo);
                break;
            case "*":
                calculo = numero * index;
                break;
            case "/":
                calculo = (index !== 0 ? (numero / index).toFixed(2) : "não existe divisão por zero");
                break;
            default:
                return;
        }
        
        console.log(`${numero} ${operacao} ${index} = ${calculo}`);
    }
}

calculadora(numero, operacao);

