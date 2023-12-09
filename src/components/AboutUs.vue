<template>
    <v-card height="80vh" color="transparent" class="elevation-0">
      <v-row class="justify-space-around ">
        <v-col cols="12" lg="6" md="12" sm="12">
          <v-card width="500" color="transparent" class="elevation-0 ml-16 marginTop">
            <v-card-text>
              <h1 class="text--h2 headingLeft">
                <span class="secondary--text"> MADE IN GERMANY. </span> <br />

                POPULAR ALL AROUND THE GLOBE.
              </h1>
              <p class="text--body-1 ffHalyard paragraphLeft">
                At BODYSHAKE® we aim for a positive impact on our way to a
                healthy society. For us, high-quality protein shakes are part of
                a balanced and fit lifestyle.
              </p>
              <p class="text--body-1 ffHalyard paragraphLeft">
                We see a bright future - healthy, sustainable and digital:
                That's why our shakes are freshly prepared, made just for you -
                always on a basis of high-class ingredients and sustainable
                production.
              </p>
              <p class="text--body-1 ffHalyard paragraphLeft">
                Our vision is to provide access to BODYSHAKE® in every situation
                - for athletes, workaholics and shopping queens. With you we can
                make the dream come true! Are you with us?
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6" md="12" sm="12">
          <img src="../assets/worldmap.png" alt="" class="marginTop" />
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
  