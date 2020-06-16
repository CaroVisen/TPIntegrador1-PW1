
function validar(){

    var errorRadioMsg = document.getElementById("error-radio-btn")
    var errorInputMsg = document.getElementById("inputError")

    if(errorInputMsg != undefined){
        errorInputMsg.parentNode.removeChild(errorInputMsg)
    }

    if(errorRadioMsg != undefined){
        errorRadioMsg.parentNode.removeChild(errorRadioMsg)
    }

    var error = false
    var errorRadioBtn = false
    var errorInput = false

    var form = document.getElementById("formDetalle")
    
    let fiebre = document.getElementsByName("fiebre")
    let dolorCabeza = document.getElementsByName("dolor_cabeza")
    let tos = document.getElementsByName("tos")
    let gargantaDolor = document.getElementsByName("garganta_dolor")
    let respirarDificultad = document.getElementsByName("respirar_dificultad")

    var arrayRadioButtons = [
        fiebre,
        dolorCabeza,
        tos,
        gargantaDolor,
        respirarDificultad
    ]

    arrayRadioButtons.forEach(element => {
        if(element[0].checked == false && element[1].checked == false){
            errorRadioBtn = true
            error = true
        }
    });

    var arrayInputs = [
        form.nombreApellido,
        form.dni,
        form.telefono
    ]

    arrayInputs.forEach(element => {
        if(element.value == ''){
            errorInput = true
            error = true
        }
    })

    if(errorInput){
        let div = document.createElement("div")
        let msg = document.createTextNode(`¡Los campos nombre y apellido, dni y teléfono no pueden quedar vacios!\n`)
        div.appendChild(msg)
        div.id = "inputError"
        div.style.color = "red"
        div.style.border = "2px solid"
        div.style.textAlign = "center"
    
        form.insertBefore(div, document.getElementById("nombreApellido"))
    }
    
    if(errorRadioBtn){
        let div = document.createElement("div")
        let msg = document.createTextNode("¡Debe seleccionar una opción en todos los casos!")
        div.appendChild(msg)
        div.id = 'error-radio-btn'
        div.style.color = "red"
        div.style.border = "2px solid"
        div.style.textAlign = "center"

        form.insertBefore(div, document.getElementById("fiebreMayor"))
    }

    return (!error)
}