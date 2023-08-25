// 7. Faça um algoritmo que receba o peso de uma pessoa, calcule e mostre:
// a) o novo peso se a pessoa engordar 15% sobre o peso digitado;
// b) o novo peso se a pessoa emagrecer 20% sobre o peso digitado.
// c) Uma mensagem “Você deve procurar uma nutricionista” se a diferença de acréscimo de peso
// (15%) entre o acréscimo de peso (20%) for maior ou igual a 4,5 kgs.
// OBS: para garantirmos que o compilador imprima o símbolo de %, utilize dois %%. Pesquise
// sobre caractere de escape em programação no google para entender melhor.

const peso = parseFloat(prompt("Informe o peso: "));

const calculaPeso = (peso) => {
    const peso15 = peso * 1.15;
    const peso20 = peso * 1.20;

    console.log(`Caso a pessoa engorde 15%, ficaria com ${peso15.toFixed(2)} KG`);
    console.log(`Caso a pessoa engorde 20%, ficaria com ${peso20.toFixed(2)} KG`);

    if (peso15 - peso20 >= 4.5) {
        console.log(`Você deve procurar uma nutricionista`);
    }
}

calculaPeso(peso);
