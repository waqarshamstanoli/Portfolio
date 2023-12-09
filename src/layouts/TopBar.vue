<template>
  <div>
    <v-app-bar class="pb-8 pt-4  primary" extended fixed app>
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
          <div class="d-flex justify-end">
            <span class="gray--text text-uppercase topBarSpan">consumer</span>
            <input-switch class="mt-n4 mx-4" v-model="consumer"  @switch-changed="toggleTheme"></input-switch>
            <!-- <div>
  <input type="checkbox" id="switch"   @click="toggleTheme" /><label for="switch">Toggle</label>
</div> -->
            <!-- <v-switch inset dense  color="green" class="mt-0 mx-4" v-model="consumer"></v-switch> -->
            <span class="gray--text text-uppercase topBarSpan">business</span>
            <div class="aselect">
             

              <div class="selector" @click="toggle()">
                <div class="label">
                  <span>{{ value }}</span>
                </div>
                <div class="arrow"  ></div>
                <div>
                  <ul v-if="visible">
                    <li class="d-flex" v-for="item in list" :key="item" @click="select(item)">
                      <span><img src="../assets/ger-flag.png" alt="" class="mr-2"/></span>
                      {{ item.name }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-end" v-if="!consumer">
            <v-btn text large @click="scrollTo(1150)"> flavors </v-btn>
            <v-btn text large @click="scrollTo(1950)"> how it works </v-btn>
            <v-btn text large @click="scrollTo(3550)"> app </v-btn>
            <v-btn text large @click="scrollTo(4350)"> sustainability </v-btn>
            <v-btn text large @click="scrollTo(5150)"> about us </v-btn>
          </div>
          <div class="d-flex justify-end" v-else>
            <v-btn text large to="/business/machines" > machine </v-btn>
            <v-btn text large to="/business/app"> app </v-btn>
            <v-btn text large to="/business/refillment"> refillment </v-btn>
            <v-btn text large to="/business/digitalization"> digitilization </v-btn>
            <v-btn text large to="/business/about"> about  </v-btn>
            <v-btn text large to="/business/contact"> contact  </v-btn>
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
import InputSwitch from '@/components/InputSwitch.vue';
import { mapActions,  } from 'vuex';
export default {
  components: { InputSwitch },
  data() {
    return {
      drawer: false,
      dashboardButton: false,
consumer:false,
      visible: false,
      value: "DE",
      list: [
        { name: "DE", img: "require('../assets/logo.png')" },
        { name: "GER", img: "require('../assets/logo.png')" },
      ],
    };
  },
  methods: {
    ...mapActions([
      'moveToNext'
    ]),
    openModal() {
      this.$emit("openDialog", true);
    },
    toggle() {
      this.visible = true;
      console.log(this.visible);
    },
    select(option) {
      console.log(option);
      this.value = option.name;
    },
    // scrollTo(scrollValue){
    //   this.moveToNext(scrollValue)
    // },
    toggleTheme() {
      this.consumer=!this.consumer
      if(this.$vuetify.theme.dark ==false){
        this.$vuetify.theme.dark=true
        // this.$router.push({path:'/business/machines'})
      }
      else{
        this.$vuetify.theme.dark=false
        // this.$router.push({path:'/'})
      }
      
    // this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
  },
  scrollTo(color) {
     
     this.$store.commit("SET_SCROLL_POSITION", 
       color
     );
   }
  },
  computed: {},
};
</script>

<style scoped>

.aselect {
  width: 65px;
}

.arrow {
  position: absolute;
  right: 10px;
  top: 40%;
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
  padding: 12px;
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
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  border: 1px solid gainsboro;
  position: absolute;
  z-index: 1;
  background: #fff;
  border-radius: 5px;
  padding: 10px;
}
</style>
