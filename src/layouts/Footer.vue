<template>
    <v-footer class="grey3" >
   <v-container fluid class="pa-md-8 pa-4">
     <v-row>
       <v-col cols="12" lg="4" md="12" sm="12" class=""> 
         <!-- <img src="../assets/BimmerTech logo.svg" alt="" class="mt-8 mt-md-0"> -->
         <div  :class="{'mt-12': !$vuetify.breakpoint.mdAndUp, 'social-links': $vuetify.breakpoint.mdAndUp}">
            <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      outlined
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      outlined
      label="E-mail"
      required
    ></v-text-field>

   

   

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    
  </v-form>

           <!-- <img src="../assets/fb-icon.svg" alt="">
           <img src="../assets/insta-icon.svg" alt="" class="ml-6">
           <img src="../assets/linkedin-icon.svg" alt="" class="ml-6">
           <img src="../assets/youtube-icon.svg" alt="" class="ml-6"> -->
           </div>
           <p class="text-caption white--text mt-4">© BimmeTech 2011-2022</p>
            </v-col>
       <v-col cols="12" lg="8" md="12" sm="12">
         <v-row>
           <v-col cols="12" lg="3" md="3" sm="6" class="pb-0" :class="{'': !$vuetify.breakpoint.smAndDown, 'custom': $vuetify.breakpoint.smAndDown}">
             <h4 class="white--text FF_montserrat">Our Company</h4>
             <v-list color="transparent" dense>
               <v-list-item
               link
                 v-for="(item, index) in company"
                 :key="index"
                 :to="item.link"
                 class="white--text  text-body-2 FF_montserrat-regular pl-0 pr-0"
               >
                 {{ item.title }}
               </v-list-item>
             </v-list>
           </v-col>
           <v-col cols="12" lg="3" md="3" sm="6" class="pb-0" :class="{'': !$vuetify.breakpoint.smAndDown, 'custom': $vuetify.breakpoint.smAndDown}">
             <h4 class="white--text FF_montserrat">Information</h4>
             <v-list color="transparent" dense>
               <v-list-item
                 v-for="(item, index) in information"
                 :key="index"
                 link
                 :to="item.link"
                 class="white--text  text-body-2 FF_montserrat-regular pl-0 pr-0"
               >
                 {{ item.title }}
               </v-list-item>
             </v-list>
           </v-col>
           
           <v-col cols="12" lg="3" md="3" sm="6" class="pb-0"  order-lg="2" :class="{'': !$vuetify.breakpoint.smAndDown, 'custom': $vuetify.breakpoint.smAndDown}">
             <h4 class="white--text FF_montserrat">Have Questions</h4>
             <v-list color="transparent" dense>
               <v-list-item
                 two-line
                 class="white--text  text-body-2 pl-0 pr-0"
               >
               <v-list-item-icon class=" mr-4 mt-3">
                <!-- <img src="../assets/Flag-USA.svg" alt=""> -->
            </v-list-item-icon>
                 <v-list-item-content>
                   <v-list-item-title>
                     <a href="tel:+16464397920" class="FF_montserrat-regular">+1 (646) 439 7920 </a>
                   </v-list-item-title>
                   <v-list-item-subtitle class="grey2--text">
                     (9:00am - 5:00pm ET)
                   </v-list-item-subtitle>
                 </v-list-item-content>
               </v-list-item>
            
               <v-list-item
                 two-line
                 class="white--text  text-body-2 pl-0"
               >
               <v-list-item-icon class=" mr-4 mt-3">
                <!-- <img src="../assets/whatsapp.svg" alt=""> -->
            </v-list-item-icon>
                 <v-list-item-content class="pt-0">
                   <v-list-item-title>
                     <a href="https://wa.me/1234567890" class="FF_montserrat-regular"> Whatsapp </a>
                   </v-list-item-title>
                   <v-list-item-subtitle class="grey2--text">
                     Worldwide chat with us
                   </v-list-item-subtitle>
                 </v-list-item-content>
               </v-list-item>
                <v-list-item
                 two-line
                 class="white--text  text-body-2 pl-0"
               >
               <v-list-item-icon class=" mr-4 mt-3">
                <!-- <img src="../assets/Email.svg" alt=""> -->
            </v-list-item-icon>
                 <v-list-item-content class="pt-0">
                   <v-list-item-title>
                     <a href="https://wa.me/1234567890" class="FF_montserrat-regular"> info@bimmer-tech.net </a>
                   </v-list-item-title>
                   
                 </v-list-item-content>
               </v-list-item>
             </v-list>
           </v-col>
           <v-col cols="12" lg="3" md="3" sm="6" class="pb-0" order-lg="1" :class="{'': !$vuetify.breakpoint.smAndDown, 'custom': $vuetify.breakpoint.smAndDown}">
             <h4 class="white--text FF_montserrat">Policies</h4>
             <v-list color="transparent" dense>
               <v-list-item
               link
                 v-for="(item, index) in policies"
                 :key="index"
                 :to="item.link"
                 class="white--text  text-body-2 FF_montserrat-regular pl-0 pr-0"
               >
                 {{ item.title }}
               </v-list-item>
             </v-list>
           </v-col>
          
         </v-row>
         <v-row class="mt-0">
           <v-col cols="12" lg="9" md="12" sm="12" class="pt-0">
<v-card width="100%" color="transparent" elevation="0" class="pr-md-16">
         <p class="grey2--text text-caption">BMW and MINI are registered trademarks of Bayerische Motoren Werke AG. BimmerTech is not affiliated with BMW AG in any way, and is not authorized by BMW AG to act as an official distributor or representative. The availability of BMW and MINI original products on this website should not be taken to imply that BimmerTech is endorsed by BMW AG or its associates.</p>
       </v-card>
           </v-col>
         </v-row>
         
       </v-col>
     </v-row>
   </v-container>
 </v-footer>
</template>
<script>
export default {
 data(){
     return{
       company: [
     {
       title: "About Us",
       link:"/page-about-us"
      
     },
    
     {
       title: "Contact Us",
       link: "/page-contact"
     },
   ],
   information: [
   {
       title: "Help",
       link: "/page-help"
       
     },
    
   ],
   policies: [
     {
       title: "Temrs & Conditions",
       link:"termsandconditions"
     },
     {
       title: "Privacy and cookies policy",
       link:"cookiespolicy"
     },
   ],
   questions: [
     {
       title: "Help",
     },
     {
       title: "Payment & Delivery",
     },
     {
       title: "Find your Installer",
     },
     {
       title: "For Dealers",
     },
   ],
     }
 }
}
</script>
<style scoped>
.v-list-item__subtitle {
font-size: 10px !important;
font-weight: 500;
line-height: 1rem;
}
a {
 text-decoration: none;
 color: #FAFAFA !important;
 
}
.social-links{
margin-top: 225px;
}

.custom.col-12 {
 flex: 0 0 100%;
 max-width: 50%;
}
</style>