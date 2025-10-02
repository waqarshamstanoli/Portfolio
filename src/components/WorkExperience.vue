<template>
  <v-container class="py-16">
    <v-row class="justify-space-around">
     
      <v-col cols="12" lg="12" md="12" sm="12">
        <v-card width="100%" color="transparent" class="elevation-0 mx-auto mt-md-16">
          <v-card-text>
            <h2 class="secondary--text text-center text--h2 ">OUR CLIENTS</h2>
           
          </v-card-text>
          
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12" v-for="experience in experiences" :key="experience">
        <v-card outlined width="100%" class="custom mx-auto mt-8 px-4 py-4 pb-8 px-md-16 borderRadius py-md-8 paragraphLeft">
          <div class="text-center">
            <v-card-title class="secondary--text text-24 justify-center pb-1">{{experience.company}}</v-card-title>
            <h5 class="secondary--text text--h5">{{ experience.jobTitle }}</h5>
            <v-rating
  hover
  :length="5"
  :size="25"
  value="5"
  readonly="true"
  color="amber darken-1"
 />

            <p class="text-body-1 gray--text font-weight-regular mt-4">{{ experience.description }}</p>
          </div>
        </v-card>
      </v-col>
     
     
    </v-row>
  </v-container>
</template>s

<script>
export default {
  data() {
    return {
    experiences:[{company:'Bimmertech', description:' Madinatech Innovations transformed our vision into a seamless digital platform. Their technical expertise and commitment to quality made them an invaluable partner'},
    {company:'Kaarka',  description:' We needed a reliable tech partner to scale our e-commerce operations, and Madinatech delivered beyond expectations. Highly recommended!'},
    {company:'Techbar',   description:' Working with Madinatech Innovations has been great. Their team not only understood our requirements but also suggested innovative solutions we hadn’t thought of'}

    ]
    };
  },
 
};
</script>

<style scoped>





</style>
