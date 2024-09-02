<template>
    <div class="cadastro">
        <form action="" method="post" class="formulari-cadastro">
        <h3>Formulário de Casastro</h3>
        <p>Todos os campos são obrigatórios</p>
        
        <div class="dados">
            <label for="nome">Nome Completo</label>
            <input type="text" placeholder="Nome completo" autocomplete="off" required minlength="8">

            <label for="date">Data de Nascimento</label>
            <input type="date" placeholder="data de nascimento" autocomplete="off">

            <div class="row">
                <div class="input-field col m6">
            <label for="txtCep">Cep</label>
            <input id="txtCep" type="text 
            " name="cep" autocomplete="off" required>
        </div>
        </div>

        <div class="row">
                <div class="input-field col m6">
            <label for="txtRua">Rua, Av, Alameda, travessa</label>
            <input id="txtRua" type="text 
            " name="Rua">
        </div>
        </div>

        <div class="row">
                <div class="input-field col m6">
            <label for="txtNumero">Numero</label>
            <input id="txtNumero" type="text 
            " name="Numero">
        </div>
        </div>

        <div class="row">
                <div class="input-field col m6">
            <label for="txtBairro">Bairro</label>
            <input id="txtBairro" type="text 
            " name="Bairro">
        </div>
        </div>

        <div class="row">
                <div class="input-field col m6">
            <label for="txtCidade">Cidade</label>
            <input id="txtCidade" type="text 
            " name="cidade">
        </div>
        </div>

        <div class="row">
                <div class="input-field col m6">
            <label for="txtEstado">Estado</label>
            <input id="txtEstado" type="text 
            " name="Estado">
        </div>
        </div>
        </div>


        <button>Cadastrar</button>
        <button><router-link to="/log">Login</router-link></button>    
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
}
.formulari-cadastro{
    display: block;
    width: 60vw;
    height: 62vh;
    background-color: #fff;

    border: 2px solid yellow;
}
</style>