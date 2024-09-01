<template>
    <div class="login">
        <div class="col-2">
            <div class="titulo1">
                <h4>Login</h4>
        </div>

        <label for="email">E-mail</label>
        <input type="email" placeholder="Seu e-mail" autocomplete="off" required>

        <label for="password">Senha</label>
        <input type="password" name="password" autocomplete="off" required>

        <button>Entrar</button>

        <hr>

        <p>Não é cadastrado? <router-link to="/cadast">Cadastre-se</router-link>  </p>

            </div>
    </div>
</template>

<style scoped>

.login{
    display: block;
    border: 2px solid rebeccapurple;
    height: 63vh;
    background-image: url('../assets/imagens/fundo3.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: -4px;
    ;
    
    
}

.col-2{
    display: block;
    margin-left:22rem;
    border: 2px solid red;
    height: 50vh;
    width: 18vw;
    margin-top: 30px;
    background: #fff;
  }

  .titulo1{
    display:block;
    height: 6vh;
    margin-top: 8px;
    margin-bottom: 18px;
    font-family:Georgia, 'Times New Roman', Times, serif;
    border: 2px solid rosybrown;
  }

  .col-2 label, input{
    display: flex;
    margin-left: 20px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    
  }
  label{
    margin-bottom:-5px;
    margin-top: 10px;
  }
  button{
    display: block;
    width: 17.8vw;
    margin-top: 14px;
    border-radius: 5px;
  }

</style>