<template>
    <div>
        <nav>
    <router-link to="/log" class="log">Login</router-link> 
    <router-link to="/" class="home">Home</router-link> 
    <router-link to="/colec" class="colec">Coleçoes</router-link>
    <router-link to="/loja" class="loja">Store</router-link> 
    <router-link to="/contat" class="contat">Contato</router-link> 
    <router-link to="/hist" class="hist">Historia</router-link> 
  </nav>
    </div>
</template>

<script>
export default{
    name:'MenuV',
}
</script>

<style scoped>
nav{
    display: flex;
    margin-top: -7px;
    margin-left: -8px;
    width: 1280px;
    height: 34px;
    

}
nav .log, .home, .colec, .loja, .contat, .hist{
    margin-left: 2rem;
    background: #fff;
    border: 2px solid black;
    border-radius: 10px;
    padding: 8px;
    text-decoration: none;
    
}

</style>