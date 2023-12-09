<template>
  <v-container>
    <v-row class="containerHeight">
      <v-col cols="12" lg="6" md="12" sm="12"></v-col>
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-card
          width="530"
          class=" elevation-0 mx-auto"
          color="transparent"
        >
          <h1 class="text--h2 headingRight">
            <span class="text--h2 secondary--text"> 28 FLAVORS </span> <br />
            ENDLESS VARIATIONS
          </h1>
          <p class="text--body-1 mt-4 ffHalyard paragraphRight">
            Discover the delicious BODYSHAKE® flavors. Unique flavor creations
            give you that extra taste-plus and truly never get boring. Choose
            your favorite - or try countless variations. Enjoy
            strawberry-chocolate or treat yourself with almond-vanilla. We got
            them all.
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    reveal() {
      console.log('flavours')
      var reveals = document.querySelectorAll(".headingRight");
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
    animateHeadingLeft() {
      console.log('flavours')
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
    animateParagraphRight() {
      var reveals = document.querySelectorAll(".paragraphRight");
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
    animateParagraphLeft() {
      var reveals = document.querySelectorAll(".paragraphLeft");
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
    animateHeadingCenter() {
      var reveals = document.querySelectorAll(".headingCenter");
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
    animateCenterCards() {
      var reveals = document.querySelectorAll(".centerCards");
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
  created() {
    window.addEventListener("scroll", this.reveal);
    window.addEventListener("scroll", this.animateParagraphRight);
    window.addEventListener("scroll", this.animateParagraphLeft);

    window.addEventListener("scroll", this.animateHeadingLeft);
    window.addEventListener("scroll", this.animateHeadingCenter);
    window.addEventListener("scroll", this.animateCenterCards);



  },
};
</script>

<style>
.containerHeight {
  display: flex;
  align-items: center; /* Vertically center the items */
  justify-content: center; /* Horizontally center the items */
  height: 100vh; /* Set the height of the container */
}

.headingRight {
  position: relative;
  opacity: 0; 
  visibility: hidden;
   transform: translate(150px, -50px);
  /* transform: translateY(-100px); */
  opacity: 0;
  transition: 2s all ease;
}

.headingRight.active{
  opacity: 1;
   visibility: inherit; 
   transform: translate(0px, 0px);
}
.paragraphRight {
  position: relative;
  opacity: 0; 
  visibility: hidden;
   transform: translate(150px, 50px);
  /* transform: translateY(-100px); */
  opacity: 0;
  transition: 2s all ease;
}

.paragraphRight.active{
  opacity: 1;
   visibility: inherit; 
   transform: translate(0px, 0px);
}
.headingLeft {
  position: relative;
  opacity: 0; 
  visibility: hidden;
   transform: translate(-200px, -200px);
  transition: 2s all ease;
}

.headingLeft.active{
  opacity: 1; 
  visibility: inherit;
   transform: translate(0px, 0px);
}
.paragraphLeft {
  position: relative;
  opacity: 0; 
  visibility: hidden;
   transform: translate(-200px, 70px);
  transition: 2s all ease;
}

.paragraphLeft.active{
  opacity: 1; 
  visibility: inherit;
   transform: translate(0px, 0px);
}
.headingCenter {
  position: relative;
  opacity: 0; 
  visibility: hidden;
   transform: translate(0px, -70px);
  transition: 2s all ease;
}

.headingCenter.active{
  opacity: 1; 
  visibility: inherit;
   transform: translate(0px, 0px);
}
.centerCards {
  position: relative;
  opacity: 0; 
  visibility: hidden;
  transform: scale(0.25);
  transition: 2s all ease;
}

.centerCards.active{
  opacity: 1; 
  visibility: inherit;
  transform: scale(1);
}

</style>
