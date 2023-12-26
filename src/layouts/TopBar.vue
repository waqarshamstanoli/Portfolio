<template>
  <div>
    <v-app-bar class="elevation-0" color="blue" fixed app>
      <v-row class="justify-center">
        <v-col cols="12" lg="2" md="12" sm="12" class="">
          <v-app-bar-nav-icon @click="drawer = true" class="hidden-md-and-up"></v-app-bar-nav-icon>
          <v-toolbar-title link @click="openModal()">
            <img src="../assets/logo dark.png" alt="" width="115%" class="mt-6 ml-8 ml-md-4 cursor-pointer" to="/" v-if="selectedItem != 'mdi-white-balance-sunny'"/>
            <img src="../assets/logo light.png" alt="" width="115%" class="mt-6 ml-8 ml-md-4 cursor-pointer" to="/" v-if="selectedItem == 'mdi-white-balance-sunny'"/>
          </v-toolbar-title>
        </v-col>

        <v-col cols="12" lg="6" md="12" sm="12" class="d-none d-md-block">
          <div class="d-flex my-4">
            <v-btn text large @click="scrollTo(100)" :class="{ activeButton: scrollPosition == 1150 }" class="text-capitalize btnText--text"> About Me </v-btn>
            <v-btn text large @click="scrollTo(1050)" :class="{ activeButton: scrollPosition == 1950 }" class="text-capitalize btnText--text"> Projects </v-btn>
            <v-btn text large @click="scrollTo(1850)" :class="{ activeButton: scrollPosition == 3550 }" class="text-capitalize btnText--text"> Skills </v-btn>
            <v-btn text large @click="scrollTo(2650)" :class="{ activeButton: scrollPosition == 4350 }" class="text-capitalize btnText--text"> Work Experience </v-btn>
            <v-btn text large @click="scrollTo(3450)" :class="{ activeButton: scrollPosition == 5150 }" class="text-capitalize btnText--text"> Education </v-btn>
            <v-btn text large @click="scrollTo(4250)" :class="{ activeButton: scrollPosition == 5150 }" class="text-capitalize btnText--text"> Contact </v-btn>
          </div>
        </v-col>
        <v-col cols="12" lg="2" md="12" sm="12" class="">
          <v-menu  offset-y left="true" rounded="lg">
            <template v-slot:activator="{  on }">
              <v-btn  v-on="on" class="mt-6 menu elevation-0" >
              <v-icon color="icon" class="" v-on="on" > {{ selectedItem }}  </v-icon>
              <v-icon color="icon" class="ml-4" > mdi-chevron-down  </v-icon>
            </v-btn>
            </template>

            <v-list dense>
              <v-list-item class="" v-for="item in items" :key="item"  @click="selectItem(item)">
                <v-list-item-icon class="">
                  <v-icon color="icon" class="" v-on="on"> {{ item.icon }}  </v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer class="back1" width="100%" v-model="drawer" absolute temporary>
      <div class="text-right pr-4 mt-8">
        <v-btn icon class="drawer" @click="drawer = false">
          <v-icon class="ml-auto">mdi-close</v-icon>
        </v-btn>
      </div>
    </v-navigation-drawer>
  </div>
</template>
<script>
// import InputSwitch from "@/components/InputSwitch.vue";
import { mapActions } from "vuex";
export default {
  // components: { InputSwitch },
  data() {
    return {
      isHovered: true,
      // consumer: false,
      scrollPosition: "",
      visible: false,
      items: [{icon:'mdi-white-balance-sunny', name: "Light" }, {icon:'mdi-weather-night', name: "Dark" }],
      selectedItem: 'mdi-white-balance-sunny',
    };
  },
  methods: {
    ...mapActions(["moveToNext"]),
    selectItem(item) {
      this.selectedItem = item.icon;
      this.$emit('item-selected', this.selectedItem)
    },
    openModal() {
      if (this.$vuetify.theme.dark == false) {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    },
    toggle(event) {
      this.visible = event;
    },
    select(option) {
      alert("");
      this.name = option.name;
      this.image = option.img;
      this.visible = false;
    },

    handleSwitchToggle() {
      // this.consumer = !this.consumer;
      // const theme = localStorage.getItem('theme');
      // localStorage.getItem("theme");

      if (this.$vuetify.theme.dark == false) {
        this.$vuetify.theme.dark = true;
        this.$router.push({ path: "/business/machines" });
      } else {
        this.$vuetify.theme.dark = false;
        this.$router.push({ path: "/" });
      }

      // this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    scrollTo(position) {
      console.log("test", position);
      this.scrollPosition = position;
      this.$store.commit("SET_SCROLL_POSITION", position);
    },
  },
  computed: {},
};
</script>

<style scoped>
.aselect {
  width: 75px;
}

.arrow {
  position: absolute;
  right: 10px;
  top: 20%;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 10px solid #888;
  transform: rotateZ(0deg) translateY(0px);
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.59, 1.39, 0.37, 1.01);
}
.expanded {
  transform: rotateZ(180deg) translateY(2px);
}
.label {
  display: block;
  padding: 2px 12px;
  font-size: 16px;
  color: white;
  font-family: Tungsten !important;
}
/* .current {
			background: #eaeaea;
		}
		.hidden {
			visibility: hidden;
		}
		.visible {
			visibility: visible;
		} */
.selector {
  /* border: 1px solid gainsboro; */
  background: transparent;
  position: relative;
  z-index: 1;
}
ul {
  /* width: 100%; */
  list-style-type: none;

  margin: 0;
  font-size: 16px;
  font-family: tungsten;
  border: 1px solid gainsboro;
  position: absolute;
  z-index: 1;
  background: #fff;
  border-radius: 5px;
  padding: 10px 25px 10px 10px;
}
.topBarOpacity {
  opacity: 0.8;
}
.activeButton {
  background-color: #ffec00;
}
</style>
