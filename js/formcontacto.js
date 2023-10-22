var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var telefono = document.getElementById('telefono');
var mensaje = document.getElementById('mensaje');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
    console.log('Enviando formulario...');

    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tu nombre');
    }

    if(telefono.value === null || telefono.value === ''){
        mensajesError.push('Ingresa tu teléfono');
    }

    if(mensaje.value === null || mensaje.value === ''){
        mensajesError.push('Ingresa tu mensaje');
    }
    
    error.innerHTML = mensajesError.join(', ')
    return false;
}