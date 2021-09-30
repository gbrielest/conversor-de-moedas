/*
funções
    funções do js
    - alert()
    - console.log()
    funções personalizadas
    - funções criadas pela pessoa que está desenvolvendo.
    - a função precisa ser chamada para ser executada.
    - para criar um função usamos a palavra function
    ex.function EscreverFrases(texto){
    console.log(texto)
}

EscreverFrases("Sem expectativas, sem decepções.")
EscreverFrases("A vida é um eterno conto de falhas.")
*/

//parseFloat --> converte de texto para decimal
//parseInt --> converte de texto para interiro
function Converter(){
    //DOM - Document Object Model

    /* PEGAR O VALOR DO CAMPO */
    //let valorEmDolar = document.getElementById("valor").value
    //getElementById = seleciona id
    //querySelector = + 'versátil' seleciona id(#) class(.)
    let valorEmDolar = document.querySelector("#valor").value

    /* CONVERTER O VALOR DO CAMPO EM NÚMERO */
    let valorEmDolarNumerico = parseFloat(valorEmDolar)

    let cotacaoDoDolar = 5.42
    let valorEmReal = valorEmDolarNumerico * cotacaoDoDolar

    /* INSERIR O RESULTADO NA TELA */
    document.querySelector("#valorConvertido").innerHTML = "O resultado em real é R$ " + valorEmReal.toFixed(2)

    let bitcoin = valorEmReal / 225857.44
    document.querySelector("#valorBitcoin").innerHTML = "O resultado do Bitcoin é " + bitcoin.toFixed(2)
}