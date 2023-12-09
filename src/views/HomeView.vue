<template>
  <v-container>
    <v-row class="justify-space-around" style="height: 1000px">
      <v-col cols="12" lg="4" md="12" sm="12">
        <v-card
          width="425"
          color="transparent"
          class="elevation-0 mx-auto marginTop"
        >
          <v-card-text>
            <h1 class="text--h1 headingLeft">YOUR PROTEIN SHAKE.</h1>
            <h2 class="text--h3 mt-4">
              CUSTOMIZED PROTEIN SHAKES. HIGH-CLASS INGREDIENTS. POWER FOR YOUR
              DAILY LIFE.
            </h2>
          </v-card-text>
          <v-card-actions>
            <v-btn outlined rounded x-large class="px-16 py-8">Try Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" lg="5" md="12" sm="12">
        <v-img src="../assets/machine.png" width="410" alt=""
          ><img
            src="../assets/BS_Screensaver-Banana_Final.gif"
            class="gifAnimation"
            alt=""
        /></v-img>
      </v-col>
    </v-row>
    <flavors-component></flavors-component>
    <howit-works></howit-works>
    <howit-works-2></howit-works-2>
    <app-comp></app-comp>
    <sustain-ability></sustain-ability>
    <about-us></about-us>
    <v-footer fixed color="transparent">
      <v-btn large icon class="mx-auto" @click="scrollToContent"
        ><v-icon>mdi-chevron-down</v-icon></v-btn
      >
    </v-footer>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

import FlavorsComponent from "@/components/FlavorsComponent.vue";
import HowitWorks from "@/components/HowitWorks.vue";
import HowitWorks2 from "@/components/HowitWorks2.vue";
import AppComp from "@/components/AppComp.vue";
import SustainAbility from "@/components/SustainAbility.vue";
import AboutUs from "@/components/AboutUs.vue";
export default {
  components: {
    FlavorsComponent,
    HowitWorks,
    HowitWorks2,
    AppComp,
    SustainAbility,
    AboutUs,
  },
  data() {
    return {
      scrollPosition: 0,
      comsumer: false,
    };
  },
  methods: {
    scrollToContent() {
      if (this.scrollPosition == 0) {
        this.scrollPosition = this.scrollPosition + 1150;
      } else if (this.scrollPosition == 1150) {
        this.scrollPosition = this.scrollPosition + 800;
      } else if (this.scrollPosition == 1950) {
        this.scrollPosition = this.scrollPosition + 800;
      } else if (this.scrollPosition == 2750) {
        this.scrollPosition = this.scrollPosition + 800;
      } else if (this.scrollPosition == 3550) {
        this.scrollPosition = this.scrollPosition + 800;
      } else if (this.scrollPosition == 4350) {
        this.scrollPosition = this.scrollPosition + 800;
      } else if (this.scrollPosition == 5150) {
        this.scrollPosition = this.scrollPosition + 800;
      }
      window.scroll({
        top: this.scrollPosition,
        left: 0,
        behavior: "smooth",
      });
    },
    movetoScrollPosition(value) {
      window.scroll({
        top: value,
        left: 0,
        behavior: "smooth",
      });
    },
    animate() {
      var reveals = document.querySelectorAll(".headingLeft");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    },
  },

  mounted() {
    this.animate();
  },
  watch: {
    getScrollValue: {
      deep: true,
      handler(newColor) {
        this.movetoScrollPosition(newColor);
      },
    },
  },
  computed: {
    ...mapGetters(["getScrollValue"]),
  },
};
</script>
<style>
.marginTop {
  margin-top: 150px;
}
</style>
