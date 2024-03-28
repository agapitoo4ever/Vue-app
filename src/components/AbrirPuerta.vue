

<template>
  <div :class="claseContenedorA">
    <img v-if="puedePasar" src="@/img/puerta-abierta.jpg" alt="Puede Pasar" class="imagen-cajaA" @click="irASegundaVentanaA">
    <img v-if="!puedePasar" src="@/img/puerta-cerrada.jpg" alt="Feos NO Pasan" class="imagen-cajaA">
    <br>
    <input v-if="!puedePasar" placeholder="Ingrese su Nombre" @change="inputValueA" class="input-custom">
    <p v-if="puedePasar" class="fuente-texto">Bienvenido {{ usuario }}</p>
   
    <button 
      @input="inputValueA" 
      v-if="puedePasar" 
      @click="cerrarSesionA" 
      :class="[claseBotonA]"
    >
      Quiero Salir
    </button>
    <button 
      v-if="!puedePasar"
      @click="toggleCajaA"
      :class="[claseBotonA]"
    >
      Quiero Pasar
    </button>
    <br><br>
  </div>
</template>

<script>
export default {
  data() {
    return {
      puedePasar: false,
      usuario: "",
      abierto: false,
      SegundaVentana: false
    };
  },
  computed: {
    tealToggle(){
      return this.puedePasar ? 'teal-Abierto' : 'Teal-Cerrado';
    },
    claseContenedorA() {
      return this.puedePasar ? 'container-abiertaA' : 'container-cerradaA';
    },
    claseBotonA() {
      return this.puedePasar ? 'boton-cerradoA' : 'boton-abiertoA';
    },
    estadoA() {
      return this.puedePasar ? 'Abierta' : 'Cerrada';
    }
  },
  methods: {
    irASegundaVentanaA() {
      this.$router.push(`/segunda-ventana`)
    },
    cerrarSesionA() {
      this.puedePasar = !this.puedePasar;
      this.usuario = "";
    },
    inputValueA(e) {
      this.usuario = e.target.value;
    },
    toggleCajaA() {
      if (this.usuario !== "") {
        this.puedePasar = !this.puedePasar;
      }
    },
  }
};
</script>

<style>
/* Estilos para centrar y cambiar la fuente */
.container-abiertaA, .container-cerradaA {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 98vh; /* 100% de la altura de la ventana */
  font-family: 'Comic Sans MS', sans-serif; /* Cambia la fuente a Comic Sans */
}

/* Estilos para el contenedor con la caja abierta */
.container-abiertaA {
  background-color: rgba(61, 240, 61, 0.466);
}

/* Estilos para el contenedor con la caja cerrada */
.container-cerradaA {
  background-color: rgba(236, 56, 56, 0.527);
}

/* Estilos para los botones */
.boton-abiertoA, .boton-cerradoA {
  z-index: 1;
  background-color: white;
  color: black;
  border: none;
  border-radius: 20px; /* Bordes redondeados */
  padding: 10px 50px;
  cursor: pointer;
  margin-top: 10px;
  font-family: 'Comic Sans MS', sans-serif; /* Cambia la fuente a Comic Sans */
  transition: all 0.2s ease; /* Transición para la animación */
  transform: scale(1); /* Escala normal por defecto */
  font-size: 15px;
}

.boton-abiertoA:hover, .boton-cerradoA:hover {
  background-color: rgba(37, 196, 245, 0.63);
  transform: scale(1.1); /* Escala el botón al 110% cuando el mouse está encima */
}
.imagen-cajaA {
  width: 400px; /* Ajusta el ancho de la imagen */
  height: 500px; /* Ajusta el alto de la imagen */
  margin-top: 20px;
  border: 3px solid black; /* Borde de 5px negro */
  border-radius: 30px; /* Bordes redondeados */
}
.input-custom {
    width: auto; /* Ancho automático basado en el contenido */
    padding: 12px 15px;
    font-size: 16px;
    border-radius: 25px; /* Bordes más redondeados */
    border: 2px solid #007bff; /* Borde más grueso y color azul */
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    background-color: #f4f4f4; /* Fondo gris claro */
    color: #333; /* Color de texto oscuro */
    transition: all 0.2s ease;
}

.input-custom:hover {
    border-color: #12c52a; /* Color de borde más oscuro al pasar el mouse */
    transform: scale(1.1);
}
.input-custom::placeholder {
    color: #aaa; /* Color del texto de marcador de posición */
}
.fuente-texto{
font-size: 20px;
}
/* Animación para el botón */
</style>
