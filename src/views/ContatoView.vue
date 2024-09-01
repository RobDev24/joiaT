<template>
    <div class="contato">
      <div class="card">
        <div class="titulo">
                <h3>Contato</h3>
            </div>
   
        <form action="https://api.staticforms.xyz/submit" method="post">
      
        
          <label for="name">Nome</label>
          <input type="text" name="name" placeholder="Seu Nome aqui" autocomplete="off" minlength="8" required>
        
        
          <label for="mail">E-mail</label>
          <input type="email" name="email" placeholder="Seu e-mail aqui" autocomplete="off" minlength="5" required>
          
          <select class="form-select"  required>
  <option selected>Assunto</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        
          <label for="mensagem">Mensagem</label>
          <textarea name="message" cols="36" rows="5"></textarea>

      <button type="submit">Enviar</button>

       <input type="hidden" name="accessKey" value="9f6cfa85-f93e-4f70-9ade-4f94740f9a92">
       <input type="hidden" name="redirectTo" value="http://127.0.0.1:5500/public/MensagemContato.html" >
    </form>
    
  </div>
</div>
</template>

<style scoped>

.contato{
    display: block;
    height: 63vh;
    margin-top: -3px;
    margin-left: 0;
    background-image: url('../assets/imagens/fundo3.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: 2px solid snow;
}

.card{
    display: flex;
    margin-left: 18rem;
    height: 62vh;
    width: 35vw;
    background: transparent;
    backdrop-filter: blur(10px);

}
.titulo{
    margin-top: 0px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    height: 5.5vh;
    color: rgb(240, 225, 12);
    margin-bottom: -18px;
}
label{
    display: flex;
    margin-bottom: -5px;
    margin-top: 5px;
    margin-left: 2rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 20px;
    color: rgb(240, 225, 12);
}
input{
    width: 30vw;
    background: transparent;
    color: aliceblue;
    
}

textarea{
    width: 30vw;
    margin-bottom: 6px;
    background: transparent;
    color:aliceblue;
}
button{
width: 30vw;
border-radius: 5px;
font-family: Georgia, 'Times New Roman', Times, serif;
background-color: rgba(0, 0, 0, 0.347);
color: aliceblue;
font-size: 20px;
}
button:hover{
    background-color: rgba(13, 244, 221, 0.18);
    border-radius: 15px;
    font-family:Georgia, 'Times New Roman', Times, serif;
    color:aquamarine;
    
}
select{
  width: 10vw;
  height: 4vh;
  margin-left: 2rem;
  margin-top: 5px;
  font-size: 15px;
  padding: 2px;
  background: transparent;
  color:aqua;
}

</style>