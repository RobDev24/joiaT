<template>
    <div class="container">
        
        <div class="card">

            <h2>Login</h2>

            <div class="label">
               
                <label for="usuario">Usuário</label>
                <input type="text" id="usuario" placeholder="e-mail">

            </div>

            <div class="label">
               
               <label for="senha">Senha</label>
               <input type="password" id="senha" placeholder="senha">

           </div>

           <div>
            <button>Entrar</button>
           </div>

           <div> <hr></div>

           <p>Não tem uma conta? <a href="">Cadastre-se</a> </p>
        </div>

    </div>
</template>


<style scoped>
*{
    margin: 0;
    padding: 0;
}

.container{
    display: flex;
    height: 63vh;
    background-image: url('../assets/imagens/fundo3.png');
    background-position: center;
    background-size: cover;
    
}
.card{
    
    width: 20vw;
    height: 40vh;
    padding: 20px;
    margin-top: 30px;
    margin-left: 5rem;
    color: aliceblue;
    background: transparent;
    backdrop-filter: blur(15px);
    border-radius: 10px;
}

h2{
    text-align: center;
    margin-bottom: 20px;
}

input{
    width: 90%;
    background: transparent;
}
label{
  display: flex;
  margin-left: 10px;
  padding: 5px;
  margin-top: 8px;
}
button{
    display: flex;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 5px;
    padding: 3px;
}

a{
    color: yellow;
}
</style>