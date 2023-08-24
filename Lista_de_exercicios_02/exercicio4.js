// 4. Faça um algoritmo que calcule e mostre a tabuada de uma operação matemática
// que deverá ser informada pelo usuário (+, -, * e /) além do número digitado pelo usuário para o
// calculo da operação.
// OBS: use a funcao abs() na subtracao para forçar o resultado ser sempre positivo.
// Exemplo: (5-9) resultará em -4
// abs(5-9) resultará em 4

const numero = parseInt(prompt("Informe o número para o cálculo da tabuada: "));
const operacao = prompt("Qual a operação? (+, -, *, /)");

function calculadora(numero, operacao) {
    console.log(`Tabuada do ${operacao} para o número ${numero}:`);
    
    for (let index = 0; index <= 9; index += 1) {
        let calculo;
        
        switch (operacao) {
            case "+":
                calculo = numero + index;
                break;
            case "-":
                calculo = Math.abs(numero - index);
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

