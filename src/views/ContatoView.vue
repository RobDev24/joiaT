<template>
    <div class="container">
    <div class="contato">
        <h2>Contato</h2>
   
    <form action="" method="post">
      <ul>
        <li>
          <label for="name">Nome</label>
          <input type="text" placeholder="Seu Nome aqui">
        </li>
        <li>
          <label for="mail">E-mail</label>
          <input type="mail" placeholder="Seu e-mail aqui ">
        </li>
        <li>
          <label for="mensagem">Mensagem</label>
          <textarea name="mensagem" id="" cols="36" rows="8"></textarea>
        </li>
      </ul>
    </form>
    <button>Entrar</button>
  </div>
</div>
</template>

<style scoped>
.container{
  display: block;
  height: 63vh;
  
}

.contato{
  display: block;
  
  width: 30vw;
  height: 62vh;
  margin-left: 10rem;
  background: transparent;
  text-align: center;
  align-content: center;
}
h2{
  display: flex;
  text-align: center;
  padding: 0 50% 0 35%;
  color: aliceblue;
  margin-top: -2rem;
  margin-bottom: -30px;

 
}

form{
  display: block;
  height: 45vh;
  margin-top: 30px;
  padding: 15px;
  
  
}
ul{
  display: block;
  margin-top:-10px;
  height: 47vh;

  padding: 5px;

}
li{
  
  padding: 10px;
  
   
}

label{
  display: flex;
  color: aliceblue;

}
input{
  display: flex;
  width: 90%;
  background: transparent;
  color: aliceblue;
  
}
textarea{
  display: flex;
  width: 90%;
}button{
  display: flex;
  padding: 5px 15px;
  margin-left: 32px;
  border-radius: 10px;
  margin-bottom: -35px;
  
}

</style>