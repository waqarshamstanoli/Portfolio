<template>
  <v-container class="md-px-16" style="padding-top: 200px">
    <v-row class="justify-center" :class="{ square: test }" ref="sectionElement">
      <v-col cols="12" lg="12" md="12" sm="12">
        <v-card width="80%" color="transparent" class="elevation-0 mx-auto">
          <v-card-text>
            <h1 class="gray-text text--h2 text-center">SKILLS</h1>
          </v-card-text>
        </v-card>
      </v-col>
      

      <v-col cols="12" lg="2" md="4" sm="6" class="paragraphLeft" v-for="skill in skills" :key="skill">
        <v-card outlined width="200" class="mx-auto borderRadius py-16">
          <div class="text-center">
            <img :src="skill.img" width="50" class="" alt="" />
            <h3 class="text--h3 mt-4">{{ skill.skillName }}</h3>
            <h2 class="text--h3 mt-4">{{ skill.skillLevel }}</h2>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
     
      test: false,
      lightPurple: false,
      skills: [
        { skillName: "Vue js", skillLevel: "99%", img:require('../assets/skills/vue.png')},
        { skillName: "React", skillLevel: "", img:require('../assets/skills/react.png') },
        { skillName: "Angular", skillLevel: "", img:require('../assets/skills/angular.png') },
        { skillName: "Vuetify", skillLevel: "99%", img:require('../assets/skills/vuetify.png') },
        { skillName: "Quasar", skillLevel: "99%", img:require('../assets/skills/quasar.png') },
        { skillName: "Nuxt", skillLevel: "99%", img:require('../assets/skills/nuxt.png') },
        { skillName: "Github", skillLevel: "99%", img:require('../assets/skills/github.png') },
        { skillName: "Material UI", skillLevel: "99%", img:require('../assets/skills/material.png') },
        { skillName: "Tailwind CSS", skillLevel: "99%", img:require('../assets/skills/tailwind.png') },
        { skillName: "Bootstrap", skillLevel: "99%", img:require('../assets/skills/bootstrap.png') },
        { skillName: "CSS", skillLevel: "99%", img:require('../assets/skills/css.png') },
        { skillName: "HTML", skillLevel: "99%", img:require('../assets/skills/html.png') },
        
        { skillName: "Photoshope", skillLevel: "", img:require('../assets/skills/photoshope.png') },
        { skillName: "Xd", skillLevel: "", img:require('../assets/skills/xd.png') },
        { skillName: "Figma", skillLevel: "", img:require('../assets/skills/figma.png') },
        { skillName: "Ant Design", skillLevel: "", img:require('../assets/skills/antdesign.png') },
        
      ],
    };
  },
  methods: {
   
    // handleIntersection(entries) {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       this.onSectionVisible();
    //     }
    //   });
    // },
    // onSectionVisible() {
    //   this.test = true;
    // },
  },
  mounted() {
    // const options = {
    //   root: null,
    //   rootMargin: "0px",
    //   threshold: 0.5,
    // };

    // const observer = new IntersectionObserver(this.handleIntersection, options);
    // observer.observe(this.$refs.sectionElement);
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
.borderRadius {
  border-radius: 40px;
}
</style>
