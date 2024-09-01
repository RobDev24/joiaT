<template>
  <div class="rodape">
    <div class="conteudos">
          <div class="contato">
            <h3>Central de Atendimento </h3>
            <h5>Tel: (11)3333-3333</h5>
            <p>Seg. a Sex das 08hs as 17hs </p><p>Sac : contato@tomjoias.com.br</p>
            
            

        </div>
        <div class="links">

        </div>
        <div class="pagamentos">

        </div>
      
    </div>
    
       
    <div class="direitos">
        <p class="dir">© Tom Joias 2024. Todos os direitos reservados.</p>
        <p class="cnpj">Tom Joias Ltda - CNPJ: 00.000.000/0001-00</p>
</div>
   
  </div>
</template>

<script>
export default {
  name: 'RodapeV'
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.rodape{
  display: flex;
  width: 84.28rem;
  height: 177px;
  margin-top: 0.2rem;
  color: aliceblue;
  border: 2px solid red;
    
}

h3{
  margin-top: -10px;
  margin-bottom: 15px;
}
.contato{
  display: block;
  float: left;
  width: 50vh;
  height: 60%;
  margin-top: 1rem;
}
.direitos .dir{
  display: flex;
  float: right;
  margin-top: 9rem;
  margin-right: -64rem;
}
.direitos .cnpj{
  float: left;
  display: flex;
  margin-top: 8rem;
  
 margin-left: -19rem;

}
</style>
