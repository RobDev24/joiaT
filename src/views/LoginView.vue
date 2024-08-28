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
    
}
.card{
    background-color: rgb(72, 70, 60);
    border: 2px solid rgb(42, 192, 12);
    width: 20vw;
    height: 83%;
    padding: 20px;
    margin-top: 10px;
    margin-left: 5rem;
    color: aliceblue;
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
</style>