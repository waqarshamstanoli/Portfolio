<template>
  <v-container fluid class="height">
    <v-row class="justify-space-around">
      <v-col cols="12" lg="12" md="12" sm="12">
        <v-card
          width="50%"
          class="headingCenter elevation-0 mx-auto mt-16"
          color="transparent"
        >
          <h1 class="gray-text text--h2 text-center">
            PROJECTS
          </h1>
          <p class="text-body-1 gray--text font-weight-regular mt-8  text-center">
            Stay in control - und create the shake that meets your needs. Just
            as you like it. Just as you need it. Keep an eye out for our
            machines. The rest's a cinch:
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" lg="9" md="12" sm="12">
        <div class="custom-scrollbar">
        <div class="d-flex flex-wrap mt-4 centerCards" ref="mySection">
          <v-card
            rounded="lg"
            color="rgba(0,0,0,.1)"
            width="290"
            class="mx-auto mt-8 elevation-0"
            v-for="project in projects" :key="project"
          >
            <v-card-text>
              <h4 class="secondary--text text--h4 text-center mt-2">{{project.projectName}}.</h4>
              
                  <v-img :src="project.projectImg" alt="" class="mt-8">
                   
                  </v-img>
               
            </v-card-text>
          </v-card>

        </div>
      </div>
        <!-- <v-card-actions>
          <v-btn rounded class="mx-auto mt-12 gradientButton2 px-16">
            Pay and enjoy</v-btn
          >
        </v-card-actions> -->
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
      {projectName:'WHEELS N DEALS', projectImg:require('../assets/wnd.png'),projectDescription:''},
      // {projectName:'TASC', projectImg:'',projectDescription:''},
      // {projectName:'SCRAM', projectImg:'',projectDescription:''},
      // {projectName:'STABLE FUND', projectImg:'',projectDescription:''},
      // {projectName:'TECHBAR', projectImg:'',projectDescription:''}
    ]
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
.custom-scrollbar {
  height: 680px;
  overflow-y: scroll;
  /* Add styles for the custom scrollbar here */
}
/* For Webkit browsers (Chrome, Safari) */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #ff9b4f; 
  border-radius: 6px;
  height: 50px !important;
}


</style>
  