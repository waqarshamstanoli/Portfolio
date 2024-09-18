<template>
 <v-container style="min-height: 100vh">
  <v-row class="d-flex align-center" style="min-height: 100vh">
    <v-col cols="12" lg="8" md="12" sm="12">
      <v-card color="transparent" class="elevation-0 marginTop">
        <v-card-text>
          <h1 class="hero_text black--text">
            Transforming Ideas into
          </h1>
          <h1 class="header-text hero_text mt-4">{{ typedText }}</h1>
          <p class="text-body-1 gray--text font-weight-regular mt-8">
            Madinatech Innovations is your partner in delivering cutting-edge software solutions that drive success.
             From web and mobile development to digital strategy, we bring your 
             vision to life with precision and innovation.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-footer fixed color="transparent">
    <v-btn large icon class="mx-auto" @click="scrollToContent"
      ><v-icon>mdi-chevron-down</v-icon
    ></v-btn>
  </v-footer>
</v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      scrollPosition: 0,
      increment: 0,
      test: false,
      texts: ["Digital Solutions."],
      currentTextIndex: 0,
      typedText: "",
      index: 0,
      animationKey: 0,
    };
  },
  methods: {
    playClickSound() {
      const audio = new Audio(require("../assets/sounds/click.wav"));
      audio.play();
    },
    restartAnimation() {
      this.animationKey += 1;
    },

    typeText() {
      if (this.index <= this.texts[this.currentTextIndex].length) {
        this.typedText = this.texts[this.currentTextIndex].slice(0, this.index);
        this.index++;
        setTimeout(this.typeText, 100);
      } else {
        setTimeout(() => {
          this.clearText();
        }, 1500);
      }
    },
    clearText() {
      if (this.index >= 0) {
        this.typedText = this.texts[this.currentTextIndex].slice(0, this.index);
        this.index--;
        setTimeout(this.clearText, 100);
      } else {
        setTimeout(() => {
          this.index = 0;
          this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
          this.typeText();
        }, 500);
      }
    },

    pageScroll() {
      let intervalId = window.setInterval(() => {
        if (window.scrollY >= this.scrollTo) {
          clearInterval(intervalId);
          this.scrollPosition = this.scrollTo;
        } else {
          if (window.innerHeight + window.scrollY >= document.body.offsetHeight) window.scrollTo(0, 0);
          else window.scrollBy(0, 3);
        }
      }, 5);
    },

    scrollToContent() {
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
  
  computed: {
    ...mapGetters(["getScrollValue"]),
  },
};
</script>
<style>

</style>
