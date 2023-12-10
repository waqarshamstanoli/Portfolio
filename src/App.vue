<template>
  <v-app>
   

    <v-main>
     
      <img src="./assets/swinger.png" alt="" class="setimage" :class="{ transformImage: left }"/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
    left:false,
    right:true,
  }),
  methods:{
    
    rotate(){
      if(window.pageYOffset>10 && window.pageYOffset<1150){
        this.left=true
        this.right=false
      }
      else if (window.pageYOffset>1161 && window.pageYOffset<1950){
        this.right=true
        this.left=false
      }
      else if (window.pageYOffset>1960 && window.pageYOffset<2750){
        this.left=true
        this.right=false
      }
      else if (window.pageYOffset>2760 && window.pageYOffset<3550){
        this.right=true
        this.left=false
      }
      else if (window.pageYOffset>3560 && window.pageYOffset<4350){
        this.left=true
        this.right=false
      }
      else if (window.pageYOffset>4360 && window.pageYOffset<5150){
        this.right=true
        this.left=false
      }
      else if (window.pageYOffset>4350 && window.pageYOffset<5150){
        this.left=true
        this.right=false
      }
// this.left=true
    }
  },
  created(){
    window.addEventListener("scroll", this.rotate);

  }
};
</script>
<style>
.setimage{
  position: fixed;
  width: 1300px;
  bottom:200px;
  /* left:900px; top:0px; transform:rotate(0deg); */
  animation-name: moveRight;
  animation-duration: 3s;
  animation-fill-mode: forwards; /* Add this line */
  opacity: 0.7;
}
@keyframes moveRight {
  0%   { left:50px; top:0px; transform:rotate(-160deg)}
  100% { left:900px; top:0px; transform:rotate(0deg)}
}


.transformImage{
  animation-name: moveLeft;
  animation-duration: 3s;
  animation-fill-mode: forwards; /* Add this line */
  opacity: 0.7;
}


@keyframes moveLeft {
  0%   { left:800px; top:0px;}
  100% { left:-450px; top:0px; transform:rotate(-140deg)}
}
</style>
