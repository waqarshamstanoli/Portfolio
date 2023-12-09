<template>
  <v-container class="">
    <v-row class="justify-space-around height">
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-card width="410" color="transparent" class="elevation-0 ml-auto mr-8">
          <v-img src="../assets/machine.png" alt="" width="410" >
            <img src="../assets/BS_Shake-Erstellung_Langsam_Einmal.gif" alt="" class="gifAnimation">
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-card
          width="425"
          color="transparent"
          class="elevation-0 ml-8 marginTop"
        >
          <v-card-text>
            <h1 class="text--h2 headingRight">
              <span class="secondary--text "> SAVE REAL MONEY! </span>
              YOUR BODYSHAKE MEMBERSHIP.
            </h1>
          </v-card-text>
          <v-card-actions>
            <v-btn outlined rounded x-large class="px-16 py-8 text-uppercase"
              >About the app</v-btn
            >
          </v-card-actions>
        </v-card>
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
    };
  },
  methods: {
    // reveal() {
    //   var reveals = document.querySelectorAll(".headingRight");

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
  created() {
    window.addEventListener("scroll", this.reveal);
  },
};
</script>
  
  <style>

</style>
  