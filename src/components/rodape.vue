<template>
  <div class="rodape">
    <div class="conteudos">
          <div class="contato">
            <h5>Central de Atendimento </h5>
            <h6>Tel: (11)3333-3333</h6>
            <p>Seg. a Sex das 08hs as 17hs <br>Sac : contato@tomjoias.com.br</p>
            
            

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
  width: 1435px;
  height: 153.5px;
  margin-left: -80px;
  margin-top: 1.21rem;
  background: rgba(232,223,223,0.267);
  color: aliceblue;
}
.contato{
  display: block;
  float: left;
  margin-left:90px;
  margin-top: 25px;
}
.direitos .dir{
  float: left;
  margin-top: 8rem;
  margin-left: -14rem;
}
.direitos .cnpj{
  float: right;
  display: flex;
  margin-top: 130px;
  margin-left: 42rem;

}
</style>
