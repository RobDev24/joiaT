<template>
  <div class="rodape">
    <div class="conteudos">
          <div class="contato">
            <h4>Central de Atendimento </h4>
            <h6>Tel: (11)3333-3333</h6>
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
  width: 85.40rem;
  height: 11rem;
  margin-top: ;
  color: aliceblue;
  border: 2px solid red;
    
}

h4{
  margin-top: 0px;
  margin-bottom: 10px;
}
.contato{
  display: block;
  float: left;
  width: 55vh;
  height: 23vh;
  
  border: 2px solid rebeccapurple;
}
.direitos .dir{
  display: flex;
  float: right;
  margin-top: 8.75rem;
  margin-right: -64rem;
}
.direitos .cnpj{
  float: left;
  display: flex;
  margin-top: 8.75rem;
  
 margin-left: -20.56rem;

}
</style>
