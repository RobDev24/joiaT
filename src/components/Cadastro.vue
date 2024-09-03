<template>
    <div class="cadastro">
                
        
            <form action="" method="post" class="formulario-cadastro">
                
                <div class="cabecalho">

                <h3>Formulário de Casastro</h3>
                <p>Todos os campos são obrigatórios</p>

               </div>

                <div class="dados-cad">

            <label for="nome">Nome</label>
            <input type="text" class="nome" placeholder="Nome completo" autocomplete="off" required minlength="8">

            <label for="date" class="date-nasc" >Data de Nascimento</label>
            <input type="date" class="data-nasc" autocomplete="off" required>

            <label for="mail">E-mail</label>
            <input type="email" class="mail" placeholder="E-mail" autocomplete="off" required>
             
            <label for="password">Senha</label>
            <input type="password" id="senha" class="Senha" placeholder="Digite uma senha" autocomplete="off" minlength="8" maxlength="16" required >
           
            <label for="password">Confirme a Senha</label>
            <input type="password" id="confsenha" class="Confirma-Senha" placeholder="Confirme a senha" autocomplete="off" minlength="8" maxlength="16" required >

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
    margin-top: -4px;
    background-image: url('../assets/imagens/fundodiamantes.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .cabecalho{
    color:aliceblue;
  }
  .formulario-cadastro{
    display: block;
    width: 60vw;
    height: 62vh;
    margin-left: 20rem;
    backdrop-filter: blur(20px);
    border: 2px solid #000;
    border-radius: 10px;

}

.dados-cad {
    display: flexbox;
    width: 60vw;
    height: 51vh;
    margin-top: -16px;
    overflow: auto;
    
}
 .cep, .numero{
    height: 30px;
    margin-left: -33rem;
}
.data-nasc{
    margin-left: -37rem;
    color: rgba(234, 250, 4, 0.786);
}

  .nome, .mail, .rua, .bairro, .cidade, .estado{
   display: block;
   width: 35rem;
   height: 30px;
   margin-left: 2rem;
}
input{
    background: transparent;
    
}
::placeholder{
    color: rgba(234, 250, 4, 0.786);
}


label{
    display: flex;
    margin-top: 10px;
    margin-bottom: -5px;
    margin-left: 33px;
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-size: 18px;
    color: aliceblue;
}

.Senha, .Confirma-Senha{
    display: flex;
    margin-left: 2rem;
}
.senha
.date-nasc{
    margin-left: 35px;
}

.btn-cadastro{
    display: inline;
    float: left;
    margin-top: 1em;
    margin-bottom: 0.5rem;    
    margin-left: 2rem;
    border-radius: 5px;
    background-color: rgba(141, 238, 14, 0.486);
    color: #fff;
    font-family:Georgia, 'Times New Roman', Times, serif;
   
}

.btn-login{
    display: flex;
    margin-top: 1.5rem;
    margin-left: 20rem;
    color: #fff;
    
}
.route-login{
margin-left: 8px;
background-color: rgba(141, 238, 14, 0.486);
color: #fff;
padding: 0px 8px;
border-radius: 5px;
text-decoration: none;
font-family: Georgia, 'Times New Roman', Times, serif;
}
.btn-cadastro:hover, .route-login:hover{
    border-radius: 10px;
    background-color:coral;
    color: black;
}
</style>