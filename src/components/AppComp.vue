<template>
  <v-container>
    <v-row class="justify-space-around containerHeight">
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-card width="425" color="transparent" class="elevation-0 mx-auto">
          <v-card-text>
            <h1 class="text--h2 headingLeft">
              <span class="secondary--text"> ONE APP. </span> <br />

              MANY BENEFITS.
            </h1>
            <p class="text--body-1 ffHalyard mt-4 paragraphLeft">
              All within the app: Manage your membership, enjoy exclusive
              benefits and save real money. Watch out for our loyalty program.
              Coming soon! Download now and enjoy.
            </p>
          </v-card-text>
          <v-card-actions>
            <img src="../assets/google-icon.png" alt="" width="140" />
            <img
              src="../assets/apple-icon.png"
              alt=""
              width="140"
              class="ml-4"
            />
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12">
        <img src="../assets/mobile-app-screens.png" alt="" />
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
export default {
  data() {
    return {
      text: "Hello, World!",
      isTextVisible: false,
    };
  },
 
};
</script>
  
  <style>
/* @import url('https://fonts.googleapis.com/css2?family=Asap&display=swap'); */
/* *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Asap", sans-serif;
  }
  body{
    background: #42455a;
  }
  section{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  } */
/* section:nth-child(1){
    color: #e0ffff;
    }
  section:nth-child(2){
    color: #42455a;
    background: #e0ffff;
  } 
  section:nth-child(3){
    color: #e0ffff;
  }
  section:nth-child(4){
    color: #42455a;
    background: #e0ffff;
  }
  section .container{
    margin: 100px;
  }
  section h1{
    font-size: 3rem;
    margin: 20px;
  }
  section h2{
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
  }
  section .text-container{
     display: flex;
  }
  section .text-container .text-box{
    margin: 20px;
    padding: 20px;
    background: #00c2cb;
  }
  section .text-container .text-box h3{
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  
  @media (max-width: 900px){
    section h1{
      font-size: 2rem;
      text-align: center;
    }
    section .text-container{
      flex-direction: column;
    }
  } */


</style>
  