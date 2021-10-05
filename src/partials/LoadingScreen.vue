<template>
  <div class="loading__screen">
    <p>L o a d i n g. . .</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue';
  export default defineComponent({
    name: "LoadingScreen"
  })
</script>

<style lang="scss">
  .loading__screen {
    position: absolute;
    top: 0; left: 0;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    height: 100%; width: 100%;

    visibility: visible;
    background: #697C84;

    p {
      animation: throbbing 5s 1 forwards;
      opacity: 1;

      color: #ffffff;
      font-size: 100px;
    }
  }

  @keyframes throbbing {
    0% {
      opacity: 0.5;
      transform: scale(1);
    }

    20% {
      opacity: 1;
      transform: scale(1.05);
    }

    40% {
      opacity: 0.5;
      transform: scale(1);
    }

    60% {
      opacity: 1;
      transform: scale(1.05);
    }

    80% {
      opacity: 0.5;
      transform: scale(1);
    }

    100% {
      opacity: 0;
      transform: scale(0.75);
    }
  }
    
</style>
