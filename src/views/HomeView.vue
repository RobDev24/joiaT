<template>
  <div class="home">
        <div class="imagem">
            
        </div>
         <div class="galeria">
        <span style="--i:1"><img src="../assets/imagens/colarcritalr1.png"></span>
        <span style="--i:2"><img src="../assets/imagens/brincocolarping.png"></span>
        <span style="--i:3"><img src="../assets/imagens/colabrink1.png"></span>
        <span style="--i:4"><img src="../assets/imagens/Tom1.jpg"></span>
        <span style="--i:5"><img src="../assets/imagens/colar3pingverde1.png"></span>
        <span style="--i:6"><img src="../assets/imagens/colarping1.png"></span>
        <span style="--i:7"><img src="../assets/imagens/colar3pingverde1.png"></span>
        <span style="--i:8"><img src="../assets/imagens/correntinhacoracao1.png"></span>
              
    </div>     
</div>
  
</template>

<style scoped>
.home{
  display: flex;
  height: 63vh;
  background-image: url('../assets/imagens/diamante1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid red;
}
.imagem{
  float: left;
  width:350px;
  height:300px;
  margin-top:40px;
  margin-left:5px;
  background-image:url(../assets/imagens/diamente3.png);
  background-size:cover;
  background-repeat:no-repeat;
  background-position:center;
  }
  .galeria span img:hover{transform:translateY(3px) scale(1.5);
  cursor:pointer}galeria:hover{animation-play-state:paused
  }
  .galeria{
  position:relative;
  top:3rem;
  left: 30rem;
  width:100px;
  height:100px;
  transform-style:preserve-3d;
  animation:rotate 20s linear infinite
  }
  @keyframes rotate{
    0%{transform:perspective(1000px) rotateY(0deg)}
    100%{transform:perspective(1000px) rotateY(360deg)}
    }
    .galeria span{
      position:absolute;
      width:100%;
      height:100%;
      top:0;
      left:0;
      transform-origin:center;
      transform-style:preserve-3d;
      transform:rotateY(calc(var(--i) * 45deg)) translateZ(350px)
      }
      .galeria nav img{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%
      }
      .galeria span img{transform-style:preserve-3d;
      -webkit-box-reflect:below 1px linear-gradient(transparent,rgba(0,0,0,0.5))
      }
</style>
