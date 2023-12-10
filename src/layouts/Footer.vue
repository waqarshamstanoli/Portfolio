<template>
  <v-footer class="pa-0" >
    <!-- <v-card tile width="100%" color="#EFEFF0">
      <v-card-text>
        <v-row class="">
          <v-col cols="12" lg="6" md="12" sm="12">
            <v-card width="50%" color="transparent" class="elevation-0 ml-auto">
              <div class="d-flex mt-4">
                <div class="d-flex">
                  <img src="../assets/whatsapp.png" alt="" width="50" />
                  <span class="black--text footerSpan mt-3">WHATSAPP</span>
                </div>
                <div class="d-flex">
                  <img src="../assets/phone.png" alt="" width="50" />
                  <span class="black--text footerSpan mt-3"
                    >+4923432432423</span
                  >
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" lg="2" md="12" sm="12">
            <v-btn rounded x-large class="gradientButton mt-4">let us meet</v-btn>
          </v-col>
          <v-col cols="12" lg="3" md="12" sm="12">
            <div class="d-flex">
              <img src="../assets/glass.png" alt="" />
              <v-card color="#2F3031" height="50" width="30" v-for="item in digits" :key="item" class="mt-6 px-2 pt-3 ml-4">
                <h1 class="white--text" >
              {{ item }}</h1>
              </v-card>
              
              <div class="ml-8 mt-6">
                <h5 class=" ShakeCounter">SOLD</h5>
                <h5 class="ShakeCounter mt-2">SHAKES</h5>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card tile width="100%" color="#2F3031">
      <v-row>
        <v-col cols="12" lg="3" md="3" sm="3" offset-lg="5">
          <img src="../assets/footerImage.png" alt="">
        </v-col>
        <v-col cols="12" lg="3" md="3" sm="3">
          <v-btn text small class="mt-2">COOKIE-PREFERENCES</v-btn>
<v-btn text small class="mt-2">LEGAL NOTICE</v-btn>
<v-btn text small class="mt-2">PRIVACY POLICY</v-btn>
        </v-col>
        
      </v-row>


    </v-card> -->
  </v-footer>
</template>
<script>
export default {
  data() {
    return {
      count:1000000,
      digits:[],
      temp:[]
    };
  },
  created() {
    this.digits= "" + this.count
    setInterval(() => {
      this.increment();
    }, 100000); // Increment every 1 second (1000 milliseconds)
  },
  methods: {
    increment() {
      this.count++;
      this.digits= "" + this.count
    }
  }
};
</script>
<style lang=""></style>
