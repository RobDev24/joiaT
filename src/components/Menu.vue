<template>
    <div class="menu">

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link to="/log" class="navbar-brand">Login</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><router-link to="/colec" class="dropdown-item">Coleçoes</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link to="/loja" class="dropdown-item">Store</router-link></li> 
            <li><hr class="dropdown-divider"></li>
            <li> <router-link to="/contat" class="dropdown-item">Contato</router-link></li> 
            <li><hr class="dropdown-divider"></li>
            <li> <router-link to="/hist" class="dropdown-item">Historia</router-link> </li>
         </ul>
        </li>
        
      </ul>      
    </div>
  </div>
</nav>    
      </div>
</template>

<script>
export default{
    name:'MenuV',
}
</script>

<style scoped>
.menu{
  
  display: flex;
  width: 100vw;
  text-align: justify;
  margin-top: 0px;
  margin-bottom: 5px;
  
}


nav{
  display: flex;

  width: 100%;
  height: 6vh;
  align-content: center;
  align-items: center;
  text-align: justify;
  text-decoration: none;
}
</style>