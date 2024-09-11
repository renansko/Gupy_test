const now = require('performance-now'); // Pergunta C) Node.js

function gerarFaturamento() {
    return Array.from({ length: 365 }, () => 
        Math.random() < 0.5 ? 0 : Math.random() * 9000 + 1000
    ); // Pergunta A)
}

function calcularEstatisticas(faturamentoDiario) {
    const faturamentosValidos = faturamentoDiario.filter(f => f > 0); // Pergunta B)_
    const menorFaturamento = Math.min(...faturamentosValidos);
    const maiorFaturamento = Math.max(...faturamentosValidos);
    const mediaAnual = faturamentosValidos.reduce((a, b) => a + b, 0) / faturamentosValidos.length;
    return { menorFaturamento, maiorFaturamento, mediaAnual };
}

function contarDiasAcimaMedia(faturamentoDiario, mediaAnual) {
    return faturamentoDiario.filter(f => f > mediaAnual).length;
}

function main() {
    const inicio = now();

    const faturamentoDiario = gerarFaturamento();
    const { menorFaturamento, maiorFaturamento, mediaAnual } = calcularEstatisticas(faturamentoDiario);
    const diasAcimaDaMedia = contarDiasAcimaMedia(faturamentoDiario, mediaAnual);

    const fim = now();
    const tempoExecucao = (fim - inicio) / 1000; // Convertendo para segundos

    console.log(`Menor faturamento diário: R$ ${menorFaturamento.toFixed(2)}`);
    console.log(`Maior faturamento diário: R$ ${maiorFaturamento.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média anual: ${diasAcimaDaMedia}`);
    console.log(`Tempo de execução: ${tempoExecucao.toFixed(6)} segundos`);
}

main();