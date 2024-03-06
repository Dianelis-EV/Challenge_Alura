function encriptar(){
    let textoSinEncriptar = document.getElementById("encriptar").value;
    let encrip = document.getElementById("encriptardo")
    encrip.innerText = btoa(textoSinEncriptar.value)
}

