<template>
  <v-container fluid style="height: 80vh; padding-top: 200px">
    <v-row class="justify-center" :class="{ square: test }" ref="sectionElement">
      <!-- <v-col cols="12" lg="4" md="12" sm="12">
        <v-card width="80%" color="transparent" class="elevation-0 mx-auto">
          <v-card-text>
            <h1 class="text--h2 white--text headingLeft">
              <span class="secondary--text"> </span> <br />

              SKILLS
            </h1>
            <h2 class="white--text mt-4">
              Vue.js:
            </h2>
            <p class="text--body-1 white--text ffHalyard mt-4 paragraphLeft">
              I specialize in building modern and responsive web
              applications using Vue.js, harnessing the power of its components
              and reactivity.
            </p>
            <h2 class="white--text mt-4">
              HTML5 & CSS3:
            </h2>
            <p class="text--body-1 white--text ffHalyard mt-4 paragraphLeft">
               Proficient in crafting well-structured and visually
              appealing user interfaces, ensuring a seamless user experience.
            </p>
            <h2 class="white--text mt-4">
              JavaScript:
            </h2>
            <p class="text--body-1 white--text ffHalyard mt-4 paragraphLeft">
               Leveraging the full potential of JavaScript to create
              dynamic and interactive features that enhance user engagement.
            </p>
            <h2 class="white--text mt-4">
              Git:
            </h2>
            <p class="text--body-1 white--text ffHalyard mt-4 paragraphLeft">
              Experienced in version control to collaborate efficiently and
              maintain code integrity throughout the development process.
            </p>
          </v-card-text>
          <v-card-actions>
          
          </v-card-actions>
        </v-card>
      </v-col> -->
      <v-col cols="12" lg="4" md="12" sm="12" class="px-16 paragraphLeft">
        <div class="d-flex">
          <v-hover v-slot="{ hover }">
            <div class="text-center">
              <img src="../assets/skills/vue.png" width="70%" alt="" class="image" :class="{ scaled: hover }" />
              <h2 class="white--text text--h3 mt-4">Vue.js:</h2>
            </div>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <div class="text-center">
              <img src="../assets/skills/vuetify.png" width="70%" alt="" class="image" :class="{ scaled: hover }" />
              <h2 class="white--text text--h3 mt-4">Vuetify:</h2>
            </div>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <div class="text-center">
              <img src="../assets/skills/nuxt.png" width="70%" alt="" class="image" :class="{ scaled: hover }" />
              <h2 class="white--text text--h3 mt-4">Nuxt:</h2>
            </div>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <div class="text-center">
              <img src="../assets/skills/react.png" width="70%" alt="" class="image" :class="{ scaled: hover }" />
              <h2 class="white--text text--h3 mt-4">React:</h2>
            </div>
          </v-hover>
        </div>

        <div class="d-flex mt-8">
          <v-hover v-slot="{ hover }">
            <div class="text-center">
              <img src="../assets/skills/photoshope.png" width="70%" alt="" class="image" :class="{ scaled: hover }"/>
              <h2 class="white--text text--h3 mt-4">Photoshope:</h2>
            </div>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <div class="text-center">
              <img src="../assets/skills/xd.png" width="70%" alt="" class="image" :class="{ scaled: hover }" />
              <h2 class="white--text text--h3 mt-4">Xd:</h2>
            </div>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <div class="text-center">
              <img src="../assets/skills/tailwind.png" width="70%" alt="" class="image" :class="{ scaled: hover }"/>
              <h2 class="white--text text--h3 mt-4">Tailwind:</h2>
            </div>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <div class="text-center">
              <img src="../assets/skills/figma.png" width="70%" alt="" class="image" :class="{ scaled: hover }" />
              <h2 class="white--text text--h3 mt-4">Vue.js:</h2>
            </div>
          </v-hover>
        </div>

        <!-- <img src="../assets/skills/photoshope.png" width="70%" alt="" class="ml-1"/>
            <img src="../assets/skills/xd.png" width="70%" alt="" class="ml-12"/>
            <img src="../assets/skills/tailwind.png" width="70%" alt="" class="ml-12"/>
            <img src="../assets/skills/figma.png" width="70%" alt="" class="ml-12"/> -->

        <v-row> </v-row>
      </v-col>
      <v-col cols="12" lg="4" md="12" sm="12" class="px-16 paragraphLeft">
        <div class="d-flex">
          <div class="text-center">
            <img src="../assets/skills/angular.png" width="70%" alt="" class="" />
            <h2 class="white--text text--h3 mt-4">Angular:</h2>
          </div>
          <div class="text-center">
            <img src="../assets/skills/bootstrap.png" width="70%" alt="" class="" />
            <h2 class="white--text text--h3 mt-4">Bootstrap:</h2>
          </div>
          <div class="text-center">
            <img src="../assets/skills/css.png" width="70%" alt="" class="" />
            <h2 class="white--text text--h3 mt-4">CSS:</h2>
          </div>
          <div class="text-center">
            <img src="../assets/skills/html.png" width="70%" alt="" class="" />
            <h2 class="white--text text--h3 mt-4">HTML:</h2>
          </div>
        </div>

        <div class="d-flex mt-8">
          <v-hover v-slot="{ hover }">
            <div class="text-center">
              <img src="../assets/skills/quasar.png" width="70%" alt="" class="image" :class="{ scaled: hover }" />
              <h2 class="white--text text--h3 mt-4">Quasar:</h2>
            </div>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <div class="text-center">
              <img src="../assets/skills/github.png" width="70%" alt="" class="image" :class="{ scaled: hover }" />
              <h2 class="white--text text--h3 mt-4">Github:</h2>
            </div>
          </v-hover>
          <div class="text-center">
            <img src="../assets/skills/antdesign.png" width="70%" alt="" class="" />
            <h2 class="white--text text--h3 mt-4">Ant Design:</h2>
          </div>
          <div class="text-center">
            <img src="../assets/skills/material.png" width="70%" alt="" class="" />
            <h2 class="white--text text--h3 mt-4">Material UI:</h2>
          </div>
        </div>

        <v-row> </v-row>
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
      lightPurple: false,
    };
  },
  methods: {
    setHovered(value) {
      this.isHovered = value;
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
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
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
.image {
  transition: transform 1.5s ease-in-out;
}
.scaled {
  transform: scale(3);
}
</style>
