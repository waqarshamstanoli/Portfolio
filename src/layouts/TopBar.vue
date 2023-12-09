<template>
  <div>
    <v-app-bar class="pb-8 pt-4 topBarOpacity primary" extended fixed app>
      <v-row class="justify-space-around">
        <v-col cols="12" lg="4" md="12" sm="12">
          <v-app-bar-nav-icon
            @click="drawer = true"
            class="hidden-md-and-up"
          ></v-app-bar-nav-icon>
          <v-toolbar-title link @click="changeRoute()">
            <img
              src="../assets/logo.svg"
              alt=""
              width="70%"
              class="mt-12 ml-8 ml-md-4 cursor-pointer"
              to="/"
            />
          </v-toolbar-title>
        </v-col>

        <v-col cols="12" lg="4" md="12" sm="12" class="d-none d-md-block">
          <!-- <v-switch v-model="consumer" @change="toggleTheme"></v-switch> -->

          <div class="d-flex justify-end">
            <span class="gray--text text-uppercase topBarSpan">consumer</span>
            <v-switch
              inset
              color="grey"
              v-model="consumer"
              class="mx-4"
              @change="handleSwitchToggle"
            ></v-switch>

            <!-- <input-switch
             
              v-model="consumer"
              @switch-changed="toggleTheme"
            ></input-switch> -->

            <span class="gray--text text-uppercase topBarSpan">business</span>
            <div class="aselect">
              <div class="selector" @mouseover="toggle(true)">
                <div class="label d-flex">
                  <!-- <img
                    :src="image"
                    alt=""
                    width="15"
                    height="15"
                    class="mt-1"
                  /> -->
                  <span class="white--text mx-2">{{ name }}</span>
                  <!-- <img src="../assets/dropdown icon.png" alt="" width="20"/> -->
                </div>
                <!-- <div class="arrow"></div> -->
                
                <div>
                  <!-- <ul v-if="visible">
                    <li
                      class="d-flex mt-2 cursor-pointer"
                      v-for="item in list"
                      :key="item"
                      @click="select(item)"
                    >
                      <span
                        ><img :src="item.img" alt="" width="20" class="mr-2"
                      /></span>
                      {{ item.name }}
                    </li>
                  </ul> -->
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-end" v-if="!comsumer">
            <v-btn
              text
              large
              @click="scrollTo(1150)"
              :class="{ activeButton: scrollPosition == 1150 }"
            >
              flavors
            </v-btn>
            <v-btn
              text
              large
              @click="scrollTo(1950)"
              :class="{ activeButton: scrollPosition == 1950 }"
            >
              how it works
            </v-btn>
            <v-btn
              text
              large
              @click="scrollTo(3550)"
              :class="{ activeButton: scrollPosition == 3550 }"
            >
              app
            </v-btn>
            <v-btn
              text
              large
              @click="scrollTo(4350)"
              :class="{ activeButton: scrollPosition == 4350 }"
            >
              sustainability
            </v-btn>
            <v-btn
              text
              large
              @click="scrollTo(5150)"
              :class="{ activeButton: scrollPosition == 5150 }"
            >
              about us
            </v-btn>
          </div>
          <div class="d-flex justify-end" v-else>
            <v-btn text large to="/business/machines"> machine </v-btn>
            <v-btn text large to="/business/app"> app </v-btn>
            <v-btn text large to="/business/refillment"> refillment </v-btn>
            <v-btn text large to="/business/digitalization">
              digitilization
            </v-btn>
            <v-btn text large to="/business/about"> about </v-btn>
            <v-btn text large to="/business/contact"> contact </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer
      class="back1"
      width="100%"
      v-model="drawer"
      absolute
      temporary
    >
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
      consumer: false,
      scrollPosition: "",
      visible: false,
      name: "DE",
      image: require("../assets/ger-flag.png"),
      list: [
        { name: "DE", img: require("../assets/ger-flag.png") },
        { name: "GER", img: require("../assets/eng-flag.png") },
      ],
    };
  },
  methods: {
    ...mapActions(["moveToNext"]),
    openModal() {
      this.$emit("openDialog", true);
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
