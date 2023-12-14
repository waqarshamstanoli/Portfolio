<template>
  <div class="dashboard-layout">
    <div>
      <Top-bar></Top-bar>
      <dashboard-content ref="content" class="body"></dashboard-content>

      <v-footer color="transparent" class="pa-0">
        <v-card tile color="#2D2F2E" width="100%">
          <v-row class="justify-space-around">
            <v-col cols="12" lg="4" md="12" sm="12" class="">
              <div class="mt-6">
                <img src="../assets/instagram.png" alt="" width="50" />
               
                
              </div>
            </v-col>
            <v-col cols="12" lg="2" md="12" sm="12">
              
            </v-col>
            <v-col cols="12" lg="3" md="12" sm="12" class="">
              <div class="d-flex">
                <div>
                  <img src="../assets/glassWhite.png" alt="" />
                </div>
                <v-card
                  color="#ffffff"
                  height="50"
                  width="30"
                  v-for="item in digits"
                  :key="item"
                  class="mt-8 ml-2 pl-1"
                >
                  <h1 class="black--text">
                    {{ item }}
                  </h1>
                </v-card>

                <div class="ml-4">
                 
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
        <v-card tile color="black" width="100%" class="py-2">
          <v-row>
            <v-col cols="12" lg="3" md="3" sm="3" offset-lg="5">
             
            </v-col>
            <v-col cols="12" lg="3" md="3" sm="3">
              <v-btn text small class="mt-2">COOKIE-PREFERENCES</v-btn>
              <v-btn text small class="mt-2">LEGAL NOTICE</v-btn>
              <v-btn text small class="mt-2">PRIVACY POLICY</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-footer>
    </div>
  </div>
</template>

<script>
import DashboardContent from "../components/ContentView.vue";
import TopBar from "./TopBar.vue";

export default {
  components: {
    DashboardContent,
    TopBar,
  },

  data() {
    return {
      // count: 1000000,
      // digits: [],
    };
  },
  methods: {
    // move() {
    //   this.$refs.content.move;
    // },
    // increment() {
    //   this.count++;
    //   this.digits = "" + this.count;
    // },
  },
  // created() {
  //   this.digits = "" + this.count;
  //   setInterval(() => {
  //     this.increment();
  //   }, 100000); 
  // },
};
</script>

<style lang="scss">
.v-btn.v-size--large {
  transition: all 0.15s ease-in-out;
  color: #bfbfbf !important;
  font-family: Tungsten !important;
  font-size: 25px !important;
  cursor: pointer;
  border-radius: 30px !important;
}
.v-btn.v-size--small {
  color: #bfbfbf !important;
  font-family: Tungsten !important;
  font-size: 16px !important;
}

.v-btn--active {
  background: #ffec00 !important;
  color: black !important;
}
.topBarSpan {
  font-family: Tungsten !important;
  font-size: 16px !important;
}
.body {
  background-image: url("../assets/hexabackground.png");
  // background-size: cover;
  background-repeat: repeat-y;
}
.v-application .text--h1 {
  line-height: 92px !important;
  font-size: 110px !important;
  font-weight: 700 !important;
  font-family: "tungsten";
  color: black;
}
.v-application .text--h2 {
  line-height: 0.9em !important;
  font-size: 76px !important;
  font-weight: 600 !important;
  font-family: "tungsten";
  color: black;
}
.v-application .text--h3 {
  font-size: 35px !important;
  font-family: "tungsten-light";
  font-weight: 100 !important;
  line-height: 35px !important;
  color: black;
}
.v-application .text--h4 {
  font-size: 28px !important;
  font-family: "tungsten";
  font-weight: 100 !important;
  line-height: 35px !important;
  color: black;
}
.v-application .text--h5 {
  font-size: 26px !important;
  font-family: "tungsten";
  font-weight: 100 !important;
  line-height: 35px !important;
  color: black;
}

.v-btn--rounded {
  font-family: "tungsten" !important;
}
.v-btn.v-size--x-large {
  border-radius: 40px !important;
  border: 2px solid black !important;
  font-size: 30px !important;
}
@font-face {
  font-family: "Tungsten";
  src: local("Tungsten"),
    url(../assets/tungsten/Tungsten-Medium.ttf) format("truetype");
}
@font-face {
  font-family: "TungstenBold";
  src: local("TungstenBold"),
    url(../assets/tungsten/Tungsten-Bold.ttf) format("truetype");
}
@font-face {
  font-family: "Tungsten-light";
  src: local("Tungsten-light"),
    url(../assets/tungsten/Tungsten-Light.ttf) format("truetype");
}
@font-face {
  font-family: "Halyard";
  src: local("Halyard"),
    url(../assets/Halyard/HalyardDisplay.ttf) format("truetype");
}
.ffHalyard {
  font-family: Halyard !important;
}
.v-application .body-1 {
  font-size: 28px !important;
  font-weight: 200;

  font-family: Halyard !important;
}
.v-application .body-2 {
  font-size: 58px !important;
  font-weight: 200;

  font-family: Halyard !important;
}
.v-application .caption {
  font-size: 22px !important;
  font-weight: 200;

  font-family: Halyard !important;
}
.v-card__title {
  font-size: 30px !important;
  font-weight: 500;
  font-family: Halyard !important;
}

.height {
  height: fit-content;
}


.gradientButton2 {
  color: white !important;
  background-image: linear-gradient(to right, #5f2a89, #0ea8e3);
  font-size: 25px !important;
  border: none !important;
}
.cursor-pointer {
  cursor: pointer;
}
.gifAnimation {
  margin-top: 62px;
  margin-left: 117px;
}

// TEXT
.text-decoration-underline:hover {
  color: #fbbf23;
}
///business layout ki classes


</style>
