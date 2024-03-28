<template>
    <div class="containerOp1">
      <header>
        <h1>Bienvenido a Viajes a Brasil</h1>
        <p>Descubre los destinos más populares de Brasil y planifica tu próximo viaje.</p>
      </header>
      <h2>Destinos populares</h2>
      <section class="destinos">
        
  
        <!-- Bloque 1 -->
        <div class="destino" @click="irADestino('rio')">
          <img src="@/img/img1.webp" alt="Rio de Janeiro">
          <h3>Rio de Janeiro</h3>
        </div>
  
        <div class="destino" @click="irADestino('salvador')">
          <img src="@/img/img1.webp" alt="Salvador">
          <h3>Salvador</h3>
        </div>
  
        <div class="destino" @click="irADestino('pantanal')">
          <img src="@/img/img1.webp" alt="Pantanal">
          <h3>Pantanal</h3>
        </div>

        <!-- Bloque 2 -->
        <div class="destino" @click="irADestino('fortaleza')">
          <img src="@/img/img1.webp" alt="Fortaleza">
          <h3>Fortaleza</h3>
        </div>

        <div class="destino" @click="irADestino('foz-do-iguacu')">
          <img src="@/img/img1.webp" alt="Foz do Iguaçu">
          <h3>Foz do Iguaçu</h3>
        </div>

        <div class="destino" @click="irADestino('manaus')">
          <img src="@/img/img1.webp" alt="Manaus">
          <h3>Manaus</h3>
        </div>

        <!-- Bloque 3 -->
        <div class="destino" @click="irADestino('natal')">
          <img src="@/img/img1.webp" alt="Natal">
          <h3>Natal</h3>
        </div>

        <div class="destino" @click="irADestino('recife')">
          <img src="@/img/img1.webp" alt="Recife">
          <h3>Recife</h3>
        </div>

        <div class="destino" @click="irADestino('brasilia')">
          <img src="@/img/img1.webp" alt="Brasilia">
          <h3>Brasilia</h3>
        </div>
      </section>
  
      <footer>
        <p>© 2024 Viajes a Brasil. Todos los derechos reservados.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OpcionBrasil',
    methods: {
      irADestino(/*destino*/) {
        this.$router.push(/*`/destino/${destino}`*/`/Opcion3`);
      }
    }
  };
  </script>
  
  <style scoped>
  .containerOp1 {
    font-family: 'Arial', sans-serif;
  }
  
  header {
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 20px;
  }
  
  .destinos {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap; /* Permite que los destinos se envuelvan en filas */
    margin-top: 20px;
  }
  
  .destino {
    text-align: center;
    cursor: pointer;
    width: 30%; /* Ajusta el ancho para que sean 3 en una fila */
    margin-bottom: 20px;
  }
  
  .destino img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  
  footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  </style>
