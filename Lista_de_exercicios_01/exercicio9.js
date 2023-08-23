// 09. Faça um algoritmo que leia os dados necessários para calcular e exibir a área:
// Pesquisa na Internet como calculcar a área de cada objeto abaixo:

// a) de um trapézio.
const baseMaior = parseFloat(prompt("Informe o valor da base maior: "));
const baseMenor = parseFloat(prompt("Informe o valor da base menor: "));
const alturaTrapezio = parseFloat(prompt("Informe o valor da altura: "));

const calculaTrapezio = (baseMaior, baseMenor, alturaTrapezio) => {
    return ((baseMaior + baseMenor) * alturaTrapezio) / 2;
}

console.log(`Base maior do trapézio: ${baseMaior}`);
console.log(`Base menor do trapézio: ${baseMenor}`);
console.log(`Altura do trapézio: ${alturaTrapezio}`);
console.log(`Área do trapézio: ${calculaTrapezio(baseMaior, baseMenor, alturaTrapezio)}`);


// b) de um quadrado.
const lado = parseFloat(prompt("Informe o valor de um dos lado: "));

const calculaQuadrado = (lado) => {
    return lado * lado;
}

console.log(`Lado do quadrado: ${lado}`);
console.log(`Área do quadrado é: ${calculaQuadrado(lado)}`);


// c) de um retângulo.
const base = parseFloat(prompt("Informe o valor da base: "));
const altura = parseFloat(prompt("Informe o valor da altura: "));

const calculaRetangulo = (base, altura) => {
    return base * altura;
}

console.log(`Base do retângulo: ${base}`);
console.log(`Altura do retângulo: ${altura}`);
console.log(`Área do retângulo: ${calculaRetangulo(base, altura)}`);


// d) de um circulo.
const raio = parseFloat(prompt("Informe o valor do raio: "));
const pi = 3.14;

const calculaCirculo = (raio, pi) => {
    return pi * (raio * raio);
}

console.log(`Raio do círculo: ${raio}`);
console.log(`Área do círculo: ${calculaCirculo(raio, pi)}`);


// e) de um triângulo.
const baseTriangulo = parseFloat(prompt("Informe o valor da base: "));
const alturaTriangulo = parseFloat(prompt("Informe o valor da altura: "));

const calculaTriangulo = (baseTriangulo, alturaTriangulo) => {
    return (baseTriangulo * alturaTriangulo) / 2;
}

console.log(`Base do triângulo: ${baseTriangulo}`);
console.log(`Altura do triângulo: ${alturaTriangulo}`);
console.log(`Área do triângulo: ${calculaTriangulo(baseTriangulo, alturaTriangulo)}`);
