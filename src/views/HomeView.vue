<template>
  <div >
    <AboutUs></AboutUs>
    <SkillsComp ref="section" class="section"></SkillsComp>
    <WorkExperience></WorkExperience>
    <projects-comp></projects-comp>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AboutUs from "@/components/AboutUs.vue";
import ProjectsComp from "@/components/ProjectsComp.vue";
import SkillsComp from "@/components/SkillsComp.vue";
import WorkExperience from "@/components/WorkExperience.vue";

export default {
  components: {
    ProjectsComp,
    SkillsComp,
    WorkExperience,
    AboutUs,
  },
  data() {
    return {
      scrollPosition: 0,
      increment: 0,
      test: false,
      texts: ["Muhammad waqar", " Developer"],
      currentTextIndex: 0,
      typedText: "",
      index: 0,
    };
  },
  methods: {
    playClickSound() {
      const audio = new Audio(require("../assets/sounds/click.wav"));
      audio.play();
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
          this.currentTextIndex =
            (this.currentTextIndex + 1) % this.texts.length;
          this.typeText();
        }, 500); // Wait for 0.5 seconds before typing the next text
      }
    },

    movetoScrollPosition(value) {
      this.scrollPosition = value;
      window.scroll({
        top: value,
        left: 0,
        behavior: "smooth",
      });
    },
  },

  mounted() {
    this.typeText();
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
<style></style>
