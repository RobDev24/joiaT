<template>
    <div class="container">
    <div class="contato">
        <h2>contato</h2>
   
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
          <textarea name="mensagem" id="" cols="35" rows="10"></textarea>
        </li>
      </ul>
    </form>
  </div>
</div>
</template>

<style scoped>
.container{
  display: flex;
  height: 63vh;
  border: 2px solid greenyellow;
}

.contato{
  display: flex;
  border: 2px solid red;
  width: 35vw;
  margin-left: 15rem;
  background-color: rgb(72, 67, 67);
  
}
h2{
  color: aliceblue;
  margin-left: 12rem;
  margin-bottom: 10px;
}

form{
  display: flex;
  color: antiquewhite;

}
ul{
text-align: center;
align-items: center;
align-content: justify;
margin-left: -18rem;
}
</style>