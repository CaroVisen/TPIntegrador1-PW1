function validar(){
    nombre = document.getElementById("nombre").value;
    
    if(nombre == ''){
        document.getElementById("lbl_nombre").innerHTML="El nombre no puede estar vacio";
        return false;
    }else{
        document.getElementById("lbl_nombre").innerHTML="Nombre";
        return true;
    }
}

function caracteresRestantes(){
    mensaje = document.getElementById("mensaje").value.length;
    document.getElementById("lbl_mensaje").innerHTML = "Mensaje: caracteres restantes = " + (1000 - mensaje);
    console.log(document.getElementById("mensaje").value);
    
}

