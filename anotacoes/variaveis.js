/*
    variavel sempre comeca como undefined
    

    var respeita escopo
    let é escopo geral
    exemplo:


*/

//    let é escopo geral

let x = 10;
{
    let x = 2;
    //o x só vale 2 dentro do bloco

}
document.getElementById("texto").innerHTML = x;

//nesse caso iria imprimir o 2

//    var respeita escopo, funciona 
var y = 10;
{
    let y = 2;

}
document.getElementById("texto").innerHTML = y;

//nesse caso iria imprimir o 10


//const nao muda o valor
const z = 2;
z = 5
document.getElementById("texto").innerHTML = z;