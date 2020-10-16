
function Calcular(){

    var inputValor = document.getElementById("valor-hora").value;
    //capture no HTML. um elemento através da id. a id desse elemento é "valor-hora". capture esse elemento em forma de valor (número) e atribua à variável inputValor

    var inputHoras = document.getElementById("horas-projeto").value;

    var spanHora = inputValor * inputHoras;

    document.getElementById("resposta").innerHTML = spanHora;
    //atribua o valor da variável spanHora a um elemento dentro do nosso HTML que tem id "resposta" e coloque esse dado no HTML do navegador

}