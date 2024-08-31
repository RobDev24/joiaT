<template>
    <div class="container">
    <div class="contato">
        <h2>Contato</h2>
   
        <form action="https://api.staticforms.xyz/submit" method="post">
      
        
          <label for="name">Nome</label>
          <input type="text" name="name" placeholder="Seu Nome aqui" autocomplete="off" minlength="8" required>
        
        
          <label for="mail">E-mail</label>
          <input type="email" name="email" placeholder="Seu e-mail aqui" autocomplete="off" minlength="5" required>
        
        
          <label for="mensagem">Mensagem</label>
          <textarea name="message" cols="36" rows="7"></textarea>

      <button type="submit">Enviar</button>

       <input type="hidden" name="accessKey" value="9f6cfa85-f93e-4f70-9ade-4f94740f9a92">
       <input type="hidden" name="redirectTo" value="http://127.0.0.1:5500/public/MensagemContato.html" >
    </form>
    
  </div>
</div>
</template>

<style scoped>
.container{
  display: block;
  height: 63vh;
  background-image: url('../assets/imagens/diamante1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
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
  margin-top: -3rem;
  margin-bottom: 20px;

 
}

form{
  display: block;
  height: 45vh;
  margin-top: -25px;
  padding: 15px;
  
  
}

label{
  display: flex;
  color: rgb(242, 31, 16);
  margin-top: 10px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}
input{
  display: flex;
  width: 90%;
  background: transparent;
  color: aliceblue;
  padding: 5px;
  font-size: 18px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  
}
textarea{
  display: flex;
  width: 90%;
}button{
  display: flex; 
  width: 15vw;
  justify-content: center;
  background: rgba(238, 238, 235, 0.203);
  color:blue;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
  margin-left: 4rem;
  margin-top: 10px;
  margin-bottom: -35px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  
}
button:hover{
color: aqua;
background-color: black;
border-radius: 25px;
width: 26vw;
margin-left: -3px;
padding: 8px;

}
textarea{
  background-color: rgba(0, 0, 0, 0.373);
  border: 2px solid rgba(0, 0, 0, 0.168);
  color: aliceblue;
  font-size: 16px;
}

</style>