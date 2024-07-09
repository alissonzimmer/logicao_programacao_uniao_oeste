<?php

class MinhaClasse {
    function minhaFuncao() {
        echo $_GET['valor1'];
    }

    function outraFuncao() {
        echo 'ola mundo';
    }
}

// carrega as funcoes da class pra mim
$abcdefg = new MinhaClasse();
// agora executa a minhaFuncao 
// de dentro da class
$abcdefg->{$_GET['funcao']}();