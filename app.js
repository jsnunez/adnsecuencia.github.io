


const verificar = function () {

    let dato1 =  (document.getElementById("operando1").value);
    let dato2 =  (document.getElementById("operando2").value);
    let ubica=buspos(dato1,dato2)
if(ubica==-1){
    document.getElementById("resultado").innerHTML = "No se encontro coincidencia "
}
else{
    document.getElementById("resultado").innerHTML = "se encontro en la posicion #  "+ubica;
}


}

const buspos=(a,b)=>{
    const posicion = a.indexOf(b);
    return posicion
}