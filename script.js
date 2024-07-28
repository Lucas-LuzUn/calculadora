function insert(num)
{
    var numero = document.getElementById("display_resultado").innerHTML;
    document.getElementById("display_resultado").innerHTML = numero + num;
}

function limpar()
{
    document.getElementById("display_resultado").innerHTML = "";
}

function apagar()
{
    var resultado = document.getElementById("display_resultado").innerHTML;
    document.getElementById("display_resultado").innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular()
{
    var resultado = document.getElementById("display_resultado").innerHTML;

    if(resultado)
    {
        document.getElementById("display_resultado").innerHTML = eval(resultado)  
    }
}