<template>
  <v-container fluid class="height">
    <v-row class="justify-space-around">
      <v-col cols="12" lg="12" md="12" sm="12">
        <v-card
          width="700"
          class="headingCenter elevation-0 mx-auto mt-16"
          color="transparent"
        >
          <h1 class="text--h2 text-center">
            <br />
            PROJECTS
          </h1>
          <p class="text--body-1 mt-4 ffHalyard text-center">
            Stay in control - und create the shake that meets your needs. Just
            as you like it. Just as you need it. Keep an eye out for our
            machines. The rest's a cinch:
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" lg="9" md="12" sm="12">
        <div class="d-flex flex-wrap mt-4 centerCards" ref="mySection">
          <v-card
            rounded="lg"
            color="rgba(0,0,0,.1)"
            width="300"
            class="mx-auto mt-8 elevation-0"
            v-for="project in projects" :key="project"
          >
            <v-card-text>
              <h4 class="text--h4 text-center">{{project.projectName}}.</h4>
              <!-- <v-row>
                <v-col cols="12" lg="10" md="10" sm="12" offset="1"> -->
                  <v-img :src="project.projectImg" alt="" class="mt-8">
                    <!-- <div style="width: 125px; height: 197px">
                      <img
                        src="../assets/step4_highlight.png"
                        alt=""
                        class="Hide ml-n2"
                        :class="{ scaled2: step4Highlight }"
                      />
                    </div> -->
                  </v-img>
                <!-- </v-col>
              </v-row> -->
            </v-card-text>
          </v-card>

          <!-- <v-card
            rounded="lg"
            color="rgba(0,0,0,.1)"
            width="300"
            class="mx-auto elevation-0"
          >
            <v-card-text>
              <h4 class="text--h4 text-center">FITRROBIX.</h4>
             
                  <v-img src="../assets/fit.png" alt=""  class="mt-8">
                   
                </v-img>
            </v-card-text>
          </v-card>
         
          <v-card
            rounded="lg"
            color="rgba(0,0,0,.1)"
            width="300"
            class="mx-auto elevation-0"
          >
            <v-card-text>
              <h4 class="text--h4 text-center">EXTSY.</h4>
             
                  <v-img src="../assets/ex.png" alt="" class="mt-8">
                    
                  </v-img>
            </v-card-text>
          </v-card>
          <v-card
            rounded="lg"
            color="rgba(0,0,0,.1)"
            width="300"
            class="mx-auto elevation-0"
          >
            <v-card-text>
              <h4 class="text--h4 text-center">EYE SMARTY.</h4>
              <v-img src="../assets/eye.svg" alt="" class="mt-8">
               
              </v-img>
            </v-card-text>
          </v-card>
          <v-card
            rounded="lg"
            color="rgba(0,0,0,.1)"
            width="300"
            class="mx-auto elevation-0"
          >
            <v-card-text>
              <h4 class="text--h4 text-center">INTELLI COMMERCE.</h4>
              
                  <v-img src="../assets/intel.png" alt="" class="mt-8 ml-2">
                    
                  </v-img>
               
            </v-card-text>
          </v-card>
          <v-card
            rounded="lg"
            color="rgba(0,0,0,.1)"
            width="300"
            class="mx-auto elevation-0"
          >
            <v-card-text>
              <h4 class="text--h4 text-center">NASEEM EDUCATION.</h4>
              
                  <v-img src="../assets/nas.png" alt="" class="mt-8" >
                    
                  </v-img>
                
            </v-card-text>
          </v-card> -->
          <!-- <v-card
            rounded="lg"
            color="rgba(0,0,0,.1)"
            width="300"
            class="mx-auto elevation-0"
          >
            <v-card-text>
              <h4 class="text--h4 text-center">FINANCIALS UNLIMITED.</h4>
              <div class="d-flex mt-8">
                <v-img src="../assets/proteins.png" width="95%">
                  <img
                    src="../assets/step1.png"
                    alt=""
                    width="100"
                    height="85"
                    class="Hide mt-10 ml-10"
                    :class="{ scaled: whiteProtien }"
                  />
                </v-img>
              </div>
            </v-card-text>
          </v-card>
          <v-card
            rounded="lg"
            color="rgba(0,0,0,.1)"
            width="300"
            class="mx-auto elevation-0"
          >
            <v-card-text>
              <h4 class="text--h4 text-center">KYC.</h4>
              <v-img src="../assets/step3.png" alt="" class="mt-8">
                <img
                  src="../assets/strawberyactive.png"
                  alt=""
                  width="60"
                  height="50"
                  style="position: relative; top: 50px; left: 95px"
                  class="Hide"
                  :class="{ scaled: step3Highlight }"
                />
                <img
                  src="../assets/step3highlight.png"
                  alt=""
                  width="60"
                  height="50"
                  style="position: relative; top: 90px; left: 95px"
                  class="Hide"
                  :class="{ scaled: step3Highlight }"
                />
              </v-img>
            </v-card-text>
          </v-card>

        
          <v-card
            rounded="lg"
            color="rgba(0,0,0,.1)"
            width="300"
            class="mx-auto elevation-0"
          >
            <v-card-text>
              <h4 class="text--h4 text-center">TASC.</h4>
              <v-row>
                <v-col cols="12" lg="10" md="10" sm="12" offset="1">
                  <v-img src="../assets/step4.png" alt="" class="mt-8 ml-2">
                    <div style="width: 125px; height: 197px">
                      <img
                        src="../assets/step4_highlight.png"
                        alt=""
                        class="Hide ml-n2"
                        :class="{ scaled2: step4Highlight }"
                      />
                    </div>
                  </v-img>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card
            rounded="lg"
            color="rgba(0,0,0,.1)"
            width="300"
            class="mx-auto elevation-0"
          >
            <v-card-text>
              <h4 class="text--h4 text-center">SCRAM.</h4>
              <v-row>
                <v-col cols="12" lg="10" md="10" sm="12" offset="1">
                  <v-img src="../assets/step4.png" alt="" class="mt-8 ml-2">
                    <div style="width: 125px; height: 197px">
                      <img
                        src="../assets/step4_highlight.png"
                        alt=""
                        class="Hide ml-n2"
                        :class="{ scaled2: step4Highlight }"
                      />
                    </div>
                  </v-img>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
         
         
          <v-card
            rounded="lg"
            color="rgba(0,0,0,.1)"
            width="300"
            class="mx-auto elevation-0"
          >
            <v-card-text>
              <h4 class="text--h4 text-center">STABLE FUND.</h4>
              <v-row>
                <v-col cols="12" lg="10" md="10" sm="12" offset="1">
                  <v-img src="../assets/step4.png" alt="" class="mt-8 ml-2">
                    <div style="width: 125px; height: 197px">
                      <img
                        src="../assets/step4_highlight.png"
                        alt=""
                        class="Hide ml-n2"
                        :class="{ scaled2: step4Highlight }"
                      />
                    </div>
                  </v-img>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card
            rounded="lg"
            color="rgba(0,0,0,.1)"
            width="300"
            class="mx-auto elevation-0"
          >
            <v-card-text>
              <h4 class="text--h4 text-center">TECHBAR.</h4>
              <v-row>
                <v-col cols="12" lg="10" md="10" sm="12" offset="1">
                  <v-img src="../assets/step4.png" alt="" class="mt-8 ml-2">
                    <div style="width: 125px; height: 197px">
                      <img
                        src="../assets/step4_highlight.png"
                        alt=""
                        class="Hide ml-n2"
                        :class="{ scaled2: step4Highlight }"
                      />
                    </div>
                  </v-img>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          -->
          
        </div>
        <v-card-actions>
          <v-btn rounded class="mx-auto mt-12 gradientButton2 px-16">
            Pay and enjoy</v-btn
          >
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
export default {
  data() {
    return {
     
      step4Highlight: false,

      projects:[{projectName:'AEVENT', projectImg:require('../assets/aevent.webp'),projectDescription:''},
      {projectName:'FITRROBIX', projectImg:require('../assets/fit.png'),projectDescription:''},
      {projectName:'EXTSY', projectImg:require('../assets/ex.png'),projectDescription:''},
      {projectName:'EYE SMARTY', projectImg:require('../assets/eye.svg'),projectDescription:''},
      {projectName:'INTELLI COMMERCE', projectImg:require('../assets/intel.png'),projectDescription:''},
      {projectName:'NASEEM EDUCATION', projectImg:require('../assets/nas.png'),projectDescription:''},
      {projectName:'FINANCIALS UNLIMITED', projectImg:require('../assets/proteins.png'),projectDescription:''},
      {projectName:'KYC', projectImg:'',projectDescription:''},
      {projectName:'TASC', projectImg:'',projectDescription:''},
      {projectName:'SCRAM', projectImg:'',projectDescription:''},
      {projectName:'STABLE FUND', projectImg:'',projectDescription:''},
      {projectName:'TECHBAR', projectImg:'',projectDescription:''}]
    };
  },
  methods: {
    step1Visible() {
      setTimeout(() => {
        this.whiteProtien = true;
      }, 1000);
    },
    step1Hide() {
      setTimeout(() => {
        this.whiteProtien = false;
      }, 10000);
    },
    step2Visible() {
      setTimeout(() => {
        this.step2Highlight = true;
      }, 5000);
    },
    step3Visible() {
      setTimeout(() => {
        this.step3Highlight = true;
      }, 7000);
    },
    step4Visible() {
      setTimeout(() => {
        this.step4Highlight = true;
      }, 8000);
    },

    makeAllInactive() {
      setTimeout(() => {
        this.step4Highlight = false;
        this.step3Highlight = false;
        this.step2Highlight = false;
      }, 12000);
    },

    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.step1Visible();
          this.step2Visible();
          this.step3Visible();
          this.step4Visible();
          this.makeAllInactive();
          this.step1Hide();
        }
      });
    },
  },
  created() {
    window.addEventListener("scroll", this.reveal);
  },
  mounted() {
    const observer = new IntersectionObserver(this.handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });
    observer.observe(this.$refs.mySection);
    // this.step1Visible()
  },
};
</script>
  
  <style>
.Hide {
  transition: transform 1s ease;
  transform: scale(0);
}
.scaled {
  transform: scale(0.2);
  transition: transform 1s ease; /* Add a smooth transition effect */
}
.scaled2 {
  transform: scale(1);
  transition: transform 1s ease; /* Add a smooth transition effect */
}
</style>
  