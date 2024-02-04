const dataRes = document.querySelector('[data-dias]')
const segRes = document.querySelector('[data-segundos]')
const minRes = document.querySelector('[data-minuto]')
const horaRes = document.querySelector('[data-hora]')

function initRelogioAniversario() {
    const dataAtual = new Date();
    const dataAniversario = new Date('April 14 2024 00:00');
    const diferencaEmMilissegundos = dataAniversario - dataAtual;

    const diasQueFaltam = Math.floor(diferencaEmMilissegundos / (24 * 60 * 60 * 1000));

    const horasQueFaltam = Math.floor(diferencaEmMilissegundos / (60 * 60 * 1000) % 24);

    const minutosQueFaltam = Math.floor(diferencaEmMilissegundos / (60 * 1000) % 60);

    const segundosQueFaltam = Math.floor(Math.floor(diferencaEmMilissegundos / (1000) % 60));

    dataRes.innerText = `Faltam ${diasQueFaltam} dias`;
    segRes.innerText = segundosQueFaltam;
    minRes.innerText = minutosQueFaltam;
    horaRes.innerText = horasQueFaltam;
}

setInterval(initRelogioAniversario, 1000);
