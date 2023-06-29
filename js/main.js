function circulo() {
    let figura = document.getElementById("Figuras");
    figura.classList.remove("rectangulo","triangulo");
    figura.classList.toggle("circulo");
}
function rectangulo(){
    let figura = document.getElementById("Figuras");
    figura.classList.remove("circulo","triangulo");
    figura.classList.toggle("rectangulo");
}
function triangulo(){
    let figura = document.getElementById("Figuras");
    figura.classList.remove("circulo","rectangulo");
    figura.classList.toggle("triangulo");
}
function giro(){
    let figura = document.getElementById("Figuras");
    figura.classList.remove("triangulo");
    figura.classList.toggle("giro");
}
function arriba(){
    let figura = document.getElementById("Figuras");
    figura.classList.remove("triangulo","circulo","rectangulo","giro");
    figura.classList.toggle("arriba");
}
function abajo(){
    let figura = document.getElementById("Figuras");
    figura.classList.remove("triangulo","circulo","rectangulo","giro","arriba");
    figura.classList.toggle("abajo");
}
function izquierda(){
    let figura = document.getElementById("Figuras");
    figura.classList.remove("triangulo","circulo","rectangulo","giro","arriba","abajo");
    figura.classList.toggle("izquierda");
}
function derecha(){
    let figura = document.getElementById("Figuras");
    figura.classList.remove("triangulo","circulo","rectangulo","giro","arriba","abajo","izquierda");
    figura.classList.toggle("derecha");
}
function oculto(){
    let figura = document.getElementById("Figuras");
    figura.classList.remove("triangulo","circulo","rectangulo","giro","arriba","abajo","izquierda","derecha");
    figura.classList.toggle("oculto");

}
function gif(){
    let figura=document.getElementById("Figuras");
    figura.classList.remove("triangulo","circulo","rectangulo","giro","arriba","abajo","izquierda","derecha","oculto");
    figura.classList.toggle("gif");

}
function degradado(){
    let figura = document.getElementById("Figuras");
    figura.classList.remove("triangulo","circulo","rectangulo","giro","arriba","abajo","izquierda","derecha","oculto");
    figura.classList.toggle("degradado");
}
function panel(){
    const panel=document.querySelector(".panelIZQ");
    panel.classList.toggle("activo"); 
}
function superior(){
    const superior=document.querySelector(".panelSUP");
    superior.classList.toggle("activo"); 
}