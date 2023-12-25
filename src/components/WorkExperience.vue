<template>
  <div class="py-16">
    <v-row class="justify-space-around">
     
      <v-col cols="12" lg="12" md="12" sm="12">
        <v-card width="100%" color="transparent" class="elevation-0 mx-auto mt-16">
          <v-card-text>
            <h2 class="header--text text-center text--h2 headingRight">WORK EXPERIENCE</h2>
           
          </v-card-text>
          
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-card outlined width="80%" class="mx-auto mt-8 px-4 py-4 pb-8 px-md-16 borderRadius py-md-8 paragraphLeft">
          <div class="text-center">
            <v-card-title class="black--text justify-center pb-1">Infini8AI</v-card-title>
            <h5 class="black--text text--h5">Senior Front End Developer</h5>
            <h4 class="black--text text--h4">Oct 2021 - Present</h4>

            <p class="text-body-1 gray--text font-weight-regular mt-4">Description: Outline your responsibilities, achievements, and notable projects during your time at the company. Mention any collaborations, advancements, or innovations you contributed to.</p>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-card outlined width="80%" class="mx-auto mt-8 px-4 py-4 pb-8 px-md-16 borderRadius py-md-8 paragraphLeft">
          <div class="text-center">
            <v-card-title class="black--text justify-center pb-1">Financials Unlimited</v-card-title>
            <h5 class="black--text text--h5">Vue js Developer</h5>
            <h4 class="black--text text--h4">Nov 2019 - Sep 2021</h4>

            <p class="text-body-1 gray--text font-weight-regular mt-4">Description: Outline your responsibilities, achievements, and notable projects during your time at the company. Mention any collaborations, advancements, or innovations you contributed to.</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Hello, World!",
      isTextVisible: false,
      dark: true,
      darkPurple: false,
      lightPurple: false,
      scaleDark: false,
    };
  },
  methods: {
    activeDark() {
      this.lightPurple = false;
      this.darkPurple = false;
      this.dark = true;
      // this.scaleDark = true;
    },
    activeLightPurple() {
      this.lightPurple = true;
      this.darkPurple = false;
      this.dark = false;
      // this.scaleLightPurple = true;
    },
    activeDarkPurple() {
      this.darkPurple = true;
      this.dark = false;
      this.lightPurple = false;
      // this.scaleDarkPurple = true;
    },
    toggleScale() {},
  },
};
</script>

<style scoped>
.cupImage {
  margin-top: 170px;
  transition: transform 1.9s ease;
}
.scaled {
  transform: scale(1.5); /* Increase the scale value as desired */
  transition: transform 1.9s ease; /* Add a smooth transition effect */
}
/* .dark{
  transform: scale(5.5);
} */
.glass {
  width: 200px;
  height: 400px;
}
@media only screen and(max-width: 400) {
  .glass {
    width: 100px;
    height: 200px;
  }
}
.borderRadius {
  border-radius: 40px;
}
</style>
