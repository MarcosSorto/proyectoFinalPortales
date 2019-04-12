
/*Codigo para el slider de las imagens*/
    window.addEventListener('load', function(){

        var imagenes = [];
    
        imagenes[0] ='img/Imagen1.jpg';
        imagenes[1] ='img/imagen2.jpg';
        imagenes[2] ='img/imagen4.jpg';
    
        var cambio=0;
        
        function CambiarImagen(){
    
                document.slider.src = imagenes[cambio];
    
                    if (cambio<2){
                        cambio++;
                    }else{
                        cambio=0;
                    }
                }
                
                setInterval(CambiarImagen,3500);
    })
 /*Codigo para las funciones de los eventos del mouse sobre la barra de menú
    PARAMETRO: n es el numero de la sección que se mostrara */   
    function ver(n) {
         document.getElementById("seccion"+n).style.display="block"
    }
    function ocultar(n) {
        document.getElementById("seccion"+n).style.display="none"
    }