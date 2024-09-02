<template>
    <div class="cadastro">
                
        
            <form action="" method="post" class="formulario-cadastro">

                <h3>Formulário de Casastro</h3>
                <p>Todos os campos são obrigatórios</p>
                <div class="dados-cad">
            <label for="nome">Nome Completo</label>
            <input type="text" class="nome" placeholder="Nome completo" autocomplete="off" required minlength="8">

            <label for="date" class="date-nasc" >Data de Nascimento</label>
            <input type="date" class="data-nasc" placeholder="data de nascimento" autocomplete="off" required>

            <label for="mail">E-mail</label>
            <input type="email" class="mail" placeholder="E-mail" autocomplete="off" required>

           
            <label for="txtCep">Cep</label>
            <input id="txtCep" type="text
            " class="cep" autocomplete="off" required>
               
            <label for="txtRua">Largadouro</label>
            <input id="txtRua" type="text 
            " class="rua" name="Rua">
       
            <label for="txtNumero">Numero</label>
            <input id="txtNumero" type="text 
            " class="numero" name="Numero">
        
    
            <label for="txtBairro">Bairro</label>
            <input id="txtBairro" type="text 
            " class="bairro" name="Bairro">

            <label for="txtCidade">Cidade</label>
            <input id="txtCidade" type="text 
            " class="cidade" name="cidade">
              
            <label for="txtEstado">Estado</label>
            <input id="txtEstado" type="text 
            " class="estado" name="Estado">
             
            <button class="btn-cadastro">Cadastrar</button>
            <p class="btn-login">Já tem cadatro? Faça o seu <router-link to="/log" class="route-login">Login</router-link></p>
        </div>
     </form>
       
       
          
   
</div>

</template>

<script>
export default{
    name:'CadastroT',
}
function buscaCep() {
    let cep = document.getElementById('txtCep').value;
    if(cep !== ""){
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep;
        
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        req.onload = function() {
            if(req.status === 200){
                let endereco = JSON.parse(req.response);
                document.getElementById("txtRua").value = endereco.street;
                document.getElementById("txtBairro").value = endereco.neighborhood;
                document.getElementById("txtCidade").value = endereco.city;
                document.getElementById("txtEstado").value = endereco.state;
            }
            else if(req.status === 404){
                alert("cep inválido");
            }
            else{
                alert("erro")
            }
        }
    }
}

window.onload = function(){
    let txtCep = document.getElementById("txtCep");
    txtCep.addEventListener("blur", buscaCep);
}

</script>

<style scoped>
.cadastro{
    display: block;
    height: 63vh;
    border: 2px solid #fff;
    margin-top: -4px;
}
.dados-cad {
    display: flexbox;
    width: 60vw;
    height: 51vh;
    margin-top: -16px;
   overflow: auto;
    border: 2px solid red;

}
 .cep, .numero{
    height: 30px;
    margin-left: -33rem;
}
.data-nasc{
    margin-left: -37rem;
}

  .nome, .mail, .rua, .bairro, .cidade, .estado{
   display: block;
   width: 35rem;
   height: 30px;
   margin-left: 2rem;
}


label{
    display: flex;
    margin-top: 10px;
    margin-left: 33px;
}
.date-nasc{
    margin-left: 35px;
}
.formulario-cadastro{
    display: block;
    width: 60vw;
    height: 62vh;
    margin-left: 20rem;
    background-color: #fff;

    border: 2px solid yellow;
}

.btn-cadastro{
    display: inline;
    float: left;
    margin-top: 1em;
    margin-bottom: 0.5rem;    
    margin-left: 2rem;

    border: 2px solid red;
}

.btn-login{
    display: flex;
    margin-top: 1.5rem;
    margin-left: 20rem;
}
.route-login{
margin-left: 8px;

}
</style>