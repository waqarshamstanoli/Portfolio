import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  
    theme: {
      dark: false,
        themes: {
          light: {
            primary: '#000000',
            secondary: '#585B5B',
            gray: '#bfbfbf',
            // error: '#b71c1c',
            // green:'#34C759',
            red:'#FF3B30',
            // blue:'#0A84FF', 
            // girlFriend:'#FF2D55',
            // purple:'#BF5AF2',
            // forGrad:'#32D74B'    
            
          },
          dark: {
            primary: '#000000', // Example primary color
            secondary:'#FFEC00'
          },
          
        },
      },
});
