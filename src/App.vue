<template>
  <loading-screen v-if="!state.loaded" />
  <home v-if="state.loaded" />
</template>

<script lang="ts">
  import { defineComponent, ref, reactive, computed } from "vue";
  import useRouter from "vue-router";

  import LoadingScreen from './partials/LoadingScreen.vue';
  import Home from './views/Home.vue';

  export default defineComponent({
    name: "App",
    components: { Home, LoadingScreen },
    setup() {
      const router = new useRouter();
      const state = reactive({
        "loaded": false
      });
      (() => setTimeout(() => state.loaded = true, 5000))();
      
      return { state }
    }
  });

</script>

<style lang="scss">
  * { 
    box-sizing: border-box; 

    font: normal 400 16px/1.2 "Raleway", Arial, sans-serif;
  }

  body {
    position: relative;

    min-height: 100vh;
    min-width: 100vw;
    margin: 0;
    padding: 0;
  }
</style>
