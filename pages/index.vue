<template>
  <div>
    <LoadingScreen v-if="!bodyLoaded" />
    <main class="page page--home"></main>
  </div>
</template>

<script>
export default {
  layout: "home",
};
</script>

<script setup>
const bodyLoaded = ref(false);
(async () => setTimeout(() => (bodyLoaded.value = true), 6000))();
</script>
