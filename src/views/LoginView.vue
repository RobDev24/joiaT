<template>
    <div class="container">
        <div class="card">
            <div class="titulo">
                <h3>Contato</h3>
            </div>
            <label for="">Nome</label>
            <input type="email" placeholder="Seu Nome aqui" autocomplete="off" required>

            <label for="">E-mail</label>
            <input type="email" placeholder="Seu e-mail aqui" autocomplete="off" required>

            <label for="">Mensagem</label>
            <textarea name="message" id="" cols="20" rows="5"></textarea>

            <button>Enviar</button>

            

        </div>
        
    </div>
</template>

<style scoped>
.container{
    display: block;
    border: 2px solid rebeccapurple;
   padding: 0rem 42.3rem;
    height: 62vh;
    background-image: url('../assets/imagens/fundo3.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
}

.card{
    display: flex;
    margin-left: -21rem;
    border: 2px solid red;
    height: 61vh;
    width: 35vw;
    padding: 0 10px 0 10px;
    background: transparent;

}
.titulo{
    margin-top: 10px;
    padding: 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    height: 6vh;
    color: rgb(240, 225, 12);
}
label{
    display: flex;
    margin-bottom: -5px;
    margin-top: 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 20px;
}
input{
    width: 30vw;
    color: aliceblue;
}
.card label, input, textarea{
    margin-left: 1rem;
    color: rgb(226, 226, 43);
    background: transparent;
}
textarea{
    width: 30vw;
    margin-bottom: 5px;
}
button{
width: 30vw;
margin-left: 1rem;
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
    color:rgb(255, 21, 21);
    
}
</style>