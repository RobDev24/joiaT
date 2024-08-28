<template>
    <div class="container">

    <nav class="login">

        <form action="" method="post">

            <label for="">Usuário</label>
            <input type="text">

            <label for="">Senha</label>
            <input type="password">

            <button>Entrar</button>
        </form>
    </nav>
    <div class="suporte">
<h2>suporte</h2>
    </div>
</div>
</template>

<style scoped>

.container{
    display: block;
    height: 61vh;
    border: 2px solid rebeccapurple;
    background-image: url('../assets/imagens/fundodiamantes.png');
    background-position: center;
    background-size: cover;
}
.login{
    display: inline;
    float: left;
    margin-left: 3rem;
    height: 100%;
    width: 25rem;
    border: 2px solid rebeccapurple;
    background: #746d6d;
    color: aliceblue;
}

form{

}
.suporte{
    display: inline;
    float: right;
    margin-right: 2rem;
    height: 100%;
    width: 120vh;
    border: 2px solid rebeccapurple;
    color: aliceblue;
}


</style>

