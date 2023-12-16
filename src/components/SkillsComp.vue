<template>
  <v-container fluid>
    <v-row
      class="justify-space-around containerHeight"
      :class="{ square: test }"
      ref="sectionElement"
    >
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-card width="70%" color="transparent" class="elevation-0 mx-auto">
          <v-card-text>
            <h1 class="text--h2 headingLeft">
              <span class="secondary--text"> </span> <br />

              SKILLS
            </h1>
            <h2 class="black--text mt-4">
              Vue.js:
            </h2>
            <p class="text--body-1 ffHalyard mt-4 paragraphLeft">
              I specialize in building modern and responsive web
              applications using Vue.js, harnessing the power of its components
              and reactivity.
            </p>
            <h2 class="black--text mt-4">
              HTML5 & CSS3:
            </h2>
            <p class="text--body-1 ffHalyard mt-4 paragraphLeft">
               Proficient in crafting well-structured and visually
              appealing user interfaces, ensuring a seamless user experience.
            </p>
            <h2 class="black--text mt-4">
              JavaScript:
            </h2>
            <p class="text--body-1 ffHalyard mt-4 paragraphLeft">
               Leveraging the full potential of JavaScript to create
              dynamic and interactive features that enhance user engagement.
            </p>
            <h2 class="black--text mt-4">
              Git:
            </h2>
            <p class="text--body-1 ffHalyard mt-4 paragraphLeft">
              Experienced in version control to collaborate efficiently and
              maintain code integrity throughout the development process.
            </p>
          </v-card-text>
          <v-card-actions>
            <!-- <img src="../assets/google-icon.png" alt="" width="140" /> -->
            <!-- <img
              src="../assets/apple-icon.png"
              alt=""
              width="140"
              class="ml-4"
            /> -->
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-row>
          <v-col cols="12" lg="3" md="3" sm="3">
            <v-avatar color="red" size="200">
            <img src="../assets/Halyard/1.png"  alt="" />
          </v-avatar>
          </v-col>
          <v-col cols="12" lg="3" md="3" sm="3">
            <img src="../assets/Halyard/2.png" width="70%" alt="" />
          </v-col>
          <v-col cols="12" lg="3" md="3" sm="3">
            <img src="../assets/Halyard/3.png" width="70%" alt="" />
          </v-col>
          <v-col cols="12" lg="3" md="3" sm="3">
            <img src="../assets/Halyard/4.png" width="70%" alt="" />
          </v-col>
          <v-col cols="12" lg="3" md="3" sm="3">
            <img src="../assets/Halyard/5.png" width="70%" alt="" />
          </v-col>
          <v-col cols="12" lg="3" md="3" sm="3">
            <img src="../assets/Halyard/6.png" width="70%" class="" alt="" />
          </v-col>
          <!-- <v-col cols="12" lg="3" md="3" sm="3">
            <img src="../assets/Halyard/angular.png" width="100%" alt="" />
          </v-col>
          <v-col cols="12" lg="3" md="3" sm="3">
            <img src="../assets/Halyard/react.png" width="50%" alt="" />
          </v-col>
          <v-col cols="12" lg="3" md="3" sm="3">
            <img src="../assets/Halyard/photoshop.png" width="50%" alt="" />
          </v-col>
          <v-col cols="12" lg="3" md="3" sm="3">
            <img src="../assets/Halyard/figma.png" width="50%" alt="" />
          </v-col> -->
        </v-row>
        <!-- <v-card color="transparent" width="100%" class="elevation-0">
        <img src="../assets/mobile-app-screens.png" alt="" class="element"
      :class="{ 'element-hovered': isHovered }"
      @mouseover="setHovered(true)"
      @mouseout="setHovered(false)" />
    </v-card> -->
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
      test: false,
    };
  },
  methods: {
    setHovered(value) {
      this.isHovered = value;
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
      this.test = true;
      // Your logic when the section becomes visible
    },
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this value based on your needs
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);
    observer.observe(this.$refs.sectionElement);
  },
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
  0% {
    left: 0px;
    top: 700px;
  }
  100% {
    left: 0px;
    top: 0px;
  }
}

</style>
  