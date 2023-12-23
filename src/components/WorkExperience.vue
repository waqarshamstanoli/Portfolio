<template>
  <div class=" py-16">
    <v-row class="justify-space-around">
      <!-- <v-col cols="12" lg="6" md="12" sm="12">
        <v-card color="transparent" width="100%" class="elevation-0">
          <div class="d-flex flex-wrap ml-16">
            <img
              src="../assets/cup-dark2.png"
              class="cupImage glass dark"
              alt=""
              :class="{ scaled: dark }"
            />
            <img
              src="../assets/cup-light-purple2.png"
              alt=""
              class="cupImage glass ml-12"
              :class="{ scaled: lightPurple }"
            />
            <img
              src="../assets/cup-dark-purple2.png"
              alt=""
              class="cupImage glass ml-12"
              :class="{ scaled: darkPurple }"
            />
          </div>
        </v-card>
      </v-col> -->
      <v-col cols="12" lg="12" md="12" sm="12">
        <v-card
          width="100%"
          color="transparent"
          class="elevation-0 mx-auto mt-16"
        >
          <v-card-text>
            <h1 class="primary--text text-center text--h2 headingRight">WORK EXPERIENCE</h1>
            <!-- <h2 class="primary--text mt-4">
              Infini8AI - Senior Front End Developer (Oct 2021 - Present)
            </h2>
            <h2 class="text--h3 primary--text mt-2 paragraphRight">
              Description: Outline your responsibilities, achievements, and
              notable projects during your time at the company. Mention any
              collaborations, advancements, or innovations you contributed to.
              <br />
            </h2>
            <h2 class="primary--text mt-12">
              Financials Unlimited - Vue JS Developer (Nov 2019 - Sep 2021)
            </h2>
            <h2 class="primary--text text--h3 ffHalyard mt-2 paragraphRight">
              Description: Highlight your role, accomplishments, and the skills
              you gained while working at this company. Discuss how you added
              value and contributed to the team's success.
            </h2> -->
          </v-card-text>
          <!-- <v-card-actions>
            <img
              src="../assets/2_maintrigger-dark-inactive.png"
              alt=""
              width="100"
              class="cursor-pointer"
              v-if="!dark"
              @click="activeDark"
            />
            <img
              src="../assets/1_maintrigger-dark-active.png"
              alt=""
              width="100"
              v-if="dark"
            />
            <img
              src="../assets/4_maintrigger-lightpurple-inactiv.png"
              alt=""
              width="100"
              class="mx-8 cursor-pointer"
              v-if="!lightPurple"
              @click="activeLightPurple"
            />
            <img
              src="../assets/3_maintrigger-lightpurple-active.png"
              alt=""
              class="mx-8"
              width="100"
              v-if="lightPurple"
            />
            <img
              src="../assets/6_maintrigger-darkpurple-inactive.png"
              alt=""
              width="100"
              class="cursor-pointer"
              v-if="!darkPurple"
              @click="activeDarkPurple"
            />

            <img
              src="../assets/5_maintrigger-darkpurple-active.png"
              alt=""
              width="100"
              v-if="darkPurple"
            />
          </v-card-actions> -->
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-card outlined width="80%" class="mx-auto mt-8 px-4 py-4 pb-8 px-md-16 borderRadius py-md-16 paragraphLeft">
  <div class="text-center ">
  <!-- <img src="../assets/skills/vue.png" width="50" class="" alt=""> -->
  <h2 class="black--text text--h3 mt-4">Infini8AI - Senior Front End Developer (Oct 2021 - Present)</h2>
  <h2 class="text--h3 mt-4"> Description: Outline your responsibilities, achievements, and
              notable projects during your time at the company. Mention any
              collaborations, advancements, or innovations you contributed to.</h2>
</div>
</v-card>
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-card outlined width="80%" class="mx-auto mt-8  px-4 py-4 pb-8 px-md-16 borderRadius py-md-16 paragraphRight">
  <div class="text-center ">
  <!-- <img src="../assets/skills/vue.png" width="50" class="" alt=""> -->
  <h2 class="black--text text--h3 mt-4">Infini8AI - Senior Front End Developer (Oct 2021 - Present)</h2>
  <h2 class="text--h3 mt-4"> Description: Outline your responsibilities, achievements, and
              notable projects during your time at the company. Mention any
              collaborations, advancements, or innovations you contributed to.</h2>
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
.borderRadius{
  border-radius: 40px;
}
</style>
  