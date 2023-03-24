let menuVisible = false;
//Funcion que ocultara o mostrara el menu
function mostrarOcultarMenu(){
    if (menuVisible) {
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono la opcion
    document.getElementById("nav").classList="";
    menuVisible = false;
}