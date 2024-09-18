<template>
  <div>
    <!-- <v-container fluid>

    </v-container> -->
    <v-app-bar
      class="elevation-4 hidden-sm-and-down"
      color="white"
      fixed
      height=""
    >
      <v-toolbar-items>
        <!-- <img @click="scrollTo(0)" src="../assets/logo.png" width="200px" height="60px" alt="" class="mt-4  ml-md-4 cursor-pointer" to="/"
          /> -->
      </v-toolbar-items>

      <v-toolbar-items
        class="hidden-sm-and-down mx-auto justify-space-between pt-2 pb-2"
      >
        <v-btn
          text
          small
          @click="scrollTo(0)"
          :class="{ activeButton: scrollPosition == 1150 }"
          class="text-capitalize btnText--text py-2 mx-4"
        >
          Home
        </v-btn>
        <v-btn
          text
          small
          @click="scrollTo(700)"
          :class="{ activeButton: scrollPosition == 1950 }"
          class="text-capitalize btnText--text py-2 mx-4"
        >
          Services
        </v-btn>
        <v-btn
          text
          small
          @click="scrollTo(1450)"
          :class="{ activeButton: scrollPosition == 3350 }"
          class="text-capitalize btnText--text py-2 mx-4"
        >
          Clients
        </v-btn>
        <v-btn
          text
          small
          @click="scrollTo(2490)"
          :class="{ activeButton: scrollPosition == 4350 }"
          class="text-capitalize btnText--text py-2 mx-4"
        >
          Portfolio
        </v-btn>

        <v-btn
          text
          small
          @click="scrollTo(4250)"
          :class="{ activeButton: scrollPosition == 5150 }"
          class="text-capitalize btnText--text py-2 mx-4"
        >
          Careers
        </v-btn>
        <v-btn
          small
          color="red"
          class="text-capitalize ml-md-0 ml-8 white--text"
          >Get in touch</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>

    <v-app-bar height="auto" class="hidden-md-and-up" color="blue" dense>
      <v-toolbar-title class="mobile-title">
        <v-toolbar-items>
          <router-link to="/">
            <!-- <img src="../assets/logo dark.png" height="60px" alt="" class="mt-4  ml-md-4 cursor-pointer" to="/"
            v-if="selectedItem == 'mdi-weather-night'" />
          <img src="../assets/logo dark.png" height="60px" alt="" class="mt-4  ml-md-4 cursor-pointer" to="/"
            v-if="selectedItem != 'mdi-weather-night'" /> -->
          </router-link>
        </v-toolbar-items>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-menu offset-y left="true" rounded="lg">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" class="menu elevation-0">
            <v-icon color="icon" v-on="on"> {{ selectedItem }} </v-icon>
            <v-icon color="icon"> mdi-chevron-down </v-icon>
          </v-btn>
        </template>

        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item"
            @click="selectItem(item)"
          >
            <v-list-item-icon>
              <v-icon color="icon" v-on="on"> {{ item.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <div class="text-right">
        <v-app-bar-nav-icon
          class="mbl-nav-icon"
          @click="toggleMenu"
        ></v-app-bar-nav-icon>
      </div>
    </v-app-bar>
    <!-- MOBILE NAVBAR -->

    <!-- MOBILE NAVIGATION DRAWER -->
    <v-navigation-drawer
      width="100%"
      v-if="showMenu"
      class="mbl-navbar"
      v-model="showMenu"
    >
      <v-list>
        <v-list-item link>
          <v-btn
            text
            large
            @click="scrollTo(0)"
            :class="{ activeButton: scrollPosition == 1150 }"
            class="text-capitalize btnText--text py-2"
          >
            About Me
          </v-btn>
        </v-list-item>
        <v-list-item link>
          <v-btn
            text
            large
            @click="scrollTo(750)"
            :class="{ activeButton: scrollPosition == 1950 }"
            class="text-capitalize btnText--text py-2"
          >
            Projects
          </v-btn>
        </v-list-item>
        <v-list-item link>
          <v-btn
            text
            large
            @click="scrollTo(1850)"
            :class="{ activeButton: scrollPosition == 3550 }"
            class="text-capitalize btnText--text py-2"
          >
            Skills
          </v-btn>
        </v-list-item>
        <v-list-item link>
          <v-btn
            text
            large
            @click="scrollTo(2850)"
            :class="{ activeButton: scrollPosition == 4350 }"
            class="text-capitalize btnText--text py-2"
          >
            Work Experience
          </v-btn>
        </v-list-item>

        <v-list-item link>
          <v-btn
            text
            large
            @click="scrollTo(4250)"
            :class="{ activeButton: scrollPosition == 5150 }"
            class="text-capitalize btnText--text py-2"
          >
            Contact
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      showMenu: false,
      scrollPosition: "",
      visible: false,
    };
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    ...mapActions(["moveToNext"]),
    playClickSound() {
      const audio = new Audio(require("../assets/sounds/click.wav"));
      audio.play();
    },
    selectItem(item) {
      this.selectedItem = item.icon;
      this.$emit("item-selected", this.selectedItem);
    },

    scrollTo(position) {
      this.playClickSound();
      this.scrollPosition = position;
      this.$store.commit("SET_SCROLL_POSITION", position);
    },
  },
  computed: {
    ...mapGetters(["$route"]),
  },
};
</script>

<style scoped></style>
