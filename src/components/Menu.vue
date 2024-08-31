<template>
    <v-system-bar color="#ffff">
     <nav>
    <router-link to="/log" class="log">Login</router-link> 
    <router-link to="/" class="home">Home</router-link> 
    <router-link to="/colec" class="colec">Coleçoes</router-link>
    <router-link to="/loja" class="loja">Store</router-link> 
    <router-link to="/contat" class="contat">Contato</router-link> 
    <router-link to="/hist" class="hist">Historia</router-link> 
  </nav>
    </v-system-bar>

</template>

<script>
export default{
    name:'MenuV',
}
</script>

<style scoped>


</style>