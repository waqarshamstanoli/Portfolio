<template>
  <div class="dashboard-layout">
    <div>
      <Top-bar></Top-bar>
      <dashboard-content ref="content" class="body"></dashboard-content>
      
      <Footer class="mt-8"></Footer>
    </div>
  </div>
</template>

<script>
import DashboardContent from "../components/ContentView.vue";
import TopBar from "./TopBar.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    DashboardContent,
    TopBar,
    Footer,
  },

  data() {
    return {};
  },
  methods:{
    move(){
      this.$refs.content.move
    }
  }
};
</script>

<style lang="scss">
.machinesCard{
  margin-top: 400px;
}
</style>
