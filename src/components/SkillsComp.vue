<template>
  <v-container  style="min-height: 100vh">
    <v-row class="d-flex align-center" style="min-height: 100vh">
      <v-col cols="12" lg="12" md="12" sm="12" class="pa-0">
        <!-- <v-card width="80%" color="transparent" class="elevation-0 mx-auto">
          <v-card-text> -->
            <h1 class="text-center black--text ff_averta pa-0 text-capitalize"> {{$t("services")}}</h1>
          <!-- </v-card-text>
        </v-card> -->
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12">
        <h2
          style=""
          class="mb-4 text"
          v-for="skill in skills"
          :key="skill"
          @click="selectItem(skill)"
        >
        {{ $t(skill.skillName) }}
        </h2>
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-card flat tile height="100%">
          <img :src="selectedItem.img" alt="" width="100%" height="300" />
          <p class="ff_averta"> {{ $t(selectedItem?.description) }}</p>
          <v-card-actions class="pl-0">
            <v-btn
              tile
              small
              color="red"
              class="white--text text-capitalize elevation-0 px-4"
            >
            {{$t("connect_with_us")}}
            </v-btn>
            <v-btn
              tile
              small
              outlined
              color="red"
              class="white--text text-capitalize elevation-0 px-4"
            >
            {{$t("learn_more")}}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-col cols="12" lg="8" md="4" sm="6" class="paragraphLeft">
        <v-row>
          <v-col cols="12" lg="4" md="4" sm="6" v-for="skill in skills" :key="skill">
        <v-card outlined width="300" height="300" class="mx-auto custom borderRadius py-16">
          <div class="text-center">
            <img :src="skill.img" width="50"  alt="" />
            <h3 class="text--h3 mt-4">{{ skill.skillName }}</h3>
          </div>
        </v-card>
      </v-col>
        </v-row>
      
      </v-col> -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      test: false,
      lightPurple: false,
      selectedItem: {
        skillName: "uiux_design",
          skillLevel: "99%",
          img: require("../assets/UI.jpg"),
          description: "uiux_description",
      },
      skills: [
        {
          skillName: "uiux_design",
          skillLevel: "99%",
          img: require("../assets/UI.jpg"),
          description: "uiux_description",
        },
        {
          skillName: "custom_software",
          skillLevel: "99%",
          img: require("../assets/custom.jpg"),
          description: "custom_software_description",
        },
        {
          skillName: "web_development",
          skillLevel: "95%",
          img: require("../assets/website.jpg"),
          description: "web_development_description",
        },
        {
          skillName: "mobile_development",
          skillLevel: "99%",
          img: require("../assets/mobile.png"),
          description: "mobile_development_description",
        },
        {
          skillName: "devops",
          skillLevel: "99%",
          img: require("../assets/devops.jpeg"),
          description: "devops_description",
        },
        {
          skillName: "support_maintenance",
          skillLevel: "99%",
          img: require("../assets/support.jpg"),
          description: "support_maintenance_description",
        },
      ],
    };
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
    },
  },
};
</script>

<style scoped>
.text {
  font-family: "AvertaRegular";
  font-style: normal;
  line-height: 1.4;
  font-weight: 600;
  color: #343434;
  word-break: break-word;
}
</style>
