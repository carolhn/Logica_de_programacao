// 12. Um tonel de refresco é feito com X partes de água mineral e Y partes de suco de
// maracujá. Faça um algoritmo para calcular quantos litros de água e de suco são necessários para
// se fazer uma certa quantidade de litros de refresco informados pelo usuário. Como a empresa
// fabrica, o suco para várias marcas diferentes e cada marca utiliza uma determinada concentração,
// será necessário ler do usuário a concentração de suco e agua.


const suco = parseFloat(prompt("Digite a QTDE de lts de suco necessaria: "));
const aguaPorcentagem = parseFloat(prompt("Digite o percentual (%) de concentracao da agua: "));
const sucoPorcentagem = parseFloat(prompt("Digite o percentual (%) de concentracao do suco: "));

const calcularQuantidades = (suco, aguaPorcentagem, sucoPorcentagem) => {
    const percentualTotal = aguaPorcentagem + sucoPorcentagem;

    if (percentualTotal !== 100) {
        const resposta = prompt("Os valores de concentração não totalizam 100%. Deseja enquadrar os valores em escala de 100% [s|n]?: ");

        if (resposta.toLowerCase() === 's') {
            const percentual = 100 / percentualTotal;
            aguaPorcentagem *= percentual;
            sucoPorcentagem *= percentual;
            console.log(`Novo percentual do Água: ${(aguaPorcentagem / (aguaPorcentagem + sucoPorcentagem) * 100).toFixed(2)}`);
            console.log(`Novo percentual do Suco: ${(sucoPorcentagem / (aguaPorcentagem + sucoPorcentagem) * 100).toFixed(2)}`);
        } else {
            console.log("Valores de concentração incorretos. Processo finalizado!");
        }
    }

    const quantAgua = (aguaPorcentagem / 100) * suco;
    const quantSuco = (sucoPorcentagem / 100) * suco;

    console.log(`Será necessário para fazer ${suco} lts de suco de maracujá:`);
    console.log(`${quantAgua.toFixed(2)} lts de água`);
    console.log(`${quantSuco.toFixed(2)} lts de suco concentrado de maracujá`);
};

calcularQuantidades(suco, aguaPorcentagem, sucoPorcentagem);
