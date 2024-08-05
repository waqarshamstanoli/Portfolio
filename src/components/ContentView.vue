<template>
  <div>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      translateX: 0,
      rotation: 0,
    };
  },
  methods: {
    
  },
  created() {
  },
};
</script>
  <style>

</style>