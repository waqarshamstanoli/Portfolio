<template>
  <div  class="">
    
<AboutUs></AboutUs>
<!-- <AboutUs></AboutUs> -->
    <flavors-component></flavors-component>
    <projects-comp></projects-comp>
    <SkillsComp ref="section" class="section"></SkillsComp>
    <WorkExperience></WorkExperience>
    <v-footer fixed color="transparent">
      <v-btn large icon class="mx-auto" @click="scrollToContent"
        ><v-icon>mdi-chevron-down</v-icon></v-btn
      >
    </v-footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AboutUs from "@/components/AboutUs.vue"
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
    // AboutUs,
    AboutUs
    
  },
  data() {
    return {
      scrollPosition: 0,
      increment: 0,
      test: false,
      texts: ["Muhammad waqar", " Developer"],
    currentTextIndex: 0,
    typedText: '',
    index: 0,
    animationKey: 0, 
   
    };
  },
  methods: {
    playClickSound() {
      const audio = new Audio(require('../assets/sounds/click.wav'));
      audio.play();
  },
    restartAnimation() {
      this.animationKey += 1;
    },
    
    typeText() {
      if (this.index <= this.texts[this.currentTextIndex].length) {
        this.typedText = this.texts[this.currentTextIndex].slice(0, this.index);
        this.index++;
        setTimeout(this.typeText, 200); // Typing speed (adjust as needed)
      } else {
        // Wait for a second before clearing the text
        setTimeout(() => {
          this.clearText();
        }, 1500);
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
      // console.log(
      //   window.innerHeight + window.scrollY >= document.body.offsetHeight
      // );
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
      
      if (this.scrollPosition == 0) {
        this.increment = 750;
        this.scrollTo = this.scrollPosition + this.increment;
      } else if (this.scrollPosition == 750) {
        this.increment = 1100;
        this.scrollTo = this.scrollPosition + this.increment;
      } else if (this.scrollPosition == 1850) {
        this.increment = 1000;
        this.scrollTo = this.scrollPosition + this.increment;
      }
      else {
        // console.log('chal nikal')
      }
     
      
      this.pageScroll(this.scrollTo);
      this.getScrollValue = this.scrollTo
      
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
          this.onSectionVisible();
        }
      });
    },
    onSectionVisible() {
      this.test = true;
     
    },
  },

  mounted() {
    this.typeText();
    this.animate();
    setInterval(this.restartAnimation, 25000);
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);
    observer.observe(this.$refs.sectionElement);
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
  animation: bounce 6s infinite;
  margin-top: 200px;
  position: relative;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #0CB9DF;
}
@keyframes bounce {
  0%{
    transform: translateY(250px);
  } 
  50% {
    transform: translateY(320px);
  }
  100% {
    transform: translateY(250px);
  }
}
.bouncing-element2 {
  animation: scale 3s infinite;
  margin-top: 400px;
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

.subscribe-button {
      background: linear-gradient(to right, #0ea5ea,  #0ea5ea, #0bd1d1);
      font-size: 16px;
      font-weight: 700 !important;
    
}


</style>
