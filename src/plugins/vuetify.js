import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  
    theme: {
      dark: false,
        themes: {
          light: {
            primary: '#0EA7E9',
            secondary: '#344161',
            gray:'#7E9CC7'
           
          },
          dark: {
            primary: '#000000', // Example primary color
            secondary:'#FFEC00'
          },
          
        },
      },
});
