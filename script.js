let correctas = [2,3,1,3,1,2,3,1,2];
let opcion_elegida={}
let mensaje = document.getElementById('mensaje')
let cantidad_correctas=0;

function respuesta(num_pregunta, seleccionada){
    opcion_elegida[num_pregunta] = seleccionada.value;
id="p" + num_pregunta;

}

function corregir(){
    cantidad_correctas = 0;
   for(i=0; i < correctas.length;i++){
    if(correctas[i]==opcion_elegida[i]){
        cantidad_correctas++;
    }
   }
   document.getElementById("resultado").innerHTML = cantidad_correctas;

   if(cantidad_correctas === 9){
    mensaje.textContent = '"Felicitaciónes, sos un verdadero splinter, te ganaste un viaje gratis en aerolineas splinter"';
    mensaje.style.color = 'green';
    return
   }else if(cantidad_correctas >= 3  && cantidad_correctas <= 8){
    mensaje.textContent = '"Felicitaciónes, te ganaste unos auris de virgo"'
    mensaje.style.color = 'green'
   }else if(cantidad_correctas <= 2){
    mensaje.textContent = '"Sos juanceto01"'
    mensaje.style.color = 'red'
   }
}

