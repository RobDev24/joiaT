<template>
    <div class="login">
        <div class="col-2">
            <div class="titulo1">
                <h4>Login</h4>
        </div>
        <form action="" method="post">
        <label for="email">E-mail</label>
        <input type="email" name="email" placeholder="Seu e-mail" autocomplete="off" required>

        <label for="password">Senha</label>
        <input type="password" name="password" placeholder="Sua senha" autocomplete="off" required>

        <button type="submit" >Entrar</button>
      </form>
        <hr>

        <p>Não é cadastrado? <router-link to="/cadast" class="link-cadastro">Cadastre-se</router-link>  </p>

            </div>
    </div>
</template>

<script>

export default{
  name: 'LoginG'
}

</script>

<style scoped>

.login{
    display: block;
    height: 63vh;
    background-image: url('../assets/imagens/fundo3.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: -60px;
    padding: -2rem 0;
    
    
    
}

.col-2{
    display: block;
    margin-left:22rem;
    height: 50vh;
    width: 20vw;
    margin-top: 67px;
    padding: 20px 0;
    border: 2px solid black;
    border-radius: 10px;
    backdrop-filter: blur(20px);
  }

  .titulo1{
    display:block;
    height: 6vh;
    font-family:Georgia, 'Times New Roman', Times, serif;
     color: #fff;
  }

  .col-2 label, input{
    display: flex;
    margin-left: 10px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: #fff;
    
  }
  label{
    margin-bottom:-5px;
    margin-top: 10px;
  }

  input{
    background: transparent;
    width: 14rem;
  }
  button{
    display: block;
    width: 17vw;
    margin-top: 8px;
    margin-left: 0.5rem;
    border-radius: 5px;
    background-color: rgba(141, 238, 14, 0.486);
      
  }
  button:hover{

    background-color: aqua;
   color: rgb(46, 5, 103);
   border-radius: 10px;
   font-size: 18px;

  }

  p{
    color: #fff;
  }
.link-cadastro{
  color: #f5e906;
}
::placeholder{
  color: rgb(234, 250, 4);
}

</style>