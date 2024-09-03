<template>
  <div class="historia">
    
    <div class="text-conteudo">
      <h3>Nossa história</h3>

      <div class="texto-hist">
        <p>Tom Joias foi inspirada no nosso designer princial Tom Neves, um artista dedicado 
            talentoso e minusuosamente detalhista, com um gosto requintado e exotico ao mesmo tempo
            inspiras suas criações de acordo com cara rosto e estilo, dando ainda mais beleza e 
            sofisticação as suas coleções.
          
          </p>
      </div>
    </div>
  </div>
</template>

<script>

export default{
  name:'HistoriaH'
}
</script>

<style scoped>

.historia{
  
  height: 63vh;
  margin-top: -4px;
  padding:40px 0;
  background-image: url('../assets/imagens/fundo7.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.text-conteudo{
  display: block;
  width: 60vw;
  height: 50vh;
  margin-left: 18rem;
  border: 2px solid black;
  border-radius: 10px;
  background: transparent;
  backdrop-filter: blur(6px);

}

h3{
 margin-left: -3rem; 
 margin-top: 30px;
 margin-bottom: 80px;
 color: rgb(229, 255, 0);
 font-family: Georgia, 'Times New Roman', Times, serif;
 font-size: 35px;
}

.texto-hist{
  display: flex;
  margin-top: -40px;
  margin-bottom: 30px;
  padding: 20px;
  color: rgb(229, 255, 0);
  font-size: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

</style>