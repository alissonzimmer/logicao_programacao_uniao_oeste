
let botao = document.getElementById('botao')
botao.addEventListener('click', function() {

    let valor1 = document.getElementById('valor1').value
    fetch('exemplo.php?funcao=minhaFuncao&valor1='+valor1).then(function(resultado){
        return resultado.text();
    }).then(function (texto) {
        console.log(texto)
    }).catch(function (erro) {
        console.error(erro)
    })

})

let botao2 = document.getElementById('botao2')
botao2.addEventListener('click', function() {

    fetch('exemplo.php?funcao=outraFuncao').then(function(resultado){
        return resultado.text();
    }).then(function (texto) {
        console.log(texto)
    }).catch(function (erro) {
        console.error(erro)
    })

})