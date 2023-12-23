<template>
  <v-container  class="px-lg-16">
    <v-row class="justify-center" style="height: 100vh">
      <v-col cols="12" lg="5" md="12" sm="12" class="">
        <v-card
          width="80%"
          color="transparent"
          class="elevation-0 mx-auto marginTop"
        >
          <v-card-text>
            
            <h4 class="text-subtitle-2 font-weight-bold gray--text headingLeft">
              Hello Everyone!
            </h4>
            <h2 class="text--h2 secondary--text  headingLeft mt-4">
              I'm <span class="header-text"> {{ typedText }} </span>
            </h2>
            <!-- <h4 class="text--h4 primary--text mt-4 headingLeft text-center"> FRONT END DEVELOPER</h4> -->
            <p class="text-body-1 gray--text font-weight-regular mt-8">
              Hello, I'm Waqar Shams, a passionate and dedicated Vue.js
              developer with a love for creating interactive and dynamic web
              applications. I thrive on turning ideas into reality through clean
              and efficient code. My journey in the world of web development has
              been exciting, and I'm always eager to take on new challenges.
            </p>
          </v-card-text>
          <!-- <v-card-actions class="red"> -->
            <!--  -->
            <div class="d-flex" style="border: 2px solid #56D3DB; border-radius: 10px; background-color: #C8D5E8; padding: 12px 12px 4px 12px; width:420px">
            <v-text-field outlined dense label="Type Your Email Address" >   </v-text-field>
            <v-btn color="primary"  class="py-4 ml-12 text-capitalize">Subscribe</v-btn>
          </div>
          <!-- </v-card-actions> -->
        </v-card>
      </v-col>
      <v-col cols="12" lg="5" md="12" sm="12">
        <div class="d-flex">
          <div :key="animationKey" class="animated-div">
        <img src="../assets/pattern-1.svg" alt="" width="20">
      </div>
        <div class="bouncing-element">
      </div>
        <div class="text-center">
        <img src="../assets/banner.png" alt="" class="mt-16">
      </div>
        
        <div :key="animationKey" class="cross-2">
        <img src="../assets/pattern-2.svg" alt="" width="20"></div>
        
      <div class="bouncing-element2">
      </div> 
      </div>
      </v-col>
     
    </v-row>

    <flavors-component></flavors-component>
    <projects-comp></projects-comp>
    <SkillsComp ref="section" class="section"></SkillsComp>
    <WorkExperience></WorkExperience>
    <education-comp ref="myEl"></education-comp>
    <v-footer fixed color="transparent">
      <v-btn large icon class="mx-auto" @click="scrollToContent"
        ><v-icon>mdi-chevron-down</v-icon></v-btn
      >
    </v-footer>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

