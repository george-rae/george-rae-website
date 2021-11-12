<template>
  <default-layout>
    <LoadingScreen />
    <main class="page page--home"></main>
  </default-layout>
</template>

<script lang="ts">
import DefaultLayout from "~/layouts/default.vue";

export default {
  components: {
    DefaultLayout,
  },
};
</script>
