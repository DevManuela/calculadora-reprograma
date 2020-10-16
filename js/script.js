var spanHora = document.querySelector(".secao__rodape .secao__rodape__valor span")// essa variável vai apresentar o resultado final do valor/hora

var inputSalario = document.querySelector("#ganho-mes")//6000 por mês

var inputHoras = document.querySelector("#horas-dia")// 8h por dia

function calcularValorHora(){

        var qtdDeHora = inputHoras.valueAsNumber * 22;// 176 = 8 * 22

        var valorDeHora = (inputSalario.valueAsNumber / qtdDeHora).toFixed(2);// 34.09 = 6000 / 176

        spanHora.textContent = "R$" + valorDeHora;// concatenar e converter resultado para texto
}