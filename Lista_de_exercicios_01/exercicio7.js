// 7. Faça um algoritmo que receba o peso de uma pessoa, calcule e mostre:
// a) o novo peso se a pessoa engordar 15% sobre o peso digitado;
// b) o novo peso se a pessoa engordar 20% sobre o peso digitado. Resultado esperado:

const peso = parseFloat(prompt("Informe o peso: "));

const calculaPeso = (peso) => {
    const peso15 = peso + (peso * 0.15);
    const peso20 = peso + (peso * 0.20);

    console.log(`Caso a pessoa engorde 15%, ficaria com ${peso15.toFixed(2)} KG`);
    console.log(`Caso a pessoa engorde 20%, ficaria com ${peso20.toFixed(2)} KG`);
}

calculaPeso(peso);
