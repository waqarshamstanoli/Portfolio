<template>
  <v-container class="height">
    <v-row class="justify-space-around">
      <v-col cols="12" lg="12" md="12" sm="12">
        <v-card
          width="700"
          class="headingCenter elevation-0 mx-auto mt-16"
          color="transparent"
        >
          <h1 class="text--h2 text-center">
            <span class="text--h2 secondary--text">
              YOUR NEEDS. YOUR INGREDIENTS.
            </span>
            <br />
            YOUR RULES.
          </h1>
          <p class="text--body-1 mt-4 ffHalyard text-center">
            Stay in control - und create the shake that meets your needs. Just
            as you like it. Just as you need it. Keep an eye out for our
            machines. The rest's a cinch:
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" lg="9">
        <div class="d-flex mt-4 centerCards">
          <v-card
            rounded="lg"
            color="rgba(0,0,0,.1)"
            width="300"
            class="mx-auto elevation-0 pb-4 "
          >
            <v-card-text>
              <h4 class="text--h4 text-center">CHOOSE YOUR PROTEIN.</h4>
              <div class="d-flex mt-8">
                <div>
                  <img src="../assets/step1.png" alt="" width="160" />
                </div>
                <img
                  src="../assets/step1.png"
                  alt=""
                  width="160"
                  class="mt-16"
                  style="position: relative; right: 50px"
                />
              </div>
            </v-card-text>
          </v-card>
          <v-card
            rounded="lg"
            color="rgba(0,0,0,.1)"
            width="300"
            class="mx-auto elevation-0 pb-4"
          >
            <v-card-text>
              <h4 class="text--h4 text-center">CHOOSE YOUR PROTEIN AMOUNT.</h4>
              <img src="../assets/step2.png" alt="" class="mt-8" />

            </v-card-text>
          </v-card>

          <v-card
            rounded="lg"
            color="rgba(0,0,0,.1)"
            width="300"
            class="mx-auto elevation-0 pb-4"
          >
            <v-card-text>
              <h4 class="text--h4 text-center">CHOOSE YOUR FLAVOR.</h4>
              <img src="../assets/step3.png" alt="" class="mt-8" />
            </v-card-text>
          </v-card>

          <v-card
            rounded="lg"
            color="rgba(0,0,0,.1)"
            width="300"
            class="mx-auto elevation-0 pb-4"
          >
            <v-card-text>
              <h4 class="text--h4 text-center">CHOOSE YOUR INTENSITY.</h4>
              <img src="../assets/step4.png" alt="" class="mt-12 ml-8" />
            </v-card-text>
          </v-card>
        </div>
        <v-card-actions>
          <v-btn rounded class="mx-auto mt-12 gradientButton2 px-16 "> Pay and enjoy</v-btn>
        </v-card-actions>
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
    //   var reveals = document.querySelectorAll(".headingCenter");
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
  