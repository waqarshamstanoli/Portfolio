<template>
  <v-container fluid >
   
    <v-row class="justify-space-around containerHeight" :class="{ square: test }" ref="sectionElement">
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-card width="425" color="transparent" class="elevation-0 mx-auto">
          <v-card-text>
            <h1 class="text--h2 headingLeft">
              <span class="secondary--text">  </span> <br />

              SKILLS
            </h1>
            <p class="text--body-1 ffHalyard mt-4 paragraphLeft">Vue.js: I specialize in building modern and responsive web applications using Vue.js, harnessing the power of its components and reactivity.</p>
        <p class="text--body-1 ffHalyard mt-4 paragraphLeft">HTML5 & CSS3: Proficient in crafting well-structured and visually appealing user interfaces, ensuring a seamless user experience.</p>
        <p class="text--body-1 ffHalyard mt-4 paragraphLeft">JavaScript: Leveraging the full potential of JavaScript to create dynamic and interactive features that enhance user engagement.</p>
        <p class="text--body-1 ffHalyard mt-4 paragraphLeft">Git: Experienced in version control to collaborate efficiently and maintain code integrity throughout the development process.</p>
        
           
          </v-card-text>
          <v-card-actions>
            <img src="../assets/google-icon.png" alt="" width="140" />
            <img
              src="../assets/apple-icon.png"
              alt=""
              width="140"
              class="ml-4"
            />
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-card color="transparent" width="100%" class="elevation-0">
        <img src="../assets/mobile-app-screens.png" alt="" class="element"
      :class="{ 'element-hovered': isHovered }"
      @mouseover="setHovered(true)"
      @mouseout="setHovered(false)" />
    </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
export default {
  data() {
    return {
      text: "Hello, World!",
      isTextVisible: false,
      isHovered: false,
      test:false

    };
  },
  methods: {
    setHovered(value) {
      this.isHovered = value;
    },
     handleIntersection(entries) {
      
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Call your function when the section becomes visible
          this.onSectionVisible();
        }
      });
    },
    onSectionVisible() {
      
      this.test=true
      // Your logic when the section becomes visible
    }
  },
  mounted(){

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5 // Adjust this value based on your needs
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);
    observer.observe(this.$refs.sectionElement);
  }
 
};
</script>
  
  <style scoped>
  .element {
  /* Styles for the element */
  transition: transform 1s ease-out;
}

.element-hovered {
  transform: scale(1.1);
  
}
.square {
  /* background-color: red; */
  animation-name: rotateAnimation;
  animation-duration: 5s;
  /* animation-timeline: squareTimeline; */
   animation-fill-mode: forwards; 
}
@keyframes rotateAnimation {
   0%   { left:0px; top:700px;}
  100% { left:0px; top:0px;}
}
/* @import url('https://fonts.googleapis.com/css2?family=Asap&display=swap'); */
/* *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Asap", sans-serif;
  }
  body{
    background: #42455a;
  }
  section{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  } */
/* section:nth-child(1){
    color: #e0ffff;
    }
  section:nth-child(2){
    color: #42455a;
    background: #e0ffff;
  } 
  section:nth-child(3){
    color: #e0ffff;
  }
  section:nth-child(4){
    color: #42455a;
    background: #e0ffff;
  }
  section .container{
    margin: 100px;
  }
  section h1{
    font-size: 3rem;
    margin: 20px;
  }
  section h2{
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
  }
  section .text-container{
     display: flex;
  }
  section .text-container .text-box{
    margin: 20px;
    padding: 20px;
    background: #00c2cb;
  }
  section .text-container .text-box h3{
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  
  @media (max-width: 900px){
    section h1{
      font-size: 2rem;
      text-align: center;
    }
    section .text-container{
      flex-direction: column;
    }
  } */


</style>
  