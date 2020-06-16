var regexCampoEmail= /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/
var regexCampoTelefono= /^[0-9][0-9][0-9][0-9]\-[0-9][0-9][0-9][0-9]+$/

function validar(){

    var error = false;

    var nombre = document.getElementById("nombre").value;
    
    var mail = document.getElementById("email").value;

    var telefono = document.getElementById("telefono").value;

    var mensaje = caracteresRestantes();

    if(nombre == ''){
        document.getElementById("lbl_nombre").innerHTML="El nombre no puede estar vacio";
        document.getElementById("lbl_nombre").style.color="#ff0000";
        error = true;
    }else if(!regexCampoTelefono.test(telefono)){
        document.getElementById("lbl_telefono").innerHTML="El teléfono debe contener el siguiente formato: 1234-5678";
        document.getElementById("lbl_telefono").style.color="#ff0000";
        error = true;
    }else if(!regexCampoEmail.test(mail)){
        document.getElementById("lbl_mail").innerHTML="El mail no es correcto";
        document.getElementById("lbl_mail").style.color="#ff0000";
        error = true;
    }else if(mensaje>1000){
        document.getElementById("lbl_mensaje").innerHTML = "Mensaje: caracteres restantes = " + (999 - mensaje) + ' Se ha excedido de caracteres';
        document.getElementById("lbl_mensaje").style.color="#ff0000";
        error = true;
    }else{
        document.getElementById("lbl_nombre").innerHTML="Nombre";
        document.getElementById("lbl_nombre").style.color="#555";
        document.getElementById("lbl_mail").innerHTML="Mail";
        document.getElementById("lbl_mail").style.color="#555";
        document.getElementById("lbl_telefono").innerHTML="Telefono";
        document.getElementById("lbl_telefono").style.color="#555";
        document.getElementById("lbl_mensaje").innerHTML = "Mensaje: caracteres restantes = " + (999 - mensaje);
        document.getElementById("lbl_mensaje").style.color="#555";
        error = false;
    }
    
   return !error;
}


function caracteresRestantes(){
    mensaje = document.getElementById("mensaje").value.length;
    document.getElementById("lbl_mensaje").innerHTML = "Mensaje: caracteres restantes = " + (999 - mensaje);
    return mensaje;
}

