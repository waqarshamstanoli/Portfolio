<template>
  <v-container style="min-height: 100vh">
    <v-row class="justify-space-around">
      <v-col cols="12" lg="12" md="12" sm="12">
        <v-card
          class="headingCenter project_card elevation-0 mx-auto mt-16"
          color="transparent"
        >
          <h1 class="text-center">PORTFOLIO</h1>
          <p
            class="text-body-1 gray--text font-weight-regular mt-8 text-center"
          >
            Stay in control - und create the shake that meets your needs. Just
            as you like it. Just as you need it. Keep an eye out for our
            machines. The rest's a cinch:
          </p>
        </v-card>
      </v-col>
      <v-col cols="12">
        <vue-slick-carousel v-bind="slickOptions">
          <v-card
            tile
            flat
            outlined
            v-for="(project, index) in projects"
            :key="index"
            width="200px"
            height="350"
            class="mx-auto mt-8 elevation-0"
          >
            <v-card-text class="pa-0 ma-0">
              <div class="imageBackground">
                <v-img :src="project.projectImg" alt="" > </v-img>
              </div>
              <h4 class="black--text text--h4 ml-4">
                {{ project.projectName }}.
              </h4>
            </v-card-text>
            <v-card-actions class="actions justify-space-between">
              <v-btn
                tile
                small
                color="#00A9D6"
                class="white--text text-capitalize elevation-0 mx-auto px-4"
              >
                details
                <!-- <a :href="project.projectLink" style="text-decoration: none !important; color: white !important;">See Live</a> -->
              </v-btn>
              <v-btn
                tile
                small
                color="#00A9D6"
                class="white--text text-capitalize elevation-0 mx-auto px-4"
                @click="goToExternalPage(project.projectLink)"
              >
                live
                <!-- <a :href="project.projectLink" style="text-decoration: none !important; color: white !important;">See Live</a> -->
              </v-btn>
            </v-card-actions>
          </v-card>
        </vue-slick-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      },
      step4Highlight: false,
      projects: [
        {
          projectName: "AEVENT",
          projectImg: require("../assets/aevent.webp"),
          projectDescription: "",
          projectLink: "https://app.aevent.com/#/",
        },
        {
          projectName: "BimmeTech",
          projectImg: require("../assets/2.png"),
          projectDescription: "",
          projectLink: "https://www.bimmer-tech.net/",
        },

        {
          projectName: "KAARKA",
          projectImg: require("../assets/kaarka.png"),
          projectDescription: "",
          projectLink: "https://kaarka.netlify.app/#/",
        },
        {
          projectName: "EXTSY",
          projectImg: require("../assets/ex.png"),
          projectDescription: "",
          projectLink: "https://extsy.top/",
        },
        {
          projectName: "EYE SMARTY",
          projectImg: require("../assets/eye.svg"),
          projectDescription: "",
          projectLink: "https://www.eyesmarty.com/",
        },
        {
          projectName: "Distinction Wrapping",
          projectImg: require("../assets/3.png"),
          projectDescription: "",
          projectLink: "https://www.distinctionwrapping.com/",
        },
        {
          projectName: "The Taxcom Accountants",
          projectImg: require("../assets/TheTax.png"),
          projectDescription: "",
          projectLink: "https://thetaxcom.co.uk/",
        },
        {
          projectName: "PureSun",
          projectImg: require("../assets/PureSun.png"),
          projectDescription: "",
          projectLink: "https://demo23.anazah.com/",
        },
        {
          projectName: "FITRROBIX",
          projectImg: require("../assets/fit.png"),
          projectDescription: "",
          projectLink: "",
        },
        {
          projectName: "INTELLI COMMERCE",
          projectImg: require("../assets/intel.png"),
          projectDescription: "",
          projectLink: "",
        },
        {
          projectName: "Chef Special",
          projectImg: require("../assets/ChefSpecial.png"),
          projectDescription: "",
          projectLink: "",
        },
        {
          projectName: "One Stop Claims",
          projectImg: require("../assets/5.png"),
          projectDescription: "",
          projectLink: "",
        },
        {
          projectName: "Beyond Blend",
          projectImg: require("../assets/1.png"),
          projectDescription: "",
          projectLink: "",
        },
        {
          projectName: "Shop.Co",
          projectImg: require("../assets/6.png"),
          projectDescription: "",
          projectLink: "",
        },
        {
          projectName: "NASEEM EDUCATION",
          projectImg: require("../assets/nas.png"),
          projectDescription: "",
          projectLink: "",
        },
        {
          projectName: "FINANCIALS UNLIMITED",
          projectImg: require("../assets/proteins.png"),
          projectDescription: "",
          projectLink: "",
        },
        {
          projectName: "WHEELS N DEALS",
          projectImg: require("../assets/wnd.png"),
          projectDescription: "",
          projectLink: "",
        },
        // {projectName:'TASC', projectImg:'',projectDescription:''},
        // {projectName:'SCRAM', projectImg:'',projectDescription:''},
        // {projectName:'STABLE FUND', projectImg:'',projectDescription:''},
        {projectName:'TECHBAR', projectImg:require("../assets/techbar.png"),projectDescription:'', projectLink:'https://admin-r2.techbar.com/auth/login'}
      ],
      projectDetails: false,
    };
  },
  methods: {
    goToExternalPage(link) {
      window.location.href = link; // Replace with your URL
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
  },
};
</script>

<style>
.actions {
  position: absolute;
  bottom: 10px;
  left: 0px;
  width: 100%;
}
.imageBackground {
  background-color: black;
}
/* a{
  color: white !important;
}
.project_card{
  width: 50% !important;
}
@media only screen and (max-width: 767px) {
  .project_card{
  width: 100% !important;
}
} */
</style>
