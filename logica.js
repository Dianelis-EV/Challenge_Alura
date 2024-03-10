function encriptar(){
    let textoSinEncriptar = document.getElementById("encriptar").value;
    let encrip = document.getElementById("desencriptar")
    encrip.value = btoa(textoSinEncriptar)
    document.getElementById("encriptar").value=""
}

function desencriptar() {
    let textoEncriptado= document.getElementById("desencriptar").value;
    let desencrip = document.getElementById("encriptar")
    desencrip.value= atob(textoEncriptado)
    document.getElementById("desencriptar").value=""
}
