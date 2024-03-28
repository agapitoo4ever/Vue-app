<template>
    <div class="container">
         <img src="@/img/salir.jpg" alt="" @click="irInicio" class="imagenSalir">

         <div class="botones-container">
            <button class="botones button1" @click="Opcion1">Opcion1 </button>
            <button class="botones button2" @click="Opcion2">Opcion2 </button>
            <button class="botones button3" @click="Opcion3">Opcion3 </button>
        </div>
         <div class="segunda-ventana">
            
             <h1> Segunda ventana</h1>

        
        </div>
    </div>
 </template>
 
 <script>
 export default {
     name: 'SegundaVentana',
     data() {
         return {};
     },    
   
     methods:{
         irInicio(){
             this.$router.push(`/`)
         },
         Opcion1(){
             this.$router.push(`viajes`)
         },
         Opcion2(){
             this.$router.push(`Opcion2`)
         },
         Opcion3(){
             this.$router.push(`/Opcion3`)
         }
     }
 };
 </script>
 
 <style>
 .container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;  /* Centra verticalmente el contenido */
    align-items: center;      /* Centra horizontalmente el contenido */
 }
 
 .segunda-ventana {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 98vh;
    width: 100%;
    background-color: rgba(37, 90, 235, 0.596);
    color: white;
    font-family: 'Comic Sans MS', sans-serif;
 }
 
 .imagenSalir {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 1.5%;
    border-radius: 50px;
    transition: all 0.1s ease;
    transform: scale(1);
    filter: brightness(80%);
 }
 .imagenSalir:hover{
    transform: scale(1.1);
    filter: brightness(100%);
    
 }
 .botones-container{
    display: flex;
    flex-direction: row;  /* Cambiado a row para que los botones estén uno al lado del otro */
    align-items: center;
    justify-content: center;
    margin-top: 20px;  /* Ajusta el margen superior según tu preferencia */
    position: absolute;  /* Agregado */
    top: 43%;  /* Ajusta la posición vertical de los botones */
 }
 .botones{
    position: relative;
    margin: 10px;  /* Añade un margen para separar los botones */
    padding: 10px 20px;  /* Añade espaciado interno para que los botones no estén pegados al texto */
    border-radius: 15px;

 }
 .botones:hover {
    filter: brightness(110%);
}
.button1 {
    background-color: #4caf4f85; /* Color verde suave */
}

.button2 {
    background-color: #f443366e; /* Color rojo suave */
}

.button3 {
    background-color: #2195f370; /* Color azul suave */
}
 </style>
 