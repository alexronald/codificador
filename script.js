/*¡Bienvenidos y Bienvenidas a nuestro primer desafío! 

Durante estas cuatro semanas, vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

Las "llaves" de encriptación que utilizaremos son las siguientes:

`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`

**Requisitos:**
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. 

Por ejemplo:
`"gato" => "gaitober"`
`gaitober" => "gato"`

- La página debe tener campos para 
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
- El resultado debe ser mostrado en la pantalla.

**Extras:**
- Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del `ctrl+C` o de la opción "copiar" del menú de las aplicaciones.

Tenemos un periodo de tiempo de cuatro semanas para desarrollar el proyecto y vamos a trabajar con el sistema ágil de desarrollo, utilizando el Trello de la siguiente forma: 

1. La columna **Listos para iniciar** presenta las tarjetas con elementos que aun no fueron desarrollados.
2. En la columna **En Desarrollo** estarán los elementos que estés desarrollando en el momento. Al iniciar una tarea, podrás mover la tarjeta que contiene dicha tarea para esta columna.
3. En la columna **Pausado** estarán los elementos que comenzaste a desarrollar, pero necesitaste parar por algún motivo.
4. Por fin, en la columna **Concluido** estarán los elementos ya concluidos.

El Trello es una herramienta de uso individual para que puedas controlar el progreso de tus actividades, pero no será evaluada.

 Buen proyecto!*/
const mensajeVacio = document.querySelector(".mensaje")
const formularioCopiar = document.querySelector(".form")
var input_text_entrada = document.querySelector("#tex_entrada");
var input_text_salida = document.querySelector("#tex_salida");

var btn_copiar = document.querySelector("#btn-copiar");
var btn_desencriptar = document.querySelector("#btn-desencriptar");

btn_copiar.addEventListener("click", copiar);
btn_desencriptar.addEventListener("click", desencriptar);

var codigo ={'a':'ai', 'e':'enter', 'i':'imes','o':'ober','u':'ufat'}

 function encriptar(){
   var text_emcriptar = input_text_entrada.value;
   text_emcriptar = text_emcriptar.replace(/e/g ,codigo['e'])
                                 .replace(/i/g ,codigo['i'])
                                 .replace(/a/g ,codigo['a'])
                                 .replace(/o/g ,codigo['o'])
                                 .replace(/u/g ,codigo['u']);

   input_text_salida.textContent  = text_emcriptar;
 }

 function desencriptar(){
   var text_emcriptar = input_text_entrada.value;
   text_emcriptar = text_emcriptar.replace(/enter/g ,'e')
                                 .replace(/imes/g ,'i')
                                 .replace(/ai/g ,'a')
                                 .replace(/ober/g ,'o')
                                 .replace(/ufat/g ,'u');

   input_text_salida.textContent  = text_emcriptar;
 }

 //funciom para el boton copiar mensaje
 function copiar(){
   input_text_salida.select();
   document.execCommand("copy")
 }

 //ocultar elemento
 input_text_entrada.addEventListener('input', (e)=>{

   if(e.currentTarget.value.trim() === ""){
      formularioCopiar.style.display = 'none';
      mensajeVacio.style.display = 'block';
   }else{
      formularioCopiar.style.display = 'block';
      mensajeVacio.style.display = 'none';
   }
})