const textoEntrada = document.querySelector(".texto-entrada");
const textoSalida = document.querySelector(".texto-salida");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function btnEncripitar(){
    const textoEncriptado = encriptar(textoEntrada.value)
    textoSalida.value = textoEncriptado
    textoEntrada.value = "";
    textoSalida.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < llavesEncriptacion.length; i++){
        if(stringEncriptada.includes(llavesEncriptacion[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(llavesEncriptacion[i][0], llavesEncriptacion[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencripitar(){
    const textoEncriptado = desencriptar(textoEntrada.value)
    textoSalida.value = textoEncriptado
    textoEntrada.value = "";
    textoSalida.style.backgroundImage = "none"
}

function desencriptar(stringDesencriptada){
    let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < llavesEncriptacion.length; i++){
        if(stringDesencriptada.includes(llavesEncriptacion[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(llavesEncriptacion[i][1], llavesEncriptacion[i][0])
        }
    }
    return stringDesencriptada
}

function copiarTexto(){
    textoSalida.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}







