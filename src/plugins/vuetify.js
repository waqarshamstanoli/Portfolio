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
            gray:'#7E9CC7',
            icon:'#344161',
            blue:'#F9FBFF',
            btnText:'#2E548C'

            
           
           
          },
          dark: {
            primary: '#0EA7E9',
            secondary:'#B9E0F2',
            gray:'#7E9CC7',
            icon:'#0EA7E9',
            blue:'#0F172A',
            btnText:'94a9c9'
          },
          
        },
      },
});
