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
          <textarea name="mensagem" id="" cols="36" rows="8"></textarea>
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
  width: 25vw;
  margin-left: 1rem;
  background-color: rgb(72, 67, 67);
  padding: 20px;
  text-align: center;
  align-content: center;
  
}
h2{

  height: 5vh;
  width: 10vw;
  color: aliceblue;
  margin-left: 8rem;
  margin-top:-10px;
  border: 2px solid red;

}

form{
  display: flex;
  color: antiquewhite;
  margin-top: 20px;
  

}
ul{
  display: block;
  width: 25vw;
  height: 42vh;
  margin-top: 5px;
  margin-left: -12rem;
  list-style-type: none;
border: 2px solid green;



}
li{
  padding: 5px;
  margin-left: -65px;
}
label{
  display: flex;
  margin-left: 4.3rem;
}
input{
  width: 70%;
  margin-left: 25px;
}
textarea{
  margin-left: 25px;
}
</style>