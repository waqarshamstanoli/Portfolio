<template>
    <v-card height="80vh" color="transparent" class="elevation-0">
      <v-row class="justify-space-around ">
        <v-col cols="12" lg="6" md="12" sm="12">
          <v-card width="500" color="transparent" class="elevation-0 ml-16 marginTop">
            <v-card-text>
              <h1 class="text--h2 headingLeft">
                

EDUCATION
              </h1>
              <p class="text--body-1 ffHalyard paragraphLeft">
                Degree: [Your Degree] - [University Name] ([Month/Year] - [Month/Year])

              </p>
              <p class="text--body-1 ffHalyard paragraphLeft">
                Relevant Courses: List any courses or certifications that enhance your skills as a Vue.js developer.
              </p>
             
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6" md="12" sm="12">
          <img src="../assets/worldmap.png" alt="" class="marginTop" />
          <img src="../assets/numbers.svg" alt="">
        </v-col>
      </v-row>
    </v-card>
</template>
  
  <script>
export default {
  data() {
    return {
      text: "Hello, World!",
      isTextVisible: false,
    };
  },
  methods: {
    // reveal() {
    //   var reveals = document.querySelectorAll(".headingLeft");

    //   for (var i = 0; i < reveals.length; i++) {
    //     var windowHeight = window.innerHeight;
    //     var elementTop = reveals[i].getBoundingClientRect().top;
    //     var elementVisible = 150;

    //     if (elementTop < windowHeight - elementVisible) {
    //       reveals[i].classList.add("active");
    //     } else {
    //       reveals[i].classList.remove("active");
    //     }
    //   }
    // },
  },
  // created() {
  //   window.addEventListener("scroll", this.reveal);
  // },
};
</script>
  
  <style>

</style>
  