import FlavorsComponent from "@/components/FlavorsComponent.vue";
import ProjectsComp from "@/components/ProjectsComp.vue";
import SkillsComp from "@/components/SkillsComp.vue";
import WorkExperience from "@/components/WorkExperience.vue";
import EducationComp from "@/components/EducationComp.vue";
export default {
  components: {
    FlavorsComponent,
    ProjectsComp,
    SkillsComp,
    WorkExperience,
    EducationComp,
  },
  data() {
    return {
      scrollPosition: 0,
      increment: 0,
      test: false,
      texts: [" Waqar Shams", " DEVELOPER", " Designer"],
    currentTextIndex: 0,
    typedText: '',
    index: 0,
    animationKey: 0, 
    // dotTop: 300,
    //         dotLeft: 100,
    //         positions: [
    //             { top: 350, left: 500 },
    //             { top: 600, left: 300 },
    //             { top: 700, left: 100 },
    //         ],
    //         currentPositionIndex: 0,
    //         animationDuration: 2000,
    };
  },
  methods: {
    restartAnimation() {
      this.animationKey += 1;
    },
    // moveDotTo(positionIndex) {
    //             this.dotTop = this.positions[positionIndex].top;
    //             this.dotLeft = this.positions[positionIndex].left;
    //         },
    //         animateDot() {
    //             setInterval(() => {
    //                 this.moveDotTo(this.currentPositionIndex);
    //                 this.currentPositionIndex = (this.currentPositionIndex + 1) % this.positions.length;
    //             }, this.animationDuration);
    //         },
    typeText() {
      if (this.index <= this.texts[this.currentTextIndex].length) {
        this.typedText = this.texts[this.currentTextIndex].slice(0, this.index);
        this.index++;
        setTimeout(this.typeText, 150); // Typing speed (adjust as needed)
      } else {
        // Wait for a second before clearing the text
        setTimeout(() => {
          this.clearText();
        }, 1000);
      }
    },
    clearText() {
      if (this.index >= 0) {
        this.typedText = this.texts[this.currentTextIndex].slice(0, this.index);
        this.index--;
        setTimeout(this.clearText, 100); // Deleting speed (adjust as needed)
      } else {
        // Reset for the next text
        setTimeout(() => {
          this.index = 0;
          this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
          this.typeText();
        }, 500); // Wait for 0.5 seconds before typing the next text
      }
    },
    
    pageScroll() {
      console.log(
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      );
      let intervalId = window.setInterval(() => {
        if (window.scrollY >= this.scrollTo) {
          clearInterval(intervalId);
          this.scrollPosition = this.scrollTo;
        } else {
          if (window.innerHeight + window.scrollY >= document.body.offsetHeight)
            window.scrollTo(0, 0);
          else window.scrollBy(0, 3);
        }
      }, 5);
    },

    scrollToContent() {
      console.log("fdfasf");
      if (this.scrollPosition == 0) {
        this.increment = 1150;
        this.scrollTo = this.scrollPosition + this.increment;
      } else if (this.scrollPosition == 1150) {
        this.increment = 800;
        this.scrollTo = this.scrollPosition + this.increment;
      } else if (this.scrollPosition == 1950) {
        this.increment = 800;
        this.scrollTo = this.scrollPosition + this.increment;
      } else if (this.scrollPosition == 2750) {
        this.increment = 800;
        this.scrollTo = this.scrollPosition + this.increment;
      } else if (this.scrollPosition == 3550) {
        this.increment = 800;
        this.scrollTo = this.scrollPosition + this.increment;
      } else if (this.scrollPosition == 4350) {
        this.increment = 950;
        this.scrollTo = this.scrollPosition + this.increment;
      } else if (this.scrollPosition == 5150) {
        alert("5150");
        
      }
      
      this.pageScroll(this.scrollTo);
      
    },
    movetoScrollPosition(value) {
      this.scrollPosition = value;
      window.scroll({
        top: value,
        left: 0,
        behavior: "smooth",
      });
    },
    animate() {
      var reveals = document.querySelectorAll(".headingLeft");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    },
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Call your function when the section becomes visible
          this.onSectionVisible();
        }
      });
    },
    onSectionVisible() {
      alert("fdsfdsfdsf");
      this.test = true;
      console.log(this.test);
      // Your logic wthishen the section becomes visible
    },
  },

  mounted() {
    this.typeText();
    this.animate();
    // this.animateDot();
    setInterval(this.restartAnimation, 25000);
    // this.restartAnimation();
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this value based on your needs
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);
    observer.observe(this.$refs.sectionElement);
  },
  created() {
    // window.addEventListener("scroll",  this.handleScroll)
  },
  watch: {
    getScrollValue: {
      deep: true,
      handler(newColor) {
        this.movetoScrollPosition(newColor);
      },
    },
  },
  computed: {
    ...mapGetters(["getScrollValue"]),
  },
};
</script>
<style>
.marginTop {
  margin-top: 200px;
}
/* .scroll-ease {
  transition: transform 0.03s ease-out;
} */
/* .translate-element {
  transition: transform 3s ease-out;
  position: fixed;
  top: 100px;
} */
/* .scroll-effect {
  transition: opacity 5s ease-in-out;
  opacity: 1;
} */

/* .slide-up-enter-active,
.slide-up-leave-active {
  transition: all 4s ease-out;
} */
/* .slide-up-enter-from {
  transform: translateY(0px);
} */
/* .slide-up-leave-to {
  transform: translateY(-300px);
} */
/* .cross {
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 50%;
    position: relative;
    transition: top 10.5s ease, left 10.5s ease; 
} */

.animated-div {

  position: relative;
  animation-name: cross1;
  animation-duration: 25s;
}
.cross-2 {
position: relative;
animation-name: cross2;
animation-duration: 25s;
}

@keyframes cross1 {
  0%   {  left: 10px; top: 200px; }
  25%  {  left: 150px; top: 190px; }
  50%  {  left: 250px; top: 250px; }
  75%  {  left: 0px; top: 200px; }
  100% {  left: 0px; top: 0px; }
}
@keyframes cross2 {
  0%   {  left: 200px; top: 200px; }
  25%  {  left: 150px; top: 300px; }
  50%  {  left: 250px; top: 250px; }
  75%  {  left: 0px; top: 200px; }
  100% {  left: 0px; top: 0px; }
}
.bouncing-element {
  animation: bounce 5s infinite;
  margin-top: 200px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #0CB9DF;
}
@keyframes bounce {
  0%{
    transform: translateY(0px);
  } 
  50% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0px);
  }
}
.bouncing-element2 {
  animation: scale 3s infinite;
  margin-top: 200px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #B2E8F4;
}
@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.8);
  }
  100% {
    transform: scale(1);
  }
}




</style>
