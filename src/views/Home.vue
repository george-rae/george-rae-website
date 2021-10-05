<template>
  <main class="page page--home">
    <navbar />
  </main>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from "vue";
  import useRouter from "vue-router";

  import Navbar from '../partials/Nav.vue';

  export default defineComponent({
    name: "Home",
    components: { Navbar },
    mounted() {
      setTimeout(() => this.$el.classList.add("loaded"), 3150);
    }
  });

</script>

<style lang="scss">
  main {
    position: relative;

    min-height: 100vh;
    min-width: 100vw;

    overflow: hidden;

    &:before, &:after {
      position: absolute;
      top: 0;

      box-sizing: border-box;
      height: 100%; width: 125%;

      background: #697C84;
      content: "";
    }

    &:before {
      left: -25vw;
      z-index: 1;

      transform: rotate(30deg) translateY(38%) translateX(35px);

      animation: engage-top 3s forwards;
    }

    &:after {
      right: -25vw;

      background: rgba(105,124,132,1);      
      background: linear-gradient(180deg, rgba(105,124,132,1) 0%, rgba(105,124,132,1) 99.5%, rgba(255,255,255,1) 99.5%, rgba(255,255,255,1) 100%);

      transform: rotate(30deg) translateY(-35%) translateX(-35px);

      animation: engage-bottom 3s forwards;
    }
    
    &.loaded {
      overflow-y: auto;

      &:before, &:after { content: none; }
    }

    @keyframes engage-top {
      0% {
        transform: rotate(30deg) translateY(38%) translateX(35px);
      }

      25% {
        transform: rotate(30deg) translateY(calc(39% + 1px)) translateX(35px);
      }

      100% {
        transform: rotate(30deg) translateY(150%) translateX(-150px);
      }
    }

    @keyframes engage-bottom {
      25% {
        transform: rotate(30deg) translateY(-35%) translateX(-35px);
      }

      100% {
        transform: rotate(30deg) translateY(-150%) translateX(150px);
      }
    }
  }
</style>