<template>
  <LoadingScreen />
  <DefaultLayout />
</template>

<script lang="ts">
import DefaultLayout from "~/layouts/default.vue";

export default {
  components: {
    DefaultLayout,
  },
};
</script>

<script setup lang="ts">
const bodyLoaded = ref(false);
(() => setTimeout(() => (bodyLoaded.value = true), 6000))();
</script>
