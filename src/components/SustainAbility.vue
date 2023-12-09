<template>
  <div class="height">
    <v-row class="justify-space-around">
      <v-col cols="12" lg="6" md="12" sm="12">
        <div class="d-flex ml-16">
          <img src="../assets/cup-dark2.png"  width="200"
            height="400" class="cupImage" alt="" :class="{ scaled: dark }" />
          <img
            src="../assets/cup-light-purple2.png"
            alt=""
            width="200"
            height="400"
            class="cupImage ml-12"
            :class="{ scaled: lightPurple }"
          />
          <img
            src="../assets/cup-dark-purple2.png"
            alt=""
            width="200"
            height="400"
            class="cupImage ml-12"
            :class="{ scaled: darkPurple }"
          />
        </div>
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-card width="100%" color="transparent" class="elevation-0 mx-auto">
          <v-card-text>
            <h1 class="text--h2 headingRight">
              <span class="secondary--text"> SUSTAINABLE - </span> <br />

              BECAUSE EXCELLENCE CAN'T KEEP UP.
            </h1>
            <p class="text--body-1 ffHalyard mt-4 paragraphRight">
              Because disposable cups sooner or later will go into the trash,
              here comes <br />
              the alternative: Our to-go cups made from bamboo. Simply great.
              Simply <br />
              reusable. The classic design fits every BODYSHAKE® machine. Thanks
              to <br />
              the screw cap, nothing gets spilled in the hustle and bustle of
              daily life. <br />
              Natural, robust materials comply with food safety standards and
              make <br />
              cups dishwasher-proof up to 70°C.
            </p>
          </v-card-text>
          <v-card-actions>
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
           
          </v-card-actions>
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
      dark:false,
      darkPurple:false,
      lightPurple:false,
      scaleDark:false
    };
  },
  methods:{
    activeDark(){
      this.lightPurple=false
      this.darkPurple=false
      this.dark=true
      // this.scaleDark = true;
     
    },
    activeLightPurple(){
      this.lightPurple=true
      this.darkPurple=false
      this.dark=false
      // this.scaleLightPurple = true;
    },
    activeDarkPurple(){
      this.darkPurple=true
      this.dark=false
      this.lightPurple=false
      // this.scaleDarkPurple = true;
    },
    toggleScale() {
    
  }
  }
 
};
</script>
  
  <style>
.cupImage {
  margin-top: 170px;
}
.scaled {
  transform: scale(1.5); /* Increase the scale value as desired */
  transition: transform 0.9s ease; /* Add a smooth transition effect */
}

</style>
  