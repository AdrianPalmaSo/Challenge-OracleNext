var inputmensaje = document.querySelector("#mensaje");
var inputresultado = document.querySelector("#resultado");
var btEncriptar = document.querySelector("#encriptar");
var btDesencriptar = document.querySelector("#desencriptar");
var btCopiar = document.querySelector("#copiar");
var parte1 = document.querySelector(".mensaje");

function validar(){
    let erroresPrevios = parte1.querySelectorAll(".error");
    for(let err of erroresPrevios){
        parte1.removeChild(err);
    }
    var mensaje = inputmensaje.value;
    let letrasValidas = "abcdefghijklmnñopqrstuwvxyz ";
    let mensajeError = document.createDocumentFragment();
    for(let letra of mensaje){
        if(!letrasValidas.includes(letra)){
            let p = document.createElement("p");
            p.setAttribute("class","error");
            p.textContent = `La letra ${letra} no es válida`;
            mensajeError.appendChild(p);
        }
    }
    parte1.appendChild(mensajeError);
    if(mensajeError.children.length === 0){
        return true;
    }return false;
}

function encriptar(){
    if(!validar())return;
    var texto = inputmensaje.value;
    var txtcifrado  = texto.replaceAll("e","enter")
    .replaceAll("o","ober")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("u","ufat");
    inputresultado.value = txtcifrado; 
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
function desencriptar(){
    if(!validar())return;
    var textoencriptado = inputmensaje.value;
    var mensaje = textoencriptado.replaceAll("enter","e")
    .replaceAll("ober","o")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ufat","u");
    inputresultado.value = mensaje; 
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
function copiar(){
    var mensaje = inputresultado.value;
    navigator.clipboard.writeText(mensaje);
}
btEncriptar.onclick = encriptar;
btDesencriptar.onclick = desencriptar;
btCopiar.onclick = copiar;
