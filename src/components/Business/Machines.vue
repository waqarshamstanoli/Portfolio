<template>
  <v-row>
    <v-col cols="12" lg="4" md="12" sm="12" class="height">
      <v-card width="470" color="transparent" class="elevation-0 mt-16 ml-auto">
        <v-card-text>
          <h2 class="text--h2 white--text">
            NUTRITIOUS. DELICIOUS.
            <br />
            <span class="secondary--text"> GENIUS.</span>
          </h2>
          <h3 class="text--h3 grey--text mt-2">
            ROBUST ON THE OUTSIDE. SMART ON THE INSIDE. MEET THE BODYSHAKE®
            VENDING MACHINE.
          </h3>
          <h3 class="text--body-2 white--text mt-16">INTERIEUR</h3>
          <p class="text--body-1 ffHalyard white--text mt-4">
            A generous supply container enables fresh BODYSHAKE®-blends with
            high quality ingredients. No chemicals. No BS. A high power cooling
            system puts refreshing drinks in your customers’ hands. A patented
            flavoring procedure makes taste buds go bananas. Smart self-cleaning
            keeps appliances sparkling clean. And thanks to cloud-connected
            machine management, usage and maintenance has never been easier.
            Even when you are not on site.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="12" sm="12" class="height">
      <img src="../../assets/machines.png" alt="" class="mt-16" />
    </v-col>
    <v-col cols="12" lg="4" md="12" sm="12">
      <v-card
        width="300"
        color="transparent"
        class="elevation-0 ml-12 machinesCard"
      >
        <v-card-text>
          <h3 class="text--body-2 white--text">EXTERIEUR</h3>
          <p class="text--body-1 ffHalyard white--text">
            Experience awesome LED illuminations with color glowing controls. An
            advanced chipset enables automatic cup delivery and contactless
            purchases. The stunning 32“ touch display showcases products in an
            absolutely brillant, responsive and crisp environment. A robust
            chassis frames the high quality screen elements. And an innovative
            keyless lock system keeps the guts safe. Security never looked
            sexier.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="12" sm="12">
      <v-card width="530" color="transparent" class="elevation-0 mt-16 ml-auto">
        <v-card-text>
          <h2 class="text--h2 white--text headingLeftBottom">
            LIGHT WEIGHT <br />
            LOOK. <br />
            <span class="secondary--text">
              HARDCORE <br />
              TECHNOLOGY.
            </span>
          </h2>
          <h3 class="text--h3 grey--text mt-4 paragraphLeft">
            THE INNOVATIVE LED SYSTEM PUTS YOUR BODYSHAKE® VENDING MACHINE AT
            THE CENTER OF ATTENTION. IN YOUR GYM, STORE, OR OFFICE. WANT TO KNOW
            HOW?
          </h3>
          <h3 class="text--h3 white--text mt-4 paragraphLeft">
            Explore it -- right here!
          </h3>
          <div class="d-flex mt-12">
            <img
              src="../../assets/Dark.png"
              alt=""
              width="100"
              class="cursor-pointer"
              @click="makeActive('dark')"
              v-if="!dark"
            />
            <img
              src="../../assets/active (2).png"
              alt=""
              width="100"
              v-if="dark"
            />

            <img
              src="../../assets/darkPurple.png"
              alt=""
              width="100"
              class="cursor-pointer"
              @click="makeActive('darkPurple')"
              v-if="!darkPurple"
            />

            <img
              src="../../assets/active (3).png"
              alt=""
              width="100"
              v-if="darkPurple"
            />

            <img
              src="../../assets/lightPurple.png"
              alt=""
              width="100"
              class="cursor-pointer"
              @click="makeActive('lightPurple')"
              v-if="!lightPurple"
            />
            <img
              src="../../assets/active (4).png"
              alt=""
              width="100"
              v-if="lightPurple"
            />
            <img
              src="../../assets/cleverFIt.png"
              alt=""
              width="100"
              class="cursor-pointer"
              @click="makeActive('cleverFit')"
              v-if="!cleverFit"
            />
            <img
              src="../../assets/active (5).png"
              alt=""
              width="100"
              v-if="cleverFit"
            />
            <img
              src="../../assets/10_maintrigger-easyfitness.png"
              alt=""
              width="100"
              class="cursor-pointer"
              @click="makeActive('easyFitness')"
              v-if="!easyFitness"
            />
            <img
              src="../../assets/active (1).png"
              alt=""
              width="100"
              v-if="easyFitness"
            />
          </div>
          <div class="text-center">
           <div class="hexagones"> 
            <button class="button" @click="makeCircleVisible('one')"></button>
                <button class="button " style="position:relative; top:30px" @click="makeCircleVisible('two')"></button>
                <button class="button " @click="makeCircleVisible('three')"></button> 
              </div>
  <div v-if="dark">
    <img src="../../assets/darkYellow.png" alt="" width="220" v-if="one" />
             <img src="../../assets/dark-red.png" alt="" width="220" v-if="three"/>
            <img src="../../assets/dark-purple.png" alt="" width="220" v-if="two"/>
  </div>


  <div v-if="darkPurple">
    <img src="../../assets/darkPurple-purple.png" alt="" width="220" v-if="one" />
    <img src="../../assets/darkPurple-lightPurple.png" alt="" width="220" v-if="two">
            <img src="../../assets/darkPurple-light.png" alt="" width="220" v-if="three"/></div>
            
            <div v-if="lightPurple">
              <img src="../../assets/lightPurple-lightpurple.png" alt="" width="220" v-if="two" />
             <img src="../../assets/lightPurple-purple.png" alt="" width="220" v-if="one"/>
            <img src="../../assets/lightPurple-white.png" alt="" width="220" v-if="three"/>
            </div>
            <div v-if="cleverFit">
              <img src="../../assets/cleverFitYellow.png" alt="" width="220" v-if="one"/>
             <img src="../../assets/cleverFitRed.png" alt="" width="220" v-if="two"/>
            <img src="../../assets/cleverFitwhite.png" alt="" width="220" v-if="three"/> 
            </div>
           <div v-if="easyFitness">
            <img src="../../assets/easyFitnessYellow.png" alt="" width="220" v-if="one" />
             <img src="../../assets/easyFittnessGreen.png" alt="" width="220" v-if="two"/>
            <img src="../../assets/easyFitnessPurple.png" alt="" width="220" v-if="three"/>
           </div>
            
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="8" md="12" sm="12">
      <div v-if="dark">
        <img src="../../assets/dark1.png" alt="" v-if="one" />
      <img src="../../assets/dark2.png" alt="" v-if="two" />
      <img src="../../assets/dark3.png" alt="" v-if="three"/>
      </div>
      <div v-if="darkPurple">
        <img src="../../assets/darkPurple1.png" alt="" v-if="one" />
      <img src="../../assets/darkPurple2.png" alt="" v-if="two"/>
      <img src="../../assets/darkPurple3.png" alt="" v-if="three"/>
      </div>
      <div v-if="lightPurple">
        <img src="../../assets/lightPurple1.png" alt="" v-if="one" />
      <img src="../../assets/lightPurple2.png" alt="" v-if="two"/>
      <img src="../../assets/lightPurple3.png" alt="" v-if="three"/>
      </div>
      <div v-if="cleverFit">
        <img src="../../assets/cleverFit1.png" alt="" v-if="one" />
      <img src="../../assets/cleverFit2.png" alt="" v-if="two"/>
      <img src="../../assets/cleverFit3.png" alt="" v-if="three"/>
      </div>
      <div v-if="easyFitness">
        <img src="../../assets/easyFitness1.png" alt="" v-if="one" />
      <img src="../../assets/easyFitness2.png" alt="" v-if="two"/>
      <img src="../../assets/easyFitness3.png" alt="" v-if="three"/>
      </div>
      
      
      
      
     
    </v-col>

    <v-col cols="12" lg="6" md="12" sm="12">
      <img src="../../assets/machines-dark-yellow.png" alt="" />
    </v-col>
    <v-col cols="12" lg="6" md="12" sm="12">
      <v-card width="550" color="transparent" class="elevation-0 mt-16 mx-auto">
        <v-card-text>
          <h2 class="text--h2 white--text">
            TIRELESSLY. ENTIRELY. <br />

            <span class="secondary--text"> INTUITIVELY.</span>
          </h2>
          <h3 class="text--h3 grey--text mt-4">
            EXPERIENCE EASY CONTROLS ON BODYSHAKE® MACHINES.
          </h3>
          <p class="mt-4 ffHalyard text--body-1 paragraphRight">
            Get blown away by the generous 32“ BODYSHAKE® display. <br />
            Animated screensavers will greet your customers before <br />
            activating the screen with a single touch. Smooth video <br />
            playback and clean graphics lead you through a smart user <br />
            interface.
          </p>
          <p class="mt-4 ffHalyard text--body-1 paragraphRight">
            Your customers can create their own personal shake. While <br />
            the machine freshly prepares the drink you can show them <br />
            pre-selected video ads. That way, you do not only provide <br />
            superb protein products - but also a highly customized <br />
            advertising experience.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="8" md="12" sm="12">
      <v-card width="500" color="transparent" class="elevation-0 mt-16 mx-auto">
        <v-card-text>
          <h2 class="text--h2 white--text headingLeftBottom">
            DEEP WORK MEETS <br />
            <span class="secondary--text"> CLEAN WORK. </span>
          </h2>
          <h3 class="text--h3 grey--text mt-4 headingLeftBottom">
            HOW BODYSHAKE® MAKES CASHLESS PAYMENT EASY.
          </h3>
          <p class="mt-4 ffHalyard text--body-1 paragraphLeft">
            At BODYSHAKE® vending machines, customers can easily pay cashless.
            With the support of Electronic Cash, Visa and Mastercard payments
            work as easy as contactless purchases via PayPal, ApplePay or
            GooglePay.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4" md="12" sm="12">
      <img src="../../assets/healthy_machine.png" alt="" />
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      dark: true,
      darkPurple: false,
      lightPurple: false,
      easyFitness: false,
      cleverFit: false,
      one:true,
      two:false,
      three:false
      // darkCircle:false,
    };
  },
  methods: {
    makeActive(e) {
      if (e == "dark") {
        this.dark = true;
        this.darkPurple = false;
        this.lightPurple = false;
        this.cleverFit = false;
        this.easyFitness = false;
        
      } else if (e == "darkPurple") {
        this.dark = false;
        this.darkPurple = true;
        this.lightPurple = false;
        this.cleverFit = false;
        this.easyFitness = false;
      } else if (e == "lightPurple") {
        this.dark = false;
        this.darkPurple = false;
        this.lightPurple = true;
        this.cleverFit = false;
        this.easyFitness = false;
      } else if (e == "cleverFit") {
        this.dark = false;
        this.darkPurple = false;
        this.lightPurple = false;
        this.cleverFit = true;
        this.easyFitness = false;
      } else if (e == "easyFitness") {
        this.dark = false;
        this.darkPurple = false;
        this.lightPurple = false;
        this.cleverFit = false;
        this.easyFitness = true;
      }
    },
    makeCircleVisible(e){
      if(e=='two'){
        this.two=true
      this.one=false
      this.three=false
      }
      else if (e=='three'){
        this.two=false
      this.one=false
      this.three=true
      }
      if(e=='one'){
        this.two=false
      this.one=true
      this.three=false
      }
     
    }
  },
};
</script>
<style>
.button {
  background-color: transparent; /* Green */
  border: none;
  cursor: pointer;
  width:50px;
  height:50px;
  border-radius: 50%;
}
.hexagones{
  position:relative; top:85px
}

</style>