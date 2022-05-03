<template>
  <LoadingScreen v-if="loading" />
  <DefaultLayout v-if="!loading" />
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
const loading = ref(true);
(async () => setTimeout(() => (loading.value = false), 6000))();
</script>
