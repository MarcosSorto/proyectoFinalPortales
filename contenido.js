/*Codigo para las funciones de los eventos del mouse sobre la barra de menú
    PARAMETRO: n es el numero de la sección que se mostrara */   
    function ver(n) {
        document.getElementById("seccion"+n).style.display="block";
   }
   function ocultar(n) {
       document.getElementById("seccion"+n).style.display="none";
   }
   
   /*Codigo para desplegar la información que se encuetre oculta al inio de las páginas de contenido */
   /*agregamos el evento click para las opciones de mostrado. */
   var presiona= document.getElementById('Otraseccion1');
   var presionaOtro= document.getElementById('Otraseccion2');
   var presionaUltimo=document.getElementById('Otraseccion3');
   presiona.addEventListener('click',mostrar);
   presionaOtro.addEventListener('click',mostrarOtro);
   presionaUltimo.addEventListener('click',mostrarUltimo);

   //definimos las variables a utilizar
   var opcionesVenajas =document.getElementById("mostrarOcultar");
   var opcionesOtros = document.getElementById("mostraOcultar1");
   var opcionesdesventajas = document.getElementById('mostrarOcultar2');
   var tamanioOtros = document.getElementById("otros");
   var tamanioUltimo = document.getElementById("desventajas");

   function mostrar(event){
    event.preventDefault();
       if( opcionesVenajas.style.display=="block"){   
            opcionesVenajas.style.display="none";
                tamanioOtros.style.marginTop='50px';   
            if(opcionesVenajas.style.display=="block"){
                tamanioUltimo.style.marginTop='400px';
            }else if(opcionesOtros.style.display=="block"){
                tamanioUltimo.style.marginTop='450px';
            }else{
                tamanioUltimo.style.marginTop='100px';
            }
       }else{
           
            if(opcionesdesventajas.style.display=="block" && opcionesOtros.style.display=="block"){
                tamanioUltimo.style.marginTop='700px';
                tamanioOtros.style.marginTop='400px';
            }else{
                tamanioUltimo.style.marginTop='540px';
                tamanioOtros.style.marginTop='350px';
            }
            
            opcionesVenajas.style.display="block";
       }
   }

   function mostrarOtro(event){
    event.preventDefault();

       if(opcionesOtros.style.display=="block"){
            opcionesOtros.style.display="none";
            tamanioUltimo.style.marginTop='50px';
            if(opcionesVenajas.style.display=="block"){
                tamanioUltimo.style.marginTop='450px';
            }else{
                tamanioUltimo.style.marginTop='100px';
            }
            
       }else{
            
            if(opcionesVenajas.style.display=="block"){
                tamanioUltimo.style.marginTop='700px';
            }else{
                tamanioUltimo.style.marginTop='400px';
            }
            opcionesOtros.style.display="block";
       }
   }
   function mostrarUltimo(event){
    event.preventDefault();
       if(opcionesdesventajas.style.display=="block"){
        opcionesdesventajas.style.display="none";
       }else{
        opcionesdesventajas.style.display="block";
       }
   }