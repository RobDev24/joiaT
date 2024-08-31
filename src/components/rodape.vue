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
*{
  padding: 0;
  margin: 0;
  
}
.rodape{
 
  display: flex;
  width: 1348px;
  height: 120px;
  margin-bottom: 3px;
  color: aliceblue;
  
}
.contato{
  display: block;
  float: left;
  width: 50vh;
  height: 60%;
  margin-top: 1rem;
}
.direitos .dir{
  float: right;
  margin-top: 7.5rem;
  margin-right: -64rem;
}
.direitos .cnpj{
  float: left;
  display: flex;
  margin-top: 7.5rem;
 margin-left: -19rem;

}
</style>
