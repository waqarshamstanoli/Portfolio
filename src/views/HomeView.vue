<template>
  <v-container fluid>
    <v-row class="justify-center" style="height: 100vh">
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-card
          width="100%"
          color="transparent"
          class="elevation-0 mx-auto marginTop"
        >
          <v-card-text>
            <h4 class="text--h4 white--text headingLeft text-center">
              Hi,
            </h4>
            <h1 class="text--h1 white--text headingLeft text-center">
               I am Waqar Shams
            </h1>
            <h4 class="text--h4 white--text mt-4 headingLeft text-center"> FRONT END DEVELOPER</h4>
            <h2 class="text--h3 white--text mt-8 text-uppercase text-center">
              Hello, I'm Waqar Shams, a passionate and dedicated Vue.js
              developer with a love for creating interactive and dynamic web
              applications. I thrive on turning ideas into reality through clean
              and efficient code. My journey in the world of web development has
              been exciting, and I'm always eager to take on new challenges.
            </h2>
          </v-card-text>
          <v-card-actions>
            <!-- <v-btn outlined rounded x-large class="px-16 py-8">Try Now</v-btn> -->
          </v-card-actions>
        </v-card>
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
      // comsumer: false,
      // translateX: 0,
      // translateY: 0,
      increment: 0,
      // scrolling: true,
      test: false,
    };
  },
  methods: {
    
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
    this.animate();

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
  margin-top: 150px;
}
.scroll-ease {
  transition: transform 0.03s ease-out;
}
.translate-element {
  transition: transform 3s ease-out;
  position: fixed;
  top: 100px;
}
.scroll-effect {
  transition: opacity 5s ease-in-out;
  opacity: 1;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 4s ease-out;
}
.slide-up-enter-from {
  transform: translateY(0px);
}
.slide-up-leave-to {
  transform: translateY(-300px);
}
</style>
