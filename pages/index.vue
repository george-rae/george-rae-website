<template>
  <LoadingScreen v-if="!bodyLoaded" />
  <main class="page page--home">
  </main>
</template>

<script setup>
  const bodyLoaded = ref(false);
  (async () => setTimeout(() => bodyLoaded.value = true, 6000))();
</script>