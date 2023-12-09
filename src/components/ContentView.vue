<template>
  <div >
    <v-container fluid  >
      <!-- <img src="../assets/01-6df513767845a6be0a34c0bf62c9acdd.png" alt="" class="swinger" :style="{ backgroundPositionX: `${translateX}px`,  }"> -->
        <router-view></router-view>
    </v-container>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      translateX: 0,
      rotation: 0


    };
  },
  methods:{
    // translateBackground() {
    
    //   const offsetX = 5; 
    //   const rotationValue = 45; 

    //   this.translateX += offsetX;
    //   this.rotation += rotationValue;
    // }
  },
  created(){
    // window.addEventListener("scroll", this.translateBackground);

  },
};
</script>
  <style>
  .animateElement{
    opacity: 1; visibility: inherit; transform: translate(-100%, 0%) rotate(90deg);
  }
  .swinger {
     /* position: absolute; */
    z-index: 20;
    transform: translate(100%, 0%)
    /* width: 100%; */
    /* height: 1600px; */
    /* background-image: url('../assets/swinger.png'); */
    /* background-image: url('../assets/swinger.png'); */
    /* background-repeat: no-repeat; */
    /* rotate:270deg; */
    /* right: -400px;
    top: -300px; */
}
</style>