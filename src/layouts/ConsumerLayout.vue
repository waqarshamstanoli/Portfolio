<template>
  <div class="dashboard-layout">
    <div>
      <Top-bar @item-selected="changeTheme"></Top-bar>
      <dashboard-content ref="content"  :class="(darkTheme ? 'dark-theme' : 'body')" ></dashboard-content>
      <Footer></Footer>
     
    </div>
  </div>
</template>

<script>
import DashboardContent from "../components/ContentView.vue";
import TopBar from "./TopBar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    DashboardContent,
    TopBar,
    Footer
  },

  data() {
    return {
      // count: 1000000,
      // digits: [],
      darkTheme:false
    };
  },
  methods: {
    changeTheme(theme) {
      
      if (theme == 'mdi-weather-night') {
        this.$vuetify.theme.dark = false;
        this.darkTheme = false
        
      } else {
        this.$vuetify.theme.dark = false;
        this.darkTheme = false
        
      }

    },
  },
 
};
</script>

<style lang="scss">

.header-text{
   background: linear-gradient(90deg, #0ea5ea,  #0ea5ea, #0bd1d1);
     -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
    line-height: 55px;
   
    text-fill-color: transparent;
}
.hero_text{
  font-size: 50px;
}
.ff_averta {font-family: "AvertaRegular";}





















.v-btn.v-size--small {
  font-family: AvertaRegular !important;
  font-size: 16px !important;
}






@font-face {
  font-family: "AvertaRegular";
  src: local("Noto_Sans"),
    url(../assets/Averta/AvertaDemoPE-Regular.ttf) format("truetype");
}

.height {
  height: fit-content;
}


.cursor-pointer {
  cursor: pointer;
}





@media only screen and (max-width: 767px) {
  .v-application .text--h2 {
    font-size: 36px !important;
  }
}
.slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
    padding: 10px !important;
}
</style>
