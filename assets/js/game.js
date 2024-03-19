var respuesta1 = document.getElementById ('respuesta1'),
    caradama = document.getElementById ('caraDama');


function respondeMal ()
{  document.getElementById("caraDama").src="../assets/img/dama-triste.png";
}
    respuesta1.addEventListener('click',respondeMal,true);

var respuesta2 = document.getElementById ('respuesta2'),
    caradama = document.getElementById ('caraDama');

    function respondeBien ()
{  document.getElementById("caraDama").src="../assets/img/dama-feliz.png";
}
    respuesta2.addEventListener('click',respondeBien,true);

    var respuesta3 = document.getElementById ('respuesta3'),
    caradama = document.getElementById ('caraDama');

    respuesta3.addEventListener('click',respondeMal,true);