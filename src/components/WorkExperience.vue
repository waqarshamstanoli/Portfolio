<template>
  <div class="py-16">
    <v-row class="justify-space-around">
     
      <v-col cols="12" lg="12" md="12" sm="12">
        <v-card width="100%" color="transparent" class="elevation-0 mx-auto mt-16">
          <v-card-text>
            <h2 class="secondary--text text-center text--h2 headingRight">WORK EXPERIENCE</h2>
           
          </v-card-text>
          
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12" v-for="experience in experiences" :key="experience">
        <v-card outlined width="80%" class="mx-auto mt-8 px-4 py-4 pb-8 px-md-16 borderRadius py-md-8 paragraphLeft">
          <div class="text-center">
            <v-card-title class="secondary--text justify-center pb-1">{{experience.company}}</v-card-title>
            <h5 class="secondary--text text--h5">{{ experience.jobTitle }}</h5>
            <h4 class="secondary--text text--h4">{{ experience.duration }}</h4>

            <p class="text-body-1 gray--text font-weight-regular mt-4">{{ experience.description }}</p>
          </div>
        </v-card>
      </v-col>
      <!-- <v-col cols="12" lg="6" md="12" sm="12">
        <v-card outlined width="80%" class="mx-auto mt-8 px-4 py-4 pb-8 px-md-16 borderRadius py-md-8 paragraphLeft">
          <div class="text-center">
            <v-card-title class="gray--text justify-center pb-1">Financials Unlimited</v-card-title>
            <h5 class="gray--text text--h5">Vue js Developer</h5>
            <h4 class="gray--text text--h4">Nov 2019 - Sep 2021</h4>

            <p class="text-body-1 gray--text font-weight-regular mt-4"> During my two-year tenure at Financials Unlimited, I served as a Vue.js developer, 
              exclusively focusing on the framework. I actively contributed to the development of various projects, leveraging Vue.js to create dynamic and 
              efficient user interfaces. This experience at Financials Unlimited significantly enhanced my proficiency
               in Vue.js and allowed me to play a crucial role in advancing the company's web development initiatives.</p>
          </div>
        </v-card>
      </v-col> -->
    </v-row>
  </div>
</template>s

<script>
export default {
  data() {
    return {
    experiences:[{company:'Infini8AI', jobTitle:'Senior Front End Developer', duration:'Oct 2021 - Present', description:'As a Senior Front End Developer at Infin8AI, I specialized in Vue.js while also working on Angular and React.  Leading a team, I conducted code reviews and managed Git merges,  ensuring code quality. This experience enhanced my technical skills and leadership abilities in a dynamic development environment.'},{company:'Financials Unlimited', jobTitle:'Vue js Developer', duration:'Nov 2019 - Sep 2021', description:'During my two-year tenure at Financials Unlimited, I served as a Vue.js developer,exclusively focusing on the framework. I actively contributed to the development of various projects, leveraging Vue.js to create dynamic and  efficient user interfaces. This experience at Financials Unlimited significantly enhanced my proficiency in Vue.js and allowed me to play a crucial role in advancing the company s web development initiatives'}]
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>

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